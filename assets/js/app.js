/* =========================================================
   IWU – Artificial Intelligence Training  |  course engine
   Renders a course definition (window.IWU_COURSE) into lessons,
   interactive activities, knowledge checks, a final exam and a
   branded certificate. Progress is saved in localStorage.
   ========================================================= */
(function () {
  "use strict";

  var COURSE = window.IWU_COURSE;
  if (!COURSE) return;

  var PASS_PCT = 80;
  var EXAM_LEN = 20;
  var STORE_KEY = "iwu-ai-training:" + COURSE.id;

  /* ---------- state ---------- */
  function freshState() {
    return { name: "", seen: {}, quizzes: {}, exam: { attempts: [], passed: false }, reflections: {} };
  }
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        var base = freshState();
        for (var k in base) if (!(k in s)) s[k] = base[k];
        return s;
      }
    } catch (e) { /* storage unavailable */ }
    return freshState();
  }
  var state = load();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    try {
      var shared = JSON.parse(localStorage.getItem("iwu-ai-training:learner") || "{}");
      if (state.name) shared.name = state.name;
      localStorage.setItem("iwu-ai-training:learner", JSON.stringify(shared));
    } catch (e) { /* ignore */ }
  }
  if (!state.name) {
    try { state.name = (JSON.parse(localStorage.getItem("iwu-ai-training:learner") || "{}").name) || ""; } catch (e) { /* ignore */ }
  }

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  var LETTERS = "ABCDEFGH";
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function fmtDate(d) {
    return new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  /* ---------- progress ---------- */
  function lessonKey(m, l) { return "m" + m + "l" + l; }
  function moduleDone(m) {
    var mod = COURSE.modules[m];
    for (var l = 0; l < mod.lessons.length; l++) if (!state.seen[lessonKey(m, l)]) return false;
    var q = state.quizzes["m" + m];
    return !!(q && q.done);
  }
  function allModulesDone() {
    for (var m = 0; m < COURSE.modules.length; m++) if (!moduleDone(m)) return false;
    return true;
  }
  function progressPct() {
    var total = 0, got = 0;
    COURSE.modules.forEach(function (mod, m) {
      mod.lessons.forEach(function (_, l) { total++; if (state.seen[lessonKey(m, l)]) got++; });
      total++; if (state.quizzes["m" + m] && state.quizzes["m" + m].done) got++;
    });
    total++; if (state.exam.passed) got++;
    return Math.round((got / total) * 100);
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var h = location.hash.replace(/^#/, "");
    var r = { view: "home" };
    if (!h) return r;
    var p = {};
    h.split("&").forEach(function (kv) { var x = kv.split("="); p[x[0]] = x[1]; });
    if (p.m != null && p.l != null) return { view: "lesson", m: +p.m, l: +p.l };
    if (p.quiz != null) return { view: "quiz", m: +p.quiz };
    if ("exam" in p) return { view: "exam" };
    if ("cert" in p) return { view: "cert" };
    return r;
  }
  function go(hash) {
    if (location.hash === "#" + hash) render();
    else location.hash = hash;
  }

  /* ---------- chrome ---------- */
  function renderChrome(route) {
    var pct = progressPct();
    $("#overall-pct").textContent = pct + "%";
    $("#overall-bar").style.width = pct + "%";

    var nav = $("#nav");
    nav.innerHTML = "";
    var homeBtn = el("div", { class: "nav-module" + (route.view === "home" ? " active" : "") });
    homeBtn.appendChild(el("button", { onclick: function () { go(""); closeMenu(); } },
      '<span class="nav-num">&#8962;</span><span><span class="nav-title">Course Home</span><br><span class="nav-sub">Overview &amp; progress</span></span>'));
    nav.appendChild(homeBtn);

    COURSE.modules.forEach(function (mod, m) {
      var active = (route.view === "lesson" || route.view === "quiz") && route.m === m;
      var wrap = el("div", { class: "nav-module" + (active ? " active" : "") + (moduleDone(m) ? " done" : "") });
      wrap.appendChild(el("button", {
        onclick: function () { go("m=" + m + "&l=0"); closeMenu(); }
      }, '<span class="nav-num">' + (moduleDone(m) ? "&#10003;" : (m + 1)) + '</span><span><span class="nav-title">' + esc(mod.title) + '</span><br><span class="nav-sub">' + mod.lessons.length + " lessons &middot; " + (mod.minutes || 15) + " min</span></span>"));
      var ul = el("ul", { class: "nav-lessons" });
      mod.lessons.forEach(function (les, l) {
        var li = el("li");
        var cur = route.view === "lesson" && route.m === m && route.l === l;
        li.appendChild(el("button", {
          class: cur ? "current" : "",
          onclick: function () { go("m=" + m + "&l=" + l); closeMenu(); }
        }, '<span class="tick">' + (state.seen[lessonKey(m, l)] ? "&#10003;" : "") + "</span>" + esc(les.title)));
        ul.appendChild(li);
      });
      var qli = el("li");
      var qd = state.quizzes["m" + m] && state.quizzes["m" + m].done;
      qli.appendChild(el("button", {
        class: route.view === "quiz" && route.m === m ? "current" : "",
        onclick: function () { go("quiz=" + m); closeMenu(); }
      }, '<span class="tick">' + (qd ? "&#10003;" : "") + "</span>Knowledge Check"));
      ul.appendChild(qli);
      wrap.appendChild(ul);
      nav.appendChild(wrap);
    });

    var ex = el("div", { class: "nav-exam" });
    var unlocked = allModulesDone();
    var examBtn = el("button", {
      class: "btn" + (unlocked ? "" : " ghost"),
      onclick: function () { go("exam"); closeMenu(); }
    }, (unlocked ? "" : "&#128274; ") + "Final Exam");
    ex.appendChild(examBtn);
    if (state.exam.passed) {
      ex.appendChild(el("button", { class: "btn secondary", style: "margin-top:8px", onclick: function () { go("cert"); closeMenu(); } }, "My Certificate"));
    }
    nav.appendChild(ex);
  }
  function closeMenu() { $("#sidebar").classList.remove("open"); }

  /* ---------- views ---------- */
  function render() {
    var route = parseHash();
    if (route.view === "lesson" && !COURSE.modules[route.m]) route = { view: "home" };
    if (route.view === "lesson" && !COURSE.modules[route.m].lessons[route.l]) route = { view: "quiz", m: route.m };
    if (route.view === "quiz" && !COURSE.modules[route.m]) route = { view: "home" };
    var c = $("#content");
    c.innerHTML = "";
    if (route.view === "home") renderHome(c);
    else if (route.view === "lesson") renderLesson(c, route.m, route.l);
    else if (route.view === "quiz") renderQuiz(c, route.m);
    else if (route.view === "exam") renderExam(c);
    else if (route.view === "cert") renderCert(c);
    renderChrome(route);
    window.scrollTo(0, 0);
    var h = c.querySelector("h2");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  function nameForm(onSaved, label) {
    var f = el("form", { class: "name-form" });
    var inp = el("input", { type: "text", placeholder: "Full name as it should appear on your certificate", "aria-label": "Your full name", maxlength: "70" });
    inp.value = state.name || "";
    f.appendChild(inp);
    f.appendChild(el("button", { class: "btn", type: "submit" }, label || "Save name"));
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = inp.value.trim().replace(/\s+/g, " ");
      if (!v) { toast("Please enter your name."); return; }
      state.name = v; save(); toast("Saved. Welcome, " + v + "!");
      if (onSaved) onSaved();
    });
    return f;
  }

  function renderHome(c) {
    c.appendChild(el("div", { class: "crumb" }, esc(COURSE.audience) + " Track"));
    c.appendChild(el("h2", null, esc(COURSE.title)));
    c.appendChild(el("p", { class: "lead" }, COURSE.intro));

    var stats = el("div", { class: "exam-intro" });
    var mins = COURSE.modules.reduce(function (a, m) { return a + (m.minutes || 15); }, 0);
    stats.innerHTML =
      '<div class="stat"><b>' + COURSE.modules.length + '</b>Modules</div>' +
      '<div class="stat"><b>~' + Math.round(mins / 6) / 10 + ' hrs</b>Estimated time</div>' +
      '<div class="stat"><b>' + EXAM_LEN + '</b>Final exam questions</div>' +
      '<div class="stat"><b>' + PASS_PCT + '%</b>To earn certificate</div>';
    c.appendChild(stats);

    var who = el("div", { class: "block callout info" });
    who.innerHTML = '<div class="ct">Your name</div>' + (state.name
      ? "Your certificate will be issued to <strong>" + esc(state.name) + "</strong>. You can change it below."
      : "Enter your name so your certificate of completion can be issued to you.");
    who.appendChild(nameForm(function () { render(); }));
    c.appendChild(who);

    c.appendChild(el("h3", null, "Modules"));
    var list = el("div", { class: "cards" });
    COURSE.modules.forEach(function (mod, m) {
      var seen = mod.lessons.filter(function (_, l) { return state.seen[lessonKey(m, l)]; }).length;
      var q = state.quizzes["m" + m];
      var card = el("div", { class: "card" });
      card.innerHTML = "<h4>Module " + (m + 1) + (moduleDone(m) ? " &#10003;" : "") + "</h4><p><strong>" + esc(mod.title) + "</strong></p>" +
        '<p style="color:var(--muted);margin-top:6px">' + esc(mod.summary) + "</p>" +
        '<p style="font-size:.85rem;margin-top:8px">' + seen + "/" + mod.lessons.length + " lessons" + (q && q.done ? " &middot; Check: " + q.score + "/" + q.total : "") + "</p>";
      var b = el("button", { class: "btn small" + (moduleDone(m) ? " secondary" : ""), style: "margin-top:10px", onclick: function () { go("m=" + m + "&l=0"); } },
        moduleDone(m) ? "Review" : (seen ? "Continue" : "Start"));
      card.appendChild(b);
      list.appendChild(card);
    });
    c.appendChild(list);

    var ex = el("div", { class: "block callout " + (state.exam.passed ? "ok" : allModulesDone() ? "" : "warn") });
    if (state.exam.passed) {
      ex.innerHTML = '<div class="ct">Final exam passed</div>You passed with ' + state.exam.best + "% on " + fmtDate(state.exam.passedAt) + ". ";
      ex.appendChild(el("button", { class: "btn small", onclick: function () { go("cert"); } }, "View certificate"));
    } else if (allModulesDone()) {
      ex.innerHTML = '<div class="ct">Final exam unlocked</div>All modules are complete. The exam has ' + EXAM_LEN + " questions; score " + PASS_PCT + "% or higher to earn your certificate. Unlimited retakes. ";
      ex.appendChild(el("button", { class: "btn small", onclick: function () { go("exam"); } }, "Take the final exam"));
    } else {
      ex.innerHTML = '<div class="ct">Final exam</div>Complete every lesson and knowledge check to unlock the ' + EXAM_LEN + "-question final exam.";
    }
    c.appendChild(ex);

    var reset = el("p", { style: "margin-top:30px;font-size:.85rem;color:var(--muted)" }, "Progress is saved in this browser. ");
    reset.appendChild(el("button", {
      class: "btn ghost small",
      onclick: function () {
        if (confirm("Reset all progress for this track? Your certificate record in this browser will be removed.")) {
          var n = state.name; state = freshState(); state.name = n; save(); render(); toast("Progress reset.");
        }
      }
    }, "Reset progress"));
    c.appendChild(reset);
  }

  function renderLesson(c, m, l) {
    var mod = COURSE.modules[m];
    var les = mod.lessons[l];
    state.seen[lessonKey(m, l)] = true; save();

    c.appendChild(el("div", { class: "crumb" }, "Module " + (m + 1) + " &middot; " + esc(mod.title)));
    c.appendChild(el("h2", null, esc(les.title)));
    var steps = el("div", { class: "lesson-steps", "aria-hidden": "true" });
    for (var i = 0; i <= mod.lessons.length; i++) {
      var s = el("span");
      if (i === l) s.className = "on";
      else if (i < mod.lessons.length && state.seen[lessonKey(m, i)]) s.className = "seen";
      steps.appendChild(s);
    }
    c.appendChild(steps);

    if (l === 0 && mod.objectives) {
      var ob = el("div", { class: "objectives" });
      ob.innerHTML = "<h4>In this module you will</h4><ul>" + mod.objectives.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ul>";
      c.appendChild(ob);
    }
    les.blocks.forEach(function (b) { c.appendChild(renderBlock(b, m, l)); });

    var pager = el("div", { class: "pager" });
    var prev = l > 0 ? "m=" + m + "&l=" + (l - 1) : (m > 0 ? "quiz=" + (m - 1) : "");
    pager.appendChild(el("button", { class: "btn ghost", onclick: function () { go(prev); } }, "&larr; " + (l > 0 ? "Previous lesson" : (m > 0 ? "Previous module" : "Course home"))));
    var nextHash = l < mod.lessons.length - 1 ? "m=" + m + "&l=" + (l + 1) : "quiz=" + m;
    pager.appendChild(el("button", { class: "btn", onclick: function () { go(nextHash); } }, (l < mod.lessons.length - 1 ? "Next lesson" : "Knowledge check") + " &rarr;"));
    c.appendChild(pager);
  }

  /* ---------- blocks ---------- */
  function actHead(badge, title, instructions) {
    var f = document.createDocumentFragment();
    var h = el("div", { class: "act-head" }, '<span class="act-badge">' + badge + "</span>" + (title ? "<h4>" + title + "</h4>" : ""));
    f.appendChild(h);
    if (instructions) f.appendChild(el("p", { class: "instructions" }, instructions));
    return f;
  }

  function renderBlock(b, m, l) {
    var w = el("div", { class: "block" });
    switch (b.type) {
      case "html":
        w.innerHTML = b.html; break;

      case "callout":
        w.className = "block callout " + (b.tone || "");
        w.innerHTML = (b.title ? '<div class="ct">' + b.title + "</div>" : "") + b.html; break;

      case "quote":
        w.className = "block quote"; w.innerHTML = b.html; break;

      case "table":
        var t = '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + b.head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
        w.innerHTML = (b.title ? "<h4>" + b.title + "</h4>" : "") + t + (b.note ? '<p style="font-size:.88rem;color:var(--muted)">' + b.note + "</p>" : ""); break;

      case "cards":
        w.innerHTML = (b.title ? "<h4>" + b.title + "</h4>" : "") + '<div class="cards">' + b.items.map(function (it) {
          return '<div class="card"' + (it.color ? ' style="border-top-color:' + it.color + '"' : "") + "><h4" + (it.color ? ' style="color:' + it.color + '"' : "") + ">" + it.title + "</h4><p>" + it.text + "</p></div>";
        }).join("") + "</div>"; break;

      case "steps":
        w.innerHTML = (b.title ? "<h4>" + b.title + "</h4>" : "") + '<ol class="steps">' + b.items.map(function (it) {
          return "<li><strong>" + it.title + "</strong>" + it.html + "</li>";
        }).join("") + "</ol>"; break;

      case "accordion":
        w.className = "block accordion";
        w.innerHTML = (b.title ? "<h4>" + b.title + "</h4>" : "") + b.items.map(function (it) {
          return "<details><summary>" + it.title + '</summary><div class="acc-body">' + it.html + "</div></details>";
        }).join(""); break;

      case "compare":
        w.innerHTML = (b.title ? "<h4>" + b.title + "</h4>" : "") + '<div class="compare"><div class="col bad"><h5>' + b.bad.title + "</h5>" + b.bad.html +
          '</div><div class="col good"><h5>' + b.good.title + "</h5>" + b.good.html + "</div></div>"; break;

      case "example":
        w.innerHTML = '<div class="example-card"><div class="ex-head">Example &middot; ' + b.title + '</div><div class="ex-body">' + b.html + "</div></div>"; break;

      case "chat":
        w.innerHTML = '<div class="example-card"><div class="ex-head">' + (b.title || "Example conversation") + '</div><div class="ex-body"><div class="chat">' +
          b.turns.map(function (t) {
            return '<div class="who">' + esc(t.who) + '</div><div class="msg' + (t.who === "AI" ? " ai" : "") + '">' + t.t + "</div>";
          }).join("") + "</div>" + (b.note ? '<div class="callout info" style="margin-top:12px">' + b.note + "</div>" : "") + "</div></div>"; break;

      case "flip": return flipBlock(b);
      case "scenario": return scenarioBlock(b);
      case "classify": return classifyBlock(b);
      case "spot": return spotBlock(b);
      case "match": return matchBlock(b);
      case "checklist": return checklistBlock(b);
      case "reflect": return reflectBlock(b, m, l);
      default: w.textContent = "";
    }
    return w;
  }

  function flipBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Interactive", b.title || "Flip the cards", b.instructions || "Select each card to reveal the explanation."));
    var g = el("div", { class: "flip-grid" });
    b.cards.forEach(function (cd) {
      var btn = el("button", { class: "flip", "aria-pressed": "false", type: "button" },
        '<div class="flip-inner"><div class="flip-face flip-front">' + cd.front + "<small>" + (cd.hint || "Tap to flip") + '</small></div><div class="flip-face flip-back">' + cd.back + "</div></div>");
      btn.addEventListener("click", function () {
        btn.classList.toggle("flipped");
        btn.setAttribute("aria-pressed", btn.classList.contains("flipped") ? "true" : "false");
      });
      g.appendChild(btn);
    });
    w.appendChild(g);
    return w;
  }

  function scenarioBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Scenario", b.title, null));
    w.appendChild(el("p", null, b.prompt));
    var ch = el("div", { class: "choices" });
    var fb = el("div", { class: "feedback", role: "status" });
    b.options.forEach(function (o, i) {
      var btn = el("button", { class: "choice", type: "button" }, '<span class="key">' + LETTERS[i] + "</span><span>" + o.t + "</span>");
      btn.addEventListener("click", function () {
        ch.querySelectorAll(".choice").forEach(function (x) { x.classList.remove("correct", "incorrect"); });
        btn.classList.add(o.ok ? "correct" : "incorrect");
        fb.className = "feedback show " + (o.ok ? "good" : "bad");
        fb.innerHTML = "<strong>" + (o.ok ? "Good choice. " : "Not the best choice. ") + "</strong>" + o.fb;
      });
      ch.appendChild(btn);
    });
    w.appendChild(ch);
    w.appendChild(fb);
    return w;
  }

  function classifyBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Activity", b.title, b.instructions));
    var answered = 0, correct = 0;
    var score = el("div", { class: "score-line", role: "status" });
    b.items.forEach(function (it) {
      var row = el("div", { class: "classify-item" });
      row.appendChild(el("div", { class: "stmt" }, it.t));
      var opts = el("div", { class: "classify-opts" });
      var tries = 0;
      b.options.forEach(function (o, i) {
        var btn = el("button", { type: "button" }, o);
        btn.addEventListener("click", function () {
          if (row.classList.contains("answered")) return;
          tries++;
          if (i === it.a) {
            btn.classList.add("correct");
            row.classList.add("answered");
            opts.querySelectorAll("button").forEach(function (x) { x.disabled = true; });
            answered++; if (tries === 1) correct++;
            if (answered === b.items.length) score.textContent = "Complete: " + correct + " of " + b.items.length + " correct on the first try.";
          } else {
            btn.classList.add("incorrect");
            btn.disabled = true;
          }
        });
        opts.appendChild(btn);
      });
      row.appendChild(opts);
      row.appendChild(el("div", { class: "why" }, it.why));
      w.appendChild(row);
    });
    w.appendChild(score);
    return w;
  }

  function spotBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Spot the problem", b.title, b.instructions));
    var doc = el("div", { class: "spot-doc" });
    if (b.label) doc.appendChild(el("div", { class: "doc-label" }, b.label));
    var body = el("div");
    var spots = [];
    b.segments.forEach(function (sg) {
      var s = el("button", { class: "spot", type: "button", "aria-pressed": "false" }, sg.t);
      s.addEventListener("click", function () {
        if (w.dataset.checked) return;
        s.classList.toggle("flagged");
        s.setAttribute("aria-pressed", s.classList.contains("flagged") ? "true" : "false");
      });
      spots.push({ node: s, seg: sg });
      body.appendChild(s);
      body.appendChild(document.createTextNode(" "));
    });
    doc.appendChild(body);
    w.appendChild(doc);
    var notes = el("div", { class: "spot-notes feedback neutral", role: "status" });
    var bar = el("div", { style: "margin-top:12px;display:flex;gap:10px;flex-wrap:wrap" });
    var check = el("button", { class: "btn small", type: "button" }, "Check my answers");
    var again = el("button", { class: "btn ghost small", type: "button", style: "display:none" }, "Try again");
    check.addEventListener("click", function () {
      w.dataset.checked = "1";
      var hits = 0, total = 0, falseFlags = 0;
      var list = [];
      spots.forEach(function (x) {
        var f = x.node.classList.contains("flagged");
        if (x.seg.issue) {
          total++;
          if (f) { hits++; x.node.classList.add("hit"); } else x.node.classList.add("miss");
          list.push("<li><strong>" + (f ? "Found" : "Missed") + ":</strong> " + x.seg.issue + "</li>");
        } else if (f) { falseFlags++; x.node.classList.add("false-flag"); }
      });
      notes.innerHTML = "<strong>You found " + hits + " of " + total + " problems" + (falseFlags ? " (and flagged " + falseFlags + " sentence" + (falseFlags > 1 ? "s" : "") + " that were fine)" : "") + ".</strong><ul>" + list.join("") + "</ul>" + (b.takeaway ? "<p>" + b.takeaway + "</p>" : "");
      notes.classList.add("show");
      check.style.display = "none"; again.style.display = "";
    });
    again.addEventListener("click", function () {
      delete w.dataset.checked;
      spots.forEach(function (x) { x.node.classList.remove("flagged", "hit", "miss", "false-flag"); x.node.setAttribute("aria-pressed", "false"); });
      notes.classList.remove("show");
      check.style.display = ""; again.style.display = "none";
    });
    bar.appendChild(check); bar.appendChild(again);
    w.appendChild(bar);
    w.appendChild(notes);
    return w;
  }

  function matchBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Match", b.title, b.instructions));
    var rows = [];
    b.items.forEach(function (it, idx) {
      var r = el("div", { class: "match-row" });
      var id = "m" + Math.random().toString(36).slice(2, 8) + idx;
      r.appendChild(el("label", { for: id }, it.t));
      var sel = el("select", { id: id });
      sel.appendChild(el("option", { value: "" }, "Choose…"));
      b.choices.forEach(function (c, i) { sel.appendChild(el("option", { value: String(i) }, c)); });
      r.appendChild(sel);
      var mk = el("span", { class: "mark", "aria-live": "polite" });
      r.appendChild(mk);
      rows.push({ r: r, sel: sel, mk: mk, a: it.a });
      w.appendChild(r);
    });
    var fb = el("div", { class: "feedback", role: "status" });
    var btn = el("button", { class: "btn small", type: "button", style: "margin-top:12px" }, "Check matches");
    btn.addEventListener("click", function () {
      var ok = 0;
      rows.forEach(function (x) {
        x.r.classList.remove("ok", "no");
        if (x.sel.value === "") { x.mk.textContent = ""; return; }
        var good = +x.sel.value === x.a;
        if (good) ok++;
        x.r.classList.add(good ? "ok" : "no");
        x.mk.innerHTML = good ? '<span style="color:var(--ok)">&#10003;</span>' : '<span style="color:var(--bad)">&#10007;</span>';
      });
      var all = ok === rows.length;
      fb.className = "feedback show " + (all ? "good" : "bad");
      fb.innerHTML = all ? "<strong>All matched correctly.</strong> " + (b.success || "") : ok + " of " + rows.length + " correct. Adjust the red items and check again.";
    });
    w.appendChild(btn);
    w.appendChild(fb);
    return w;
  }

  function checklistBlock(b) {
    var w = el("div", { class: "block activity" });
    w.appendChild(actHead("Interactive checklist", b.title, b.instructions));
    var vals = {};
    var out = el("div", { class: "feedback", role: "status" });
    function update() {
      var n = Object.keys(vals).length;
      if (n < b.items.length) { out.className = "feedback show neutral"; out.innerHTML = "Answered " + n + " of " + b.items.length + "."; return; }
      var fixes = b.items.filter(function (_, i) { return vals[i] === "fix"; });
      if (!fixes.length) { out.className = "feedback show good"; out.innerHTML = b.okMsg; }
      else {
        out.className = "feedback show bad";
        out.innerHTML = b.fixMsg + "<ul>" + fixes.map(function (f) { return "<li><strong>" + f.title + ":</strong> " + f.fix + "</li>"; }).join("") + "</ul>";
      }
    }
    b.items.forEach(function (it, i) {
      var r = el("div", { class: "check-row", style: it.color ? "border-left-color:" + it.color : "" });
      r.appendChild(el("div", null, '<div class="cr-title"' + (it.color ? ' style="color:' + it.color + '"' : "") + ">" + it.title + '</div><div class="cr-q">' + it.q + "</div>" + (it.values ? '<div style="font-size:.8rem;color:var(--muted)">' + it.values + "</div>" : "")));
      var yn = el("div", { class: "yn", role: "group", "aria-label": it.title });
      ["yes", "fix"].forEach(function (v) {
        var bt = el("button", { type: "button", class: v, "aria-pressed": "false" }, v === "yes" ? "Yes" : "Fix");
        bt.addEventListener("click", function () {
          vals[i] = v;
          yn.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-pressed", "false"); });
          bt.classList.add("on"); bt.setAttribute("aria-pressed", "true");
          update();
        });
        yn.appendChild(bt);
      });
      r.appendChild(yn);
      w.appendChild(r);
    });
    w.appendChild(out);
    return w;
  }

  function reflectBlock(b, m, l) {
    var key = b.id || ("m" + m + "l" + l);
    var w = el("div", { class: "block activity reflect" });
    w.appendChild(actHead("Reflect", b.title || "Personal reflection", b.prompt));
    var ta = el("textarea", { "aria-label": "Your reflection", placeholder: "Write your thoughts here. Your notes stay private in this browser." });
    ta.value = state.reflections[key] || "";
    var saved = el("div", { class: "saved", "aria-live": "polite" });
    var t;
    ta.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () { state.reflections[key] = ta.value; save(); saved.textContent = "Saved"; }, 500);
    });
    w.appendChild(ta);
    w.appendChild(saved);
    return w;
  }

  /* ---------- knowledge check ---------- */
  function questionCard(q, n, total, opts) {
    var card = el("div", { class: "quiz-q" });
    card.appendChild(el("div", { class: "qnum" }, "Question " + n + " of " + total));
    card.appendChild(el("div", { class: "qtext" }, q.q));
    var order = q.fixed ? q.options.map(function (_, i) { return i; }) : shuffle(q.options.map(function (_, i) { return i; }));
    var ch = el("div", { class: "choices", role: "radiogroup", "aria-label": "Question " + n });
    var fb = el("div", { class: "feedback", role: "status" });
    order.forEach(function (oi, k) {
      var btn = el("button", { class: "choice", type: "button", role: "radio", "aria-checked": "false" }, '<span class="key">' + LETTERS[k] + "</span><span>" + q.options[oi] + "</span>");
      btn.addEventListener("click", function () {
        if (opts.instant) {
          if (card.dataset.done) return;
          card.dataset.done = "1";
          var ok = oi === q.a;
          ch.querySelectorAll(".choice").forEach(function (x) { x.disabled = true; });
          btn.classList.add(ok ? "correct" : "incorrect");
          btn.setAttribute("aria-checked", "true");
          if (!ok) ch.children[order.indexOf(q.a)].classList.add("correct");
          fb.className = "feedback show " + (ok ? "good" : "bad");
          fb.innerHTML = "<strong>" + (ok ? "Correct. " : "Not quite. ") + "</strong>" + (q.explain || "");
          opts.onAnswer(ok);
        } else {
          ch.querySelectorAll(".choice").forEach(function (x) { x.classList.remove("selected"); x.setAttribute("aria-checked", "false"); });
          btn.classList.add("selected");
          btn.setAttribute("aria-checked", "true");
          opts.onAnswer(oi);
        }
      });
      ch.appendChild(btn);
    });
    card.appendChild(ch);
    card.appendChild(fb);
    return card;
  }

  function renderQuiz(c, m) {
    var mod = COURSE.modules[m];
    c.appendChild(el("div", { class: "crumb" }, "Module " + (m + 1) + " &middot; " + esc(mod.title)));
    c.appendChild(el("h2", null, "Knowledge Check"));
    var prev = state.quizzes["m" + m];
    c.appendChild(el("p", { class: "instructions" }, "Answer each question to check your understanding. You get instant feedback. Complete all " + mod.quiz.length + " questions to finish this module." +
      (prev && prev.done ? " <strong>Your last score: " + prev.score + "/" + prev.total + ".</strong>" : "")));

    var answered = 0, correct = 0;
    var result = el("div");
    mod.quiz.forEach(function (q, i) {
      c.appendChild(questionCard(q, i + 1, mod.quiz.length, {
        instant: true,
        onAnswer: function (ok) {
          answered++; if (ok) correct++;
          if (answered === mod.quiz.length) {
            state.quizzes["m" + m] = { done: true, score: correct, total: mod.quiz.length };
            save();
            renderChrome({ view: "quiz", m: m });
            var pct = Math.round(correct / mod.quiz.length * 100);
            result.innerHTML = "";
            var p = el("div", { class: "result-panel " + (pct >= 60 ? "pass" : "fail") },
              '<div class="big">' + correct + "/" + mod.quiz.length + "</div><div>" +
              (pct >= 60 ? "Module " + (m + 1) + " complete. Nice work!" : "Module recorded as complete, but review the lessons before the final exam.") + "</div>");
            result.appendChild(p);
            result.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }));
    });
    c.appendChild(result);

    var pager = el("div", { class: "pager" });
    pager.appendChild(el("button", { class: "btn ghost", onclick: function () { go("m=" + m + "&l=" + (mod.lessons.length - 1)); } }, "&larr; Back to lessons"));
    var r = el("div", { style: "display:flex;gap:10px;flex-wrap:wrap" });
    r.appendChild(el("button", { class: "btn ghost", onclick: function () { render(); } }, "Retake check"));
    if (m < COURSE.modules.length - 1) r.appendChild(el("button", { class: "btn", onclick: function () { go("m=" + (m + 1) + "&l=0"); } }, "Next module &rarr;"));
    else r.appendChild(el("button", { class: "btn", onclick: function () { go("exam"); } }, "Final exam &rarr;"));
    pager.appendChild(r);
    c.appendChild(pager);
  }

  /* ---------- final exam ---------- */
  function renderExam(c) {
    c.appendChild(el("div", { class: "crumb" }, esc(COURSE.audience) + " Track"));
    c.appendChild(el("h2", null, "Final Exam"));

    if (!allModulesDone()) {
      var missing = COURSE.modules.map(function (m, i) { return moduleDone(i) ? null : "<li>Module " + (i + 1) + ": " + esc(m.title) + "</li>"; }).filter(Boolean);
      c.appendChild(el("div", { class: "block callout warn" }, '<div class="ct">&#128274; Exam locked</div>Finish every lesson and knowledge check first. Still to complete:<ul>' + missing.join("") + "</ul>"));
      return;
    }

    var ex = state.exam;
    var intro = el("div");
    intro.innerHTML = '<div class="exam-intro">' +
      '<div class="stat"><b>' + EXAM_LEN + "</b>Questions</div>" +
      '<div class="stat"><b>' + PASS_PCT + "%</b>Passing score (" + Math.ceil(EXAM_LEN * PASS_PCT / 100) + "/" + EXAM_LEN + ")</div>" +
      '<div class="stat"><b>&infin;</b>Retakes allowed</div>' +
      '<div class="stat"><b>' + ex.attempts.length + "</b>Attempts so far</div></div>" +
      "<p>Questions are drawn at random from a larger bank, so each attempt is different. Answer every question, then submit. " +
      "Scores are shown after submission; correct answers are not revealed, so review the modules you missed before retaking.</p>";
    c.appendChild(intro);
    if (ex.passed) {
      var pc = el("div", { class: "block callout ok" }, '<div class="ct">Already passed</div>You passed with a best score of ' + ex.best + "%. You may retake the exam for practice; your certificate is kept. ");
      pc.appendChild(el("button", { class: "btn small", onclick: function () { go("cert"); } }, "View certificate"));
      c.appendChild(pc);
    }
    if (ex.attempts.length) {
      c.appendChild(el("p", { class: "attempts" }, "Previous attempts: " + ex.attempts.slice(-6).map(function (a) { return a.pct + "%"; }).join(" &middot; ")));
    }
    var start = el("button", { class: "btn", onclick: function () { startExam(c); } }, ex.attempts.length ? "Start a new attempt" : "Begin final exam");
    c.appendChild(start);
  }

  function startExam(c) {
    var qs = shuffle(COURSE.exam).slice(0, EXAM_LEN);
    var answers = new Array(qs.length);
    c.innerHTML = "";
    c.appendChild(el("div", { class: "crumb" }, esc(COURSE.audience) + " Track &middot; Final Exam"));
    c.appendChild(el("h2", null, "Final Exam &middot; Attempt " + (state.exam.attempts.length + 1)));
    var bar = el("div", { class: "exam-bar" });
    var cnt = el("span", { "aria-live": "polite" }, "0 of " + qs.length + " answered");
    var pb = el("div", { class: "bar" }, "<span style=\"width:0%\"></span>");
    bar.appendChild(cnt); bar.appendChild(pb);
    c.appendChild(bar);
    function upd() {
      var n = answers.filter(function (a) { return a != null; }).length;
      cnt.textContent = n + " of " + qs.length + " answered";
      pb.firstChild.style.width = (n / qs.length * 100) + "%";
      submit.disabled = n < qs.length;
    }
    qs.forEach(function (q, i) {
      c.appendChild(questionCard(q, i + 1, qs.length, { instant: false, onAnswer: function (oi) { answers[i] = oi; upd(); } }));
    });
    var submit = el("button", { class: "btn", disabled: "disabled" }, "Submit exam");
    submit.addEventListener("click", function () {
      if (answers.some(function (a) { return a == null; })) { toast("Answer every question first."); return; }
      var score = 0, missed = [];
      qs.forEach(function (q, i) { if (answers[i] === q.a) score++; else missed.push(q); });
      var pct = Math.round(score / qs.length * 100);
      var passed = pct >= PASS_PCT;
      var now = new Date().toISOString();
      state.exam.attempts.push({ pct: pct, score: score, date: now });
      if (passed) {
        if (!state.exam.passed) {
          state.exam.passed = true;
          state.exam.passedAt = now;
          state.exam.certId = "IWU-AI-" + (COURSE.id === "faculty" ? "FS" : "ST") + "-" + now.slice(0, 10).replace(/-/g, "") + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
        }
        state.exam.best = Math.max(state.exam.best || 0, pct);
      }
      save();
      showExamResult(c, score, qs.length, pct, passed, missed);
    });
    var foot = el("div", { class: "pager" });
    foot.appendChild(el("button", { class: "btn ghost", onclick: function () { if (confirm("Leave the exam? This attempt will not be recorded.")) go("exam"); } }, "Cancel attempt"));
    foot.appendChild(submit);
    c.appendChild(foot);
    window.scrollTo(0, 0);
  }

  function showExamResult(c, score, total, pct, passed, missed) {
    c.innerHTML = "";
    renderChrome({ view: "exam" });
    c.appendChild(el("div", { class: "crumb" }, esc(COURSE.audience) + " Track &middot; Final Exam"));
    c.appendChild(el("h2", null, passed ? "Congratulations &mdash; you passed!" : "Not quite yet"));
    c.appendChild(el("div", { class: "result-panel " + (passed ? "pass" : "fail") },
      '<div class="big">' + pct + "%</div><div>" + score + " of " + total + " correct &middot; " + PASS_PCT + "% required</div>"));
    if (passed) {
      c.appendChild(el("p", null, "You have completed <strong>" + esc(COURSE.title) + "</strong>. Your branded certificate of completion is ready."));
      if (!state.name) c.appendChild(el("p", null, "Enter your name for the certificate:"));
      var go1 = el("button", { class: "btn", onclick: function () { go("cert"); } }, "View my certificate");
      c.appendChild(go1);
    } else {
      c.appendChild(el("p", null, "You need " + Math.ceil(total * PASS_PCT / 100) + " correct answers to pass. Review the topics below, then try again &mdash; retakes are unlimited and each attempt draws a new set of questions."));
      var topics = {};
      missed.forEach(function (q) { topics[q.topic || "General"] = (topics[q.topic || "General"] || 0) + 1; });
      var ul = el("ul", { class: "review-list" });
      Object.keys(topics).forEach(function (t) { ul.appendChild(el("li", null, "<strong>" + esc(t) + "</strong> &mdash; " + topics[t] + " question" + (topics[t] > 1 ? "s" : "") + " missed")); });
      c.appendChild(el("h3", null, "Topics to review"));
      c.appendChild(ul);
      var row = el("div", { style: "display:flex;gap:10px;flex-wrap:wrap;margin-top:12px" });
      row.appendChild(el("button", { class: "btn", onclick: function () { startExam(c); } }, "Retake exam"));
      row.appendChild(el("button", { class: "btn ghost", onclick: function () { go(""); } }, "Review modules"));
      c.appendChild(row);
    }
    window.scrollTo(0, 0);
  }

  /* ---------- certificate ---------- */
  function renderCert(c) {
    c.appendChild(el("div", { class: "crumb" }, esc(COURSE.audience) + " Track"));
    c.appendChild(el("h2", null, "Certificate of Completion"));
    if (!state.exam.passed) {
      c.appendChild(el("div", { class: "block callout warn" }, '<div class="ct">Not yet earned</div>Pass the final exam with ' + PASS_PCT + "% or higher to receive your certificate."));
      c.appendChild(el("button", { class: "btn", onclick: function () { go("exam"); } }, "Go to final exam"));
      return;
    }
    var nf = el("div", { class: "block" });
    nf.appendChild(el("p", { style: "margin:0" }, state.name ? "Issued to <strong>" + esc(state.name) + "</strong>. Need to correct the spelling? Update it here:" : "<strong>Enter your full name</strong> to personalize your certificate:"));
    nf.appendChild(nameForm(function () { render(); }, state.name ? "Update name" : "Create certificate"));
    c.appendChild(nf);
    if (!state.name) return;

    var actions = el("div", { class: "cert-actions" });
    actions.appendChild(el("button", {
      class: "btn", onclick: function () {
        document.body.classList.add("printing-cert");
        setTimeout(function () { window.print(); }, 50);
      }
    }, "Print / Save as PDF"));
    actions.appendChild(el("button", { class: "btn secondary", onclick: function () { downloadPng(); } }, "Download image (PNG)"));
    c.appendChild(actions);

    var wrap = el("div", { class: "cert-wrap" });
    var sizer = el("div", { class: "cert-sizer" });
    var cert = el("div", { class: "certificate", id: "certificate" });
    cert.innerHTML =
      '<div class="frame-outer"></div><div class="frame-inner"></div>' +
      '<div class="corner c-tl"></div><div class="corner c-tr"></div><div class="corner c-bl"></div><div class="corner c-br"></div>' +
      '<img class="watermark" src="assets/img/iwu-seal.png" alt="">' +
      '<div class="cert-body">' +
      '<img class="wordmark" src="assets/img/iwu-wordmark.png" alt="Indiana Wesleyan University">' +
      '<div class="cert-title">Certificate of Completion</div>' +
      '<div class="cert-sub">IWU &middot; Artificial Intelligence Training</div>' +
      '<div class="presented">This certifies that</div>' +
      '<div class="recipient">' + esc(state.name) + "</div>" +
      '<div class="for">has successfully completed all modules and passed the final examination with a score of ' + state.exam.best + "% in</div>" +
      '<div class="course-name">' + esc(COURSE.certTitle) + "</div>" +
      '<div class="for" style="font-size:1.05rem;margin-top:8px">' + esc(COURSE.certLine) + "</div>" +
      '<div class="cert-foot">' +
      '<div class="sig"><div class="val">' + fmtDate(state.exam.passedAt) + '</div><div class="line">Date awarded</div></div>' +
      '<img class="seal" src="assets/img/iwu-seal.png" alt="Indiana Wesleyan University seal">' +
      '<div class="sig"><div class="val">GenAI Task Force</div><div class="line">Indiana Wesleyan University</div></div>' +
      "</div></div>" +
      '<div class="cert-id">Certificate ID ' + esc(state.exam.certId) + "</div>";
    sizer.appendChild(cert);
    wrap.appendChild(sizer);
    c.appendChild(wrap);
    fitCert();
  }
  function fitCert() {
    var cert = $("#certificate");
    if (!cert) return;
    var sizer = cert.parentNode;
    var avail = sizer.parentNode.clientWidth;
    var s = Math.min(1, avail / 1056);
    cert.style.transform = "scale(" + s + ")";
    cert.style.transformOrigin = "top left";
    sizer.style.width = (1056 * s) + "px";
    sizer.style.height = (816 * s) + "px";
    sizer.style.margin = "0 auto";
  }
  window.addEventListener("resize", fitCert);
  window.addEventListener("afterprint", function () { document.body.classList.remove("printing-cert"); });
  window.addEventListener("beforeprint", function () {
    var cert = $("#certificate");
    if (cert && document.body.classList.contains("printing-cert")) cert.style.transform = "none";
  });
  window.addEventListener("afterprint", fitCert);

  /* PNG export: redraw the certificate on a canvas (no external libraries) */
  function loadImg(src) {
    return new Promise(function (res, rej) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = rej; i.src = src; });
  }
  function downloadPng() {
    var W = 2112, H = 1632, k = 2;
    var cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    var x = cv.getContext("2d");
    Promise.all([loadImg("assets/img/iwu-seal.png"), loadImg("assets/img/iwu-wordmark.png"), document.fonts ? document.fonts.ready : Promise.resolve()]).then(function (imgs) {
      var seal = imgs[0], mark = imgs[1];
      var crimson = "#a6192e", gray = "#626466", dark = "#3b3c3e";
      x.fillStyle = "#fffdf8"; x.fillRect(0, 0, W, H);
      x.strokeStyle = crimson; x.lineWidth = 10 * k; x.strokeRect(27 * k, 27 * k, W - 54 * k, H - 54 * k);
      x.strokeStyle = "#b7b8ba"; x.lineWidth = 2 * k; x.strokeRect(43 * k, 43 * k, W - 86 * k, H - 86 * k);
      x.strokeStyle = crimson; x.lineWidth = 3 * k;
      [[52, 52, 1, 1], [1056 - 52, 52, -1, 1], [52, 816 - 52, 1, -1], [1056 - 52, 816 - 52, -1, -1]].forEach(function (p) {
        x.beginPath(); x.moveTo(p[0] * k, (p[1] + 60 * p[3]) * k); x.lineTo(p[0] * k, p[1] * k); x.lineTo((p[0] + 60 * p[2]) * k, p[1] * k); x.stroke();
      });
      x.globalAlpha = 0.06; x.drawImage(seal, W / 2 - 215 * k, H * 0.52 - 215 * k, 430 * k, 430 * k); x.globalAlpha = 1;
      var mh = 40 * k, mw = mark.width * (mh / mark.height);
      x.drawImage(mark, W / 2 - mw / 2, 76 * k, mw, mh);
      x.textAlign = "center";
      x.fillStyle = crimson; x.font = "600 " + (50 * k) + "px Oswald, Arial Narrow, sans-serif";
      spaced(x, "CERTIFICATE OF COMPLETION", W / 2, 182 * k, 6 * k, 820 * k);
      x.fillStyle = gray; x.font = (16 * k) + "px Oswald, Arial Narrow, sans-serif";
      spaced(x, "IWU · ARTIFICIAL INTELLIGENCE TRAINING", W / 2, 214 * k, 5.6 * k, 820 * k);
      x.fillStyle = dark; x.font = "italic " + (22 * k) + "px 'Cormorant Garamond', Georgia, serif";
      x.fillText("This certifies that", W / 2, 272 * k);
      x.fillStyle = "#1f2023"; x.font = "600 " + (58 * k) + "px 'Cormorant Garamond', Georgia, serif";
      x.fillText(state.name, W / 2, 342 * k, 860 * k);
      var nw = Math.max(520 * k, Math.min(860 * k, x.measureText(state.name).width + 60 * k));
      x.strokeStyle = crimson; x.lineWidth = 2 * k; x.beginPath(); x.moveTo(W / 2 - nw / 2, 360 * k); x.lineTo(W / 2 + nw / 2, 360 * k); x.stroke();
      x.fillStyle = dark; x.font = (20 * k) + "px 'Cormorant Garamond', Georgia, serif";
      x.fillText("has successfully completed all modules and passed the final examination with a score of " + state.exam.best + "% in", W / 2, 402 * k, 900 * k);
      x.fillStyle = crimson; x.font = "600 " + (26 * k) + "px Oswald, Arial Narrow, sans-serif";
      x.fillText(COURSE.certTitle.toUpperCase(), W / 2, 446 * k, 900 * k);
      x.fillStyle = dark; x.font = (17 * k) + "px 'Cormorant Garamond', Georgia, serif";
      x.fillText(COURSE.certLine, W / 2, 482 * k, 900 * k);
      x.drawImage(seal, W / 2 - 70 * k, 590 * k, 140 * k, 140 * k);
      [[W / 2 - 290 * k, fmtDate(state.exam.passedAt), "DATE AWARDED"], [W / 2 + 290 * k, "GenAI Task Force", "INDIANA WESLEYAN UNIVERSITY"]].forEach(function (s) {
        x.fillStyle = dark; x.font = "italic " + (21 * k) + "px 'Cormorant Garamond', Georgia, serif";
        x.fillText(s[1], s[0], 690 * k);
        x.strokeStyle = dark; x.lineWidth = 1.5 * k; x.beginPath(); x.moveTo(s[0] - 170 * k, 702 * k); x.lineTo(s[0] + 170 * k, 702 * k); x.stroke();
        x.font = (14 * k) + "px Oswald, Arial Narrow, sans-serif"; x.fillText(s[2], s[0], 724 * k);
      });
      x.fillStyle = "#5d5f63"; x.font = (11.5 * k) + "px 'Source Sans 3', Arial, sans-serif";
      x.fillText("Certificate ID " + state.exam.certId, W / 2, 770 * k);
      var a = document.createElement("a");
      a.download = "IWU-Artificial-Intelligence-Training-Certificate-" + state.name.replace(/[^a-z0-9]+/gi, "-") + ".png";
      a.href = cv.toDataURL("image/png");
      document.body.appendChild(a); a.click(); a.remove();
      toast("Certificate downloaded.");
    }).catch(function () { toast("Could not create the image. Use Print / Save as PDF instead."); });
  }
  function spaced(ctx, text, cx, y, sp, maxW) {
    if (maxW) {
      var natural = ctx.measureText(text).width + sp * (text.length - 1);
      if (natural > maxW) {
        var size = parseFloat(ctx.font.match(/(\d+(?:\.\d+)?)px/)[1]) * maxW / natural;
        ctx.font = ctx.font.replace(/\d+(?:\.\d+)?px/, size + "px");
        sp = sp * maxW / natural;
      }
    }
    var widths = text.split("").map(function (ch) { return ctx.measureText(ch).width; });
    var total = widths.reduce(function (a, b) { return a + b; }, 0) + sp * (text.length - 1);
    var xx = cx - total / 2;
    var align = ctx.textAlign; ctx.textAlign = "left";
    text.split("").forEach(function (ch, i) { ctx.fillText(ch, xx, y); xx += widths[i] + sp; });
    ctx.textAlign = align;
  }

  /* ---------- boot ---------- */
  document.title = COURSE.title + " | IWU – Artificial Intelligence Training";
  $("#course-title").textContent = COURSE.title;
  $("#course-eyebrow").textContent = COURSE.audience + " Training Module";
  if (COURSE.id === "student") $(".course-banner").classList.add("student");
  $("#menu-toggle").addEventListener("click", function () { $("#sidebar").classList.toggle("open"); });
  window.addEventListener("hashchange", render);
  render();
})();
