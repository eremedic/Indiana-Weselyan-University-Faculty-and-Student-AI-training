/* IWU – AI Training | Faculty & Staff course content
   Source: IWU GenAI Task Force proposal, "Generative AI in Coursework"
   (Team 06 Executive Report & Presentation, DeVoe School of Business, Sept. 2026). */
window.IWU_COURSE = {
  id: "faculty",
  audience: "Faculty & Staff",
  title: "Leading Responsible AI at IWU",
  certTitle: "Faculty & Staff Generative AI Training",
  certLine: "Five-Level Assignment Policy · Human Accountability · VBM–NIST Decision Framework",
  intro: "Generative AI is already part of our students' and colleagues' daily tools. This course equips IWU faculty and staff to set clear expectations, design learning that keeps student thinking visible, use AI responsibly in their own work, and make values-based decisions about AI tools. It is built on the Generative AI Task Force proposal and the Virtuous Business Model (VBM).",
  modules: [
    /* ======================= MODULE 1 ======================= */
    {
      title: "Generative AI Foundations",
      summary: "What GenAI is, why IWU neither bans nor allows it without limits, and its benefits and risks.",
      minutes: 20,
      objectives: [
        "Define AI, generative AI and large language models (LLMs)",
        "Explain why IWU's policy focuses on <em>functions</em> rather than brand names",
        "Describe the educational benefits and the seven primary risks of GenAI",
        "Explain why GenAI can never be treated as an author"
      ],
      lessons: [
        {
          title: "What is generative AI?",
          blocks: [
            { type: "html", html: "<p>Artificial intelligence (AI) is an overarching term for computational systems that carry out functions associated with human cognition. <strong>Generative AI (GenAI)</strong> is a specific type of AI that <strong>produces new text, images, audio, code or other content by analyzing patterns in data</strong>. <strong>Large language models (LLMs)</strong> are a subset of GenAI that generate <em>probable sequences of words</em> in response to a prompt, usually through a chat window or an app interface.</p><p>That last phrase matters: an LLM predicts what text is likely to come next. It does not <em>understand</em> in the way a scholar does, which is why it can produce confident, fluent and completely wrong answers.</p>" },
            { type: "flip", title: "Key terms", cards: [
              { front: "Artificial Intelligence", back: "An umbrella term for computer systems that perform functions associated with human cognition—recognizing, predicting, classifying, recommending." },
              { front: "Generative AI", back: "AI that <strong>creates new content</strong> (text, images, audio, code) by analyzing patterns in data." },
              { front: "Large Language Model", back: "A GenAI system that generates <strong>probable word sequences</strong> in response to a prompt. Fluent ≠ accurate." },
              { front: "Hallucination", back: "A false statement or invented source that the model presents as fact—e.g., a citation to an article that does not exist." },
              { front: "Prompt", back: "The instructions or question a user gives an AI system. Better prompts help, but never remove the need to verify." },
              { front: "Approved / closed system", back: "A university-reviewed tool that may receive protected data. Public tools may not." }
            ] },
            { type: "callout", tone: "info", title: "Functions, not brand names", html: "The GenAI market changes rapidly. The same capability shows up inside search engines, chatbots, word processors and discipline-specific platforms. IWU's policy therefore addresses <strong>what a tool does</strong>—does it generate ideas, analysis or content, or replace reasoning?—rather than naming products. Spelling and grammar functions that do not generate content may be treated differently." }
          ]
        },
        {
          title: "Why neither a ban nor a free-for-all",
          blocks: [
            { type: "html", html: "<p>After reviewing the research and the practice of peer institutions, the Task Force concluded that IWU should <strong>neither adopt a blanket ban nor allow unrestricted use</strong>.</p>" },
            { type: "compare", title: "Two approaches that fail", bad: { title: "Blanket ban", html: "<ul><li>Difficult to enforce as AI is embedded in ordinary software</li><li>AI detectors are not reliable enough to prove misconduct</li><li>Leaves students unprepared for AI-rich workplaces</li></ul>" }, good: { title: "Unrestricted use", html: "<ul><li>Can weaken the reasoning and research practices coursework is meant to build</li><li>Students delegate thinking and produce unreflective work</li><li>Obscures who actually authored the work</li></ul>" } },
            { type: "callout", title: "The IWU answer", html: "A <strong>five-level, assignment-specific use-and-disclosure policy</strong> directed by faculty, with source verification that preserves the learner's reasoning and accountability—supported by a university review process (the VBM–NIST framework) for AI tools and uses." },
            { type: "html", html: "<p>Research consistently shows that GenAI's educational effect depends less on <em>whether</em> it is present and more on <strong>how</strong> people interact with it, <strong>what part</strong> of the intellectual work remains theirs, and <strong>how the assessment is designed</strong>. Students recognize both the benefits and the risks, but most are unclear about the exact boundaries for use and disclosure. Clear, assignment-level expectations solve that problem.</p>" },
            { type: "html", html: "<h4>How peer universities are responding</h4>" },
            { type: "table", head: ["Approach", "Examples", "What it looks like"], rows: [
              ["Secure institution-provided tools", "Arizona State; Michigan", "University-managed GenAI tools"],
              ["AI literacy across the curriculum", "Ohio State; Miami; Florida", "AI literacy built into general education and programs"],
              ["Tiered syllabus policies", "Duke; Harvard", "Faculty communicate whether AI is allowed or limited to specific activities"],
              ["Responsible AI governance", "Baylor", "Research on bias, transparency and governance"]
            ], note: "IWU combines these approaches and grounds them in the Virtuous Business Model and its Christian commitment to human dignity and flourishing." }
          ]
        },
        {
          title: "Benefits and risks",
          blocks: [
            { type: "cards", title: "Potential support for learning", items: [
              { title: "Tutoring", text: "On-demand concept explanations and worked examples." },
              { title: "Early feedback", text: "Feedback on drafts before final submission." },
              { title: "Brainstorming", text: "Generating options to react to—after initial thinking." },
              { title: "Access", text: "Translation, accessibility supports and personalized practice." }
            ] },
            { type: "html", html: "<p>These benefits are <strong>not automatic</strong>. Useful AI feedback depends on the learner's goals and their ability to evaluate what they receive. AI should never be assumed to replace teaching.</p>" },
            { type: "table", title: "Seven primary concerns and IWU's response", head: ["Concern", "Evidence or consequence", "IWU policy response"], rows: [
              ["Accuracy", "False claims and fabricated citations", "Audit and verify citations and claims"],
              ["Authorship", "Obscures who did the intellectual work", "Define disclosure and acceptable levels of help"],
              ["Critical thinking", "Students may delegate reasoning", "Use AI after initial thinking; keep no-AI tasks where mastery requires it"],
              ["Detection errors", "AI detectors produce unreliable results", "A detector score is never the sole proof; due process applies"],
              ["Security", "Prompts can expose personal or proprietary data", "Closed, IWU-approved tools for protected data"],
              ["Bias", "Pattern-matching can reproduce bias", "Teach bias evaluation; compare perspectives; human review"],
              ["Access", "Cost and skill barriers", "Provide comparable access and training"]
            ] },
            { type: "match", title: "Match the concern to the response", instructions: "Choose the IWU policy response that addresses each concern.", choices: ["Verify citations and claims", "Closed, approved systems", "Detector score is never sole proof", "Provide comparable access and training", "Human review and bias evaluation"], items: [
              { t: "An AI tool invents a journal article to support a claim.", a: 0 },
              { t: "A staff member wants to paste a student's disability accommodation file into a chatbot.", a: 1 },
              { t: "An AI detector flags a paper as \"87% AI-written.\"", a: 2 },
              { t: "An assignment requires a paid AI tool some students cannot afford.", a: 3 },
              { t: "AI-generated case studies portray one culture through stereotypes.", a: 4 }
            ], success: "Each concern has a specific, practical control in the IWU framework." }
          ]
        },
        {
          title: "AI is never an author",
          blocks: [
            { type: "quote", html: "“GenAI is not, and shall not at any time be, treated as an author or accountable scholar.”" },
            { type: "html", html: "<p>GenAI cannot accept responsibility for research or evidence, resolve an ethical conflict, or protect stakeholders. <strong>Students, employees and faculty are responsible for the decisions they make and the work they submit—regardless of whether they used AI.</strong> This matters because the purpose of an academic community is to develop independent judgment and to defend original scholarship.</p>" },
            { type: "callout", tone: "ok", title: "100% responsibility", html: "The student is 100% responsible for submitted work. Faculty are 100% accountable for the quality, accuracy, accessibility, cultural appropriateness and alignment of everything presented to students—whether or not AI contributed." },
            { type: "scenario", title: "Crediting AI", prompt: "A colleague drafting a journal article asks whether they should list the AI tool they used as a co-author, \"to be transparent.\" What is the best guidance?", options: [
              { t: "Yes—listing it as co-author is the most transparent option.", ok: false, fb: "AI cannot accept scholarly accountability, so it can never be an author. Transparency is achieved through disclosure, not authorship." },
              { t: "No—never credit AI as an author; disclose its use as the journal, publisher or funder requires, and verify all content and citations.", ok: true, fb: "Exactly. Disclose according to the applicable rules, verify everything, and retain full responsibility for originality and integrity." },
              { t: "No—and there is no need to mention the AI use at all.", ok: false, fb: "Substantive AI contributions should be disclosed as required by the journal, publisher, funder or research protocol." }
            ] },
            { type: "reflect", prompt: "Where in your own teaching or work do you already see colleagues or students using GenAI? What is one boundary you think is unclear today?" }
          ]
        }
      ],
      quiz: [
        { q: "Which statement best defines generative AI?", options: ["AI that produces new text, images, audio, code or other content by analyzing data patterns", "Any software that automates a routine task", "A search engine that retrieves verified sources", "A database of peer-reviewed research"], a: 0, explain: "GenAI creates new content from patterns in data." },
        { q: "Why does IWU's policy focus on functions rather than product names?", options: ["The same capability appears in many changing tools, so rules tied to brands quickly become outdated", "Brand names are trademarked and cannot be listed", "Only one product is approved at IWU", "Functions are easier for detectors to identify"], a: 0, explain: "The market changes rapidly; policy should address what a tool does." },
        { q: "What did the Task Force conclude about a blanket ban on GenAI?", options: ["It is difficult to enforce and detectors are not reliable enough to support it", "It is the safest option for all courses", "It should apply only to online courses", "It is required by accrediting bodies"], a: 0, explain: "A ban is hard to enforce, and detectors are unreliable." },
        { q: "Why can GenAI never be listed as an author?", options: ["It cannot accept responsibility or scholarly accountability", "Its text is always too short", "Publishers charge extra for AI authors", "It writes only in English"], a: 0, explain: "Authorship requires accountability that AI cannot hold." },
        { q: "Which is IWU's response to the 'Security' concern?", options: ["Use closed, IWU-approved tools for protected, personal or proprietary data", "Ask students to delete their chat history", "Use only free AI tools", "Rely on the vendor's privacy statement"], a: 0, explain: "Protected data may only go into approved, closed systems." }
      ]
    },

    /* ======================= MODULE 2 ======================= */
    {
      title: "The Five Assignment Use Levels",
      summary: "Setting the AI 'dial' for each assessed activity, the Level 2 default, and communicating expectations.",
      minutes: 25,
      objectives: [
        "Describe each of the five GenAI use levels and its disclosure requirement",
        "Apply the Level 2 default when no level is named",
        "Choose an appropriate level based on an assignment's learning outcomes",
        "Write clear assignment-level AI statements for students"
      ],
      lessons: [
        {
          title: "Setting the dial",
          blocks: [
            { type: "html", html: "<p>Every assessed course activity is assigned to one of <strong>five GenAI use levels</strong>. Faculty set the level for <strong>each assignment</strong>, not once for an entire course—so a course might have a Level 1 in-class exam, a Level 3 research proposal and a Level 5 AI-critique project. The level establishes what students may use GenAI for, what they must disclose, and what evidence of their process may be required.</p>" },
            { type: "table", head: ["Level", "Permitted student use", "Disclosure"], rows: [
              ['<span class="level-chip lv1">1</span> Independent work', "No GenAI. Basic non-AI tools (e.g., calculators) and approved accommodations only.", "Faculty explain why independent performance is necessary and list allowed tools."],
              ['<span class="level-chip lv2">2</span> Everyday assistance', "Spelling, grammar, punctuation, minor corrections. AI may <em>not</em> generate ideas, analysis, arguments or answers, or substantially rewrite text.", "No disclosure required. Faculty name any prohibited tools or functions."],
              ['<span class="level-chip lv3">3</span> Learning support', "Brainstorming, preliminary outlines, concept explanations, study support, feedback on early drafts. No AI-generated text, citations or code in the final submission.", "Full disclosure on the cover page of tools used and how they helped."],
              ['<span class="level-chip lv4">4</span> AI-assisted work', "AI-generated material may appear if it supports learning outcomes. Student verifies, identifies, substantially revises, cites sources independently.", "Level 3 disclosure plus any additional instructor requirements."],
              ['<span class="level-chip lv5">5</span> AI-integrated learning', "AI use is required. Students compare outputs, try prompts, critique and improve AI answers. Evaluation of AI is the product.", "Faculty state outcomes, purpose and required documentation. Human review of grading is mandatory."]
            ] },
            { type: "callout", title: "The default is Level 2", html: "When an assignment names no level, <strong>Level 2 — Everyday Assistance</strong> applies. Minor editing help is fine; AI-generated ideas, analysis, arguments or answers are not." }
          ]
        },
        {
          title: "Choosing the right level",
          blocks: [
            { type: "html", html: "<p>Choose a level by starting from the <strong>learning outcome</strong>. Ask: <em>What must the student be able to do independently to demonstrate mastery? Where could AI support learning without replacing it? Is evaluating AI itself part of what they should learn?</em></p>" },
            { type: "steps", items: [
              { title: "Name the outcome", html: "What knowledge or skill does this activity assess?" },
              { title: "Locate the thinking", html: "Which part of the task is the reasoning you need to see—the thesis, the analysis, the calculation, the reflection?" },
              { title: "Protect that part", html: "Choose the highest level that still keeps that reasoning in the student's hands." },
              { title: "Decide on evidence", html: "What disclosure or process evidence (outline, drafts, verification log) will you require?" },
              { title: "Communicate it", html: "State the level, the reason, and the evidence in the assignment instructions—with an example." }
            ] },
            { type: "classify", title: "Which level fits?", instructions: "For each assignment description, choose the level that best matches the faculty member's intent.", options: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"], items: [
              { t: "A proctored accounting exam testing whether students can compute depreciation without assistance.", a: 0, why: "Independent performance is essential; only a calculator is permitted. Level 1." },
              { t: "A reflective journal where students may use grammar checking but all ideas must be their own. No level stated in the syllabus.", a: 1, why: "Minor editing only, no disclosure. This is also the default when no level is named. Level 2." },
              { t: "Students may use AI to brainstorm topics and get feedback on a first draft, but no AI text may appear in the final paper.", a: 2, why: "Brainstorming and early feedback, nothing AI-generated in the final work, full disclosure. Level 3." },
              { t: "A marketing plan where AI-drafted sections may be included if students verify, substantially revise and disclose them.", a: 3, why: "AI material can appear in the submission with verification, revision and disclosure. Level 4." },
              { t: "Students must prompt two AI tools on an ethics case, compare the outputs and critique their reasoning against course readings.", a: 4, why: "AI use is required and evaluating the output is the product. Level 5." }
            ] }
          ]
        },
        {
          title: "Communicating the level",
          blocks: [
            { type: "html", html: "<p>Students report that the biggest problem is not knowing the boundaries. Many IWU learners are national and global students whose assumptions about authorship, collaboration and technology may differ by culture. <strong>Explain the rules with examples, in accessible language and formats</strong>, and do not assume a norm is understood by every learner.</p>" },
            { type: "example", title: "Level 3 assignment statement", html: "<p><strong>AI Use Level 3 — Learning Support.</strong> For this literature review you may use GenAI to brainstorm search terms, ask for explanations of unfamiliar concepts, and get feedback on your outline. <strong>No AI-generated sentences, citations or summaries may appear in your final paper.</strong> Every source must be one you located and read yourself.</p><p><strong>Disclosure:</strong> On your cover page, list each tool you used and describe how it helped (e.g., \"Used an AI chatbot to suggest keywords; three of five were useful\").</p><p><strong>Why:</strong> This assignment assesses your ability to locate, evaluate and synthesize scholarly sources.</p>" },
            { type: "example", title: "Level 1 assignment statement", html: "<p><strong>AI Use Level 1 — Independent Work.</strong> Complete this case analysis without any GenAI tools, including AI features built into writing software. You may use a basic calculator and any approved accommodations.</p><p><strong>Why:</strong> This analysis is practice for the licensure exam, where you must reason through the case on your own.</p>" },
            { type: "spot", title: "Improve this syllabus statement", instructions: "This draft AI statement has several weaknesses. Select every phrase that could confuse students or conflict with IWU's policy, then check your answers.", label: "Draft syllabus statement", segments: [
              { t: "AI use is not allowed in this course unless I say so." , issue: "Levels are set per assignment, not once for the whole course, and when no level is named the default is Level 2, not \"no AI.\"" },
              { t: "For the final project you may use AI." , issue: "Too vague: it does not name a level, what uses are allowed, or what must be disclosed." },
              { t: "Please cite your sources in APA style." },
              { t: "I will run all papers through an AI detector and any paper scoring over 50% will receive a zero.", issue: "A detection score may never be the sole evidence of misconduct, and grading decisions must be made by humans after reviewing all evidence." },
              { t: "Office hours are Tuesdays 2–4 p.m." }
            ], takeaway: "A strong statement names the level per assignment, explains why, lists allowed tools, states disclosure requirements, and follows fair integrity procedures." },
            { type: "reflect", prompt: "Pick one assignment you teach or support. Which level would you assign it, and what one-sentence reason would you give students?" }
          ]
        }
      ],
      quiz: [
        { q: "An assignment's instructions say nothing about AI. Which level applies?", options: ["Level 2 — Everyday Assistance", "Level 1 — Independent Work", "Level 3 — Learning Support", "Whatever the student believes is reasonable"], a: 0, explain: "Level 2 is the default when no level is named." },
        { q: "At what scope do faculty set GenAI use levels?", options: ["For each assessed activity", "Once for the whole course", "Once per academic program", "Once per semester by the registrar"], a: 0, explain: "Levels are assignment-specific." },
        { q: "At Level 3, which is permitted?", options: ["Using AI for brainstorming and early-draft feedback, with no AI-generated material in the final submission", "Including AI-generated paragraphs if cited", "No AI use at all", "Letting AI write the conclusion"], a: 0, explain: "Level 3 is learning support; AI output may not appear in the final work." },
        { q: "What must faculty provide for a Level 5 assignment?", options: ["The learning outcomes, the purpose of AI use and required documentation, with human review of grading", "A list of banned AI tools only", "An AI detector report for each submission", "Nothing—students decide how to use AI"], a: 0, explain: "Level 5 requires faculty to state outcomes, purpose and documentation; human review is mandatory." },
        { q: "Which is the best first step when choosing a level for an assignment?", options: ["Identify the learning outcome and the reasoning you need to see", "Pick the level most colleagues use", "Choose Level 1 to be safe", "Ask an AI tool which level to use"], a: 0, explain: "Start from the learning outcome and protect the thinking it requires." }
      ]
    },

    /* ======================= MODULE 3 ======================= */
    {
      title: "Non-Negotiables & Your Own AI Use",
      summary: "Requirements at every level, plus responsible AI in course design, feedback, integrity decisions, scholarship and staff work.",
      minutes: 25,
      objectives: [
        "Apply the four requirements that hold at every level: Verify, Protect, Show the Work, Keep Human Decisions",
        "Use GenAI appropriately for course design, feedback and scholarship",
        "Explain why a detector score can never be the sole evidence of misconduct",
        "Model transparency by disclosing substantive AI contributions"
      ],
      lessons: [
        {
          title: "Requirements at every level",
          blocks: [
            { type: "cards", items: [
              { title: "Verify", text: "Check sources, citations, calculations and factual claims. The submitter remains responsible." },
              { title: "Protect", text: "Confidential, personally identifiable, protected educational, research-participant or proprietary data goes only into approved systems." },
              { title: "Show the work", text: "No fabricated evidence, no impersonation, no using AI to replace the reasoning the assignment tests." },
              { title: "Keep human decisions", text: "Grades, academic standing and misconduct findings are made by people. A detector score alone never establishes a violation." }
            ] },
            { type: "callout", tone: "warn", title: "Equitable alternatives", html: "When a specific GenAI tool is <em>required</em> for an assignment, the course must provide an <strong>equitable alternative</strong> so students are not disadvantaged by cost, location, language or technical limitations." },
            { type: "html", html: "<p>These requirements apply <strong>equally to students, faculty and the institution's administration</strong>. IWU should model the same transparency, privacy protection, verification and human accountability that it expects from students.</p>" }
          ]
        },
        {
          title: "Course design, feedback & grading",
          blocks: [
            { type: "table", head: ["Faculty task", "AI may assist with", "Faculty must retain"], rows: [
              ["Course design", "Drafts of outlines, lesson plans, cases, examples, discussion questions, practice materials, rubrics", "Personal review for accuracy, bias, copyright, accessibility, cultural and theological appropriateness, and accreditation alignment"],
              ["Feedback", "Organizing preliminary feedback, spotting recurring patterns, comparing work against an established rubric", "Personal review of the student's work, fair feedback, and <strong>all grading decisions</strong>"],
              ["Scholarship", "Brainstorming, outlining, language refinement, preliminary analysis, administrative drafting—when permitted", "Originality, source verification, research privacy and required disclosure"]
            ] },
            { type: "callout", tone: "warn", title: "Never into an unapproved tool", html: "No personally identifiable information, grades or unpublished student work may be entered into an unapproved GenAI tool." },
            { type: "compare", title: "Using AI to help with feedback", bad: { title: "Inappropriate", html: "<p>Uploading 40 student essays with names to a public chatbot and pasting its scores directly into the gradebook.</p><p>Problems: student data exposed to an unapproved tool; AI assigned grades; no personal review.</p>" }, good: { title: "Appropriate", html: "<p>Using an IWU-approved tool to draft rubric-aligned comment stems, then reading each paper yourself, personalizing feedback and deciding every grade.</p><p>Human judgment, privacy and fairness are preserved.</p>" } },
            { type: "scenario", title: "Building a case study", prompt: "You use an approved AI tool to draft a business ethics case study set in a Kenyan agricultural cooperative. It reads well. What should you do before sharing it with students?", options: [
              { t: "Post it—the AI tool is approved, so the content is approved.", ok: false, fb: "Approval of a tool is not approval of its output. You are 100% accountable for what you present." },
              { t: "Review it personally for factual accuracy, bias and stereotypes, cultural and theological appropriateness, accessibility and alignment with outcomes—then disclose substantive AI help.", ok: true, fb: "Right. Every AI-assisted course material requires personal review, and substantive AI contributions should be disclosed." },
              { t: "Ask the AI tool to double-check itself for bias and then post it.", ok: false, fb: "AI self-review cannot replace your professional review; the model may repeat the same bias." }
            ] }
          ]
        },
        {
          title: "Academic integrity decisions",
          blocks: [
            { type: "html", html: "<p>Research testing AI-text detectors (Weber-Wulff et al., 2023) found they are <strong>not sufficiently reliable for high-stakes decisions</strong>. They produce false positives and false negatives, and can be affected by writing style and language background—raising particular fairness concerns for multilingual learners.</p>" },
            { type: "callout", title: "The rule", html: "An AI-detection score <strong>may prompt a conversation or further review</strong>, but it must <strong>never serve as the sole evidence</strong> of misconduct. Consider all relevant evidence under established academic-integrity procedures before a final determination." },
            { type: "steps", title: "A fair process when you suspect unauthorized AI use", items: [
              { title: "Re-read the assignment level", html: "Was the level stated clearly? If no level was named, Level 2 applied." },
              { title: "Gather evidence", html: "Look at process evidence: drafts, outlines, disclosures, version history, fabricated or unverifiable citations." },
              { title: "Talk with the student", html: "Invite them to explain their process, sources and key decisions—an informal oral defense." },
              { title: "Follow IWU procedures", html: "Apply the established academic-integrity process; the decision is yours, not the tool's." },
              { title: "Improve the design", html: "Consider process portfolios or source audits for next time." }
            ] },
            { type: "scenario", title: "The 92% score", prompt: "A detector reports that a student's Level 2 reflection paper is \"92% likely AI-generated.\" The student is a multilingual learner whose writing has improved noticeably. What is the most appropriate next step?", options: [
              { t: "Assign a zero and file a misconduct report citing the score.", ok: false, fb: "A detector score cannot be the sole evidence of a violation, and detectors can be less reliable for multilingual writers." },
              { t: "Meet with the student, ask them to walk through their ideas and drafts, review other evidence, and follow IWU's integrity procedures.", ok: true, fb: "Yes. The score may prompt a conversation; human judgment based on all evidence decides." },
              { t: "Ignore it—detectors are never useful.", ok: false, fb: "A score can reasonably prompt further review; it simply cannot be the sole basis for a finding." }
            ] }
          ]
        },
        {
          title: "Scholarship, staff work & transparency",
          blocks: [
            { type: "html", html: "<p><strong>Scholarship.</strong> Faculty may use GenAI for brainstorming, outlining, language refinement, preliminary analysis or administrative drafting <em>when permitted</em> by the applicable journal, publisher, funder, professional body or research protocol. Faculty must verify content and citations, safeguard proprietary and human-subject data, and retain responsibility for originality. AI is never credited as an author.</p><p><strong>Staff and administrative work.</strong> GenAI can help with routine tasks and communications—drafting announcements, summarizing public documents, organizing schedules. The same rules apply: verify accuracy, protect student and institutional data, use approved systems for anything sensitive, and keep decisions that affect people's rights or opportunities in human hands.</p>" },
            { type: "classify", title: "Appropriate for a public AI tool?", instructions: "Decide whether each item may be entered into a public, unapproved AI tool.", options: ["OK for public tool", "Approved system only / do not enter"], items: [
              { t: "A published course catalog description you want summarized for a flyer.", a: 0, why: "Public information carries no privacy risk—though you still verify the output." },
              { t: "A spreadsheet of student names, IDs and midterm grades.", a: 1, why: "Protected educational records (FERPA) and PII—never in an unapproved tool." },
              { t: "Interview transcripts from your IRB-approved research study.", a: 1, why: "Research participant data must stay in approved systems consistent with your protocol." },
              { t: "A generic request: \"Suggest five discussion questions about servant leadership.\"", a: 0, why: "No protected data—fine, with your review of the output." },
              { t: "An unpublished grant proposal draft containing proprietary partner data.", a: 1, why: "Proprietary and unpublished work belongs only in approved systems." }
            ] },
            { type: "callout", tone: "ok", title: "Reciprocal transparency", html: "Routine spelling, grammar or accessibility functions don't need disclosure. But <strong>substantive AI contributions to instructional content and individualized feedback should be disclosed</strong> to students. When faculty model disclosure, students learn how professionals document and stay accountable for AI-assisted work." },
            { type: "example", title: "A faculty disclosure note", html: "<p><em>\"The practice problems in this module were drafted with the help of an IWU-approved AI tool and then reviewed, corrected and adapted by me. Feedback comments on your draft were written by me; I used AI only to organize common rubric themes across the class.\"</em></p>" }
          ]
        }
      ],
      quiz: [
        { q: "Which of these may faculty delegate to GenAI?", options: ["Drafting rubric-aligned comment stems that the instructor then personalizes", "Assigning final grades", "Determining academic standing", "Making a misconduct finding"], a: 0, explain: "AI may assist with preliminary feedback; grading and standing decisions are human." },
        { q: "What is the proper role of an AI-detection score?", options: ["It may prompt a conversation or further review, but is never the sole evidence of misconduct", "It is sufficient evidence if above 80%", "It should be shared with the class", "It replaces the integrity process"], a: 0, explain: "Detectors are unreliable for high-stakes decisions." },
        { q: "When a GenAI tool is required for an assignment, the course must:", options: ["Provide an equitable alternative for students limited by cost, location, language or technology", "Require every student to purchase it", "Give extra credit to students who already own it", "Waive the assignment"], a: 0, explain: "Equitable alternatives prevent disadvantage." },
        { q: "Which data may go into a public, unapproved AI tool?", options: ["A published, public course description", "Student names and grades", "IRB research transcripts", "Unpublished student papers"], a: 0, explain: "Only non-sensitive, public information." },
        { q: "Faculty should disclose AI use to students when:", options: ["AI made substantive contributions to instructional content or individualized feedback", "They use spell-check", "They use a calculator", "Never—faculty are exempt"], a: 0, explain: "Faculty model the transparency expected of students." }
      ]
    },

    /* ======================= MODULE 4 ======================= */
    {
      title: "Designing Assessments That Show Thinking",
      summary: "Six coursework strategies, rubric design, and inclusive practice for global learners.",
      minutes: 20,
      objectives: [
        "Apply six coursework strategies that make student reasoning visible",
        "Match each strategy with the evidence it produces",
        "Revise rubrics to reward reasoning, verification and transparent revision",
        "Account for cultural and access differences among IWU's national and global learners"
      ],
      lessons: [
        {
          title: "Six coursework strategies",
          blocks: [
            { type: "html", html: "<p>The goal is to make GenAI a tool for evaluation and practice—<strong>not a substitute for learning</strong>. These strategies promote higher-order and critical thinking, and they make authorship visible, which reduces reliance on unreliable detection.</p>" },
            { type: "flip", title: "Strategy cards", cards: [
              { front: "Source audit", back: "Students verify every AI-suggested citation and claim. <strong>Evidence:</strong> an annotated verification log listing claims, validity and explanation of errors." },
              { front: "Human–AI comparison", back: "Students write their own response first, then generate an AI response and compare. <strong>Evidence:</strong> critique of reasoning, evidence, assumptions and omissions." },
              { front: "Process portfolio", back: "Students submit the full trail—outline, drafts, AI disclosures, revisions. <strong>Evidence:</strong> visible development of authorship." },
              { front: "Oral defense", back: "Students explain claims, methods, sources and decisions after submitting. <strong>Evidence:</strong> demonstrated comprehension and authorship." },
              { front: "AI as a tutor", back: "Guided practice, scenarios and feedback with an approved system. <strong>Evidence:</strong> reflection on the trade-offs and discernment of the advice." },
              { front: "Bias & culture audit", back: "Students prompt for multiple stakeholder perspectives and compare with peer-reviewed research. <strong>Evidence:</strong> identified biases in outputs and research." }
            ] },
            { type: "match", title: "Strategy → evidence", instructions: "Match each strategy to the evidence it produces.", choices: ["Annotated verification log", "Critique comparing reasoning and omissions", "Outline, drafts, disclosures and revisions", "Live explanation of methods and decisions", "Identified bias across perspectives"], items: [
              { t: "Source audit", a: 0 },
              { t: "Human–AI comparison", a: 1 },
              { t: "Research process portfolio", a: 2 },
              { t: "Oral defense", a: 3 },
              { t: "Bias and culture audit", a: 4 }
            ], success: "Choose strategies that fit your outcomes and the assignment's level." }
          ]
        },
        {
          title: "Redesigning an assignment",
          blocks: [
            { type: "example", title: "Before and after", html: "<p><strong>Before:</strong> \"Write a 5-page paper on the causes of the 2008 financial crisis.\" <em>(No level named → Level 2 default. Easily outsourced; authorship invisible.)</em></p><p><strong>After (Level 3 + portfolio + mini-defense):</strong></p><ol><li>Draft a one-paragraph thesis <strong>without AI</strong> in class.</li><li>You may use AI to brainstorm factors you missed and to explain unfamiliar terms (disclose on the cover page).</li><li>Submit your outline, one annotated draft and a verification log for every source.</li><li>Final paper in your own words—no AI-generated text or citations.</li><li>A 5-minute conversation explaining your two strongest pieces of evidence.</li></ol>" },
            { type: "html", html: "<h4>Rubric design</h4><p>Rubrics should <strong>reward reasoning, verification and transparent revision</strong>—not just polished prose, which AI can produce cheaply. Consider criteria such as:</p><ul><li>Quality of the student's own argument and judgment</li><li>Accuracy and verification of sources and claims</li><li>Evidence of revision and response to feedback</li><li>Honest, complete disclosure appropriate to the level</li><li>For Level 5: depth of critique of AI output</li></ul>" },
            { type: "scenario", title: "Choosing a strategy", prompt: "In a Level 4 marketing course, you worry students will accept AI-generated market statistics without checking them. Which strategy most directly addresses that risk?", options: [
              { t: "Source audit with an annotated verification log", ok: true, fb: "Exactly—students must check every AI-suggested figure and record corrections." },
              { t: "Drop the assignment", ok: false, fb: "Removing the assignment loses the learning. Design for verification instead." },
              { t: "Run submissions through a detector", ok: false, fb: "At Level 4 AI material is allowed; the risk is accuracy, which a detector doesn't measure." }
            ] }
          ]
        },
        {
          title: "Serving global and diverse learners",
          blocks: [
            { type: "html", html: "<p>IWU National and Global serves students whose assumptions about <strong>authorship, collaboration, authority, privacy and acceptable technology use</strong> can differ by region and culture. Legal requirements also differ by jurisdiction. The university should not assume a single classroom norm is understood by every learner.</p>" },
            { type: "cards", items: [
              { title: "Explain with examples", text: "Show what is and isn't allowed at each level with concrete samples." },
              { title: "Accessible formats", text: "Provide guidance in appropriate languages and accessible formats." },
              { title: "Equitable access", text: "Offer comparable access to required tools—and alternatives." },
              { title: "Consistent standard", text: "Hold one standard of honesty, human accountability and dignity for all." }
            ] },
            { type: "callout", tone: "info", title: "Consistency across programs", html: "Students need consistent expectations across courses. Program-wide adoption of the five levels means a student moving from one class to another understands what \"Level 3\" means everywhere." },
            { type: "reflect", prompt: "Choose one of the six strategies. How could you add it to an existing assignment this term, and what would you change in the rubric?" }
          ]
        }
      ],
      quiz: [
        { q: "What evidence does a source audit produce?", options: ["An annotated verification log of claims, validity and errors", "A detector report", "A list of AI tools used only", "A peer review score"], a: 0, explain: "The audit documents verification of each claim and citation." },
        { q: "In a human–AI comparison, what does the student do first?", options: ["Create their own response independently", "Generate the AI response", "Ask the instructor for the answer", "Run a detector"], a: 0, explain: "Initial human thinking comes before AI." },
        { q: "Rubrics in an AI-rich environment should reward:", options: ["Reasoning, verification and transparent revision", "Word count", "Polished prose alone", "Use of the newest AI tool"], a: 0, explain: "Reward the thinking AI cannot supply." },
        { q: "Why should disclosure rules be explained with examples?", options: ["Learners' cultural assumptions about authorship and collaboration differ", "Examples are required by NIST", "It shortens the syllabus", "Students prefer longer instructions"], a: 0, explain: "IWU serves global learners with differing norms." },
        { q: "Which strategy best establishes authorship after submission?", options: ["Oral defense", "Word count limits", "Timed typing tests", "Font requirements"], a: 0, explain: "Students explain claims, methods and decisions." }
      ]
    },

    /* ======================= MODULE 5 ======================= */
    {
      title: "The VBM–NIST Decision Framework",
      summary: "Evaluating AI uses and tools with the Virtuous Business Model inside NIST's GOVERN, MAP, MEASURE, MANAGE.",
      minutes: 25,
      objectives: [
        "Apply the three VBM capital questions to a proposed AI use",
        "Describe the four NIST AI RMF functions and how GOVERN informs them all",
        "Use the five VBM-informed risk criteria",
        "Reach and document a decision: approve, pilot with controls, redesign or do not use"
      ],
      lessons: [
        {
          title: "The Virtuous Business Model",
          blocks: [
            { type: "html", html: "<p>The Virtuous Business Model (Brooker &amp; Boyce, 2017) is the <strong>governing logic</strong> of IWU's GenAI framework—not an ethical check added after the fact. It asks whether a proposed AI use builds three kinds of capital.</p>" },
            { type: "table", head: ["Capital", "Decision question", "Policy implication"], rows: [
              ["<strong>Economic</strong>", "Does this protect learning quality and steward resources?", "Assess risk, costs and institutional integrity."],
              ["<strong>Social</strong>", "Does this strengthen trust, support and equitable participation?", "Check access, bias and effects on relationships."],
              ["<strong>Spiritual</strong>", "Does this preserve dignity, agency and accountability?", "Keep human judgment and responsibility central."]
            ] },
            { type: "callout", title: "One failure is enough", html: "A proposed use that fails <strong>any one</strong> of these tests must be <strong>redesigned, restricted or prohibited</strong>. The framework also proposes <strong>ecological responsibility</strong>—stewardship of energy and material resources—as a criterion." },
            { type: "match", title: "Which capital?", instructions: "Match each concern with the VBM capital it primarily tests.", choices: ["Economic", "Social", "Spiritual"], items: [
              { t: "Will an AI grading assistant reduce the quality of learning or expose IWU to reputational risk?", a: 0 },
              { t: "Will students without reliable internet be excluded from an AI-required activity?", a: 1 },
              { t: "Will an automated advising bot make decisions about a student's future without a human involved?", a: 2 },
              { t: "Does the tool's licensing cost represent good stewardship compared with alternatives?", a: 0 },
              { t: "Could AI-generated feedback feel impersonal and erode trust between students and faculty?", a: 1 }
            ] }
          ]
        },
        {
          title: "NIST: GOVERN, MAP, MEASURE, MANAGE",
          blocks: [
            { type: "html", html: "<p>The NIST AI Risk Management Framework (AI RMF 1.0, 2023) provides a repeatable process. IWU embeds the VBM values inside each function. <strong>GOVERN informs the whole review</strong>, and every decision has a named owner and rationale.</p>" },
            { type: "table", head: ["Function", "VBM-informed review", "Evidence or action"], rows: [
              ["<strong>GOVERN</strong>", "Set thresholds for stewardship, equitable access and dignity; name human owners.", "Named responsibility and review rules"],
              ["<strong>MAP</strong>", "Find where the use could weaken learning, exclude students or displace agency.", "Use case and stakeholder record"],
              ["<strong>MEASURE</strong>", "Test learning quality and costs, access and bias, privacy and accountability.", "Verified results and residual risk"],
              ["<strong>MANAGE</strong>", "Apply controls to each capital; decide whether the use meets IWU's criteria.", "Approve, pilot, redesign or decline; set a review date"]
            ] },
            { type: "classify", title: "Which function?", instructions: "Assign each activity to the NIST function it belongs to.", options: ["GOVERN", "MAP", "MEASURE", "MANAGE"], items: [
              { t: "Naming the Associate Provost as the owner of the AI tutoring pilot and setting disclosure rules.", a: 0, why: "Setting owners, acceptable use and thresholds is GOVERN." },
              { t: "Identifying which student groups might be affected and where the tool could replace student reasoning.", a: 1, why: "Identifying stakeholders, exposure and purpose is MAP." },
              { t: "Testing the tool's answers for accuracy and checking outcomes across student groups.", a: 2, why: "Gathering evidence of benefit and harm is MEASURE." },
              { t: "Deciding to pilot with controls, requiring human sign-off, and setting a review date.", a: 3, why: "Setting controls and making the decision is MANAGE." },
              { t: "Assessing privacy, security and the vendor's data practices.", a: 2, why: "Assessing privacy, security, reliability and costs is MEASURE." }
            ] }
          ]
        },
        {
          title: "Five risk criteria and the decision",
          blocks: [
            { type: "accordion", title: "VBM-informed risk criteria (across MAP → MEASURE → MANAGE)", items: [
              { title: "Human agency & learning  ·  Spiritual / Economic", html: "<p><strong>MAP:</strong> Could GenAI replace student reasoning, authorship or faculty judgment?<br><strong>MEASURE:</strong> Check learner explanation and work quality; compare learning outcomes.<br><strong>MANAGE:</strong> Set assistance limits and human sign-off; redesign if learning weakens.</p>" },
              { title: "Truthfulness & integrity  ·  Spiritual / Social / Economic", html: "<p><strong>MAP:</strong> Where could outputs, citations or AI disclosures mislead others?<br><strong>MEASURE:</strong> Verify facts and citations; check disclosure and traceability.<br><strong>MANAGE:</strong> Require source review and disclosure; correct inaccurate work promptly.</p>" },
              { title: "Dignity, equity & care  ·  Spiritual / Social", html: "<p><strong>MAP:</strong> Who faces bias, unequal access or accessibility barriers?<br><strong>MEASURE:</strong> Test outcomes across groups; review accessibility and stakeholder feedback.<br><strong>MANAGE:</strong> Provide access and accommodations; offer appeals and monitor disparities.</p>" },
              { title: "Privacy, safety & stewardship  ·  Spiritual / Economic", html: "<p><strong>MAP:</strong> What sensitive data, third-party tools, IP or safety exposures arise?<br><strong>MEASURE:</strong> Assess privacy, security, rights, reliability, costs and vendor practices.<br><strong>MANAGE:</strong> Restrict data and vendors; assign training and incident response.</p>" },
              { title: "Ecological responsibility  ·  Environmental / Economic", html: "<p><strong>MAP:</strong> What energy, resource or ecological impacts are material?<br><strong>MEASURE:</strong> Estimate material demand; compare lower-impact alternatives.<br><strong>MANAGE:</strong> Choose proportionate use; revisit when evidence changes.</p>" }
            ] },
            { type: "cards", title: "The documented IWU decision", items: [
              { title: "Approve", text: "Meets every criterion with appropriate safeguards.", color: "#1f7a4a" },
              { title: "Pilot with controls", text: "Promising; test in a limited setting with monitoring.", color: "#1e5a8a" },
              { title: "Redesign", text: "Fails a criterion but could meet it with changes.", color: "#9a6200" },
              { title: "Do not use", text: "Risks cannot be reduced to an acceptable level.", color: "#b3261e" }
            ] },
            { type: "callout", title: "Record and revisit", html: "For each criterion, record the <strong>evidence, remaining risk, safeguards, owner and rationale</strong>. Set a review date and reassess if impacts change." }
          ]
        },
        {
          title: "Worked example: an AI feedback tool",
          blocks: [
            { type: "html", html: "<p>A department proposes an AI tool that gives students instant feedback on draft essays. Walk it through the framework.</p>" },
            { type: "steps", items: [
              { title: "GOVERN", html: "Name an owner (e.g., the department chair) and the learning purpose; set rules for disclosure and human oversight." },
              { title: "MAP", html: "Who is affected? Could students let the tool do their revising? Will student drafts be sent to a third-party vendor? Can students using screen readers access it?" },
              { title: "MEASURE", html: "Evaluate the quality and accuracy of its feedback on sample essays; test for bias across student groups; review the vendor's privacy and data retention; check accessibility." },
              { title: "MANAGE", html: "Decision: <em>Pilot with controls</em>—approved-system contract only, feedback on early drafts (Level 3), faculty still grade, student reflection required, review after one semester." }
            ] },
            { type: "scenario", title: "Your call", prompt: "During MEASURE, testing shows the feedback tool rates essays by non-native English writers consistently lower on 'argument quality,' even when faculty rate them equally. What decision best fits the framework?", options: [
              { t: "Approve—the tool is accurate for most students.", ok: false, fb: "The use fails the dignity, equity and care criterion (Social / Spiritual capital). One failed criterion requires action." },
              { t: "Redesign or restrict: fix or disable the biased scoring, monitor disparities, and re-test before any wider use.", ok: true, fb: "Right. A use that fails a criterion must be redesigned, restricted or prohibited, with evidence documented." },
              { t: "Let each instructor decide individually without documentation.", ok: false, fb: "The framework requires a documented decision with an owner, rationale and review date." }
            ] },
            { type: "reflect", prompt: "Think of an AI tool or use your department is considering. Which of the five risk criteria worries you most, and what evidence would you want in MEASURE?" }
          ]
        }
      ],
      quiz: [
        { q: "Which VBM capital asks whether a use preserves dignity, agency and accountability?", options: ["Spiritual", "Economic", "Social", "Ecological"], a: 0, explain: "Spiritual capital centers human dignity." },
        { q: "What happens if a proposed AI use fails one VBM criterion?", options: ["It must be redesigned, restricted or prohibited", "It is approved if it passes the other two", "It is automatically piloted", "Nothing, if it saves money"], a: 0, explain: "A single failure requires action." },
        { q: "Which NIST function informs the entire review?", options: ["GOVERN", "MAP", "MEASURE", "MANAGE"], a: 0, explain: "GOVERN sets owners, thresholds and rules throughout." },
        { q: "Testing a tool's accuracy and bias across student groups belongs to:", options: ["MEASURE", "GOVERN", "MAP", "MANAGE"], a: 0, explain: "MEASURE gathers evidence of benefit and harm." },
        { q: "Which is NOT one of the four documented decisions?", options: ["Approve automatically without review", "Approve", "Pilot with controls", "Do not use"], a: 0, explain: "The four decisions are approve, pilot with controls, redesign, do not use—all after review." }
      ]
    },

    /* ======================= MODULE 6 ======================= */
    {
      title: "Coaching Students & Leading Implementation",
      summary: "The student pre-submission checklist, the phased roadmap and your role in continuous review.",
      minutes: 20,
      objectives: [
        "Coach students through the six-question pre-submission checklist",
        "Describe the phased implementation roadmap",
        "Identify evidence of progress and the annual review cycle",
        "Commit to specific next steps in your own role"
      ],
      lessons: [
        {
          title: "The student checklist",
          blocks: [
            { type: "html", html: "<p>Students use a simplified version of the VBM–NIST framework before submitting AI-assisted work. Knowing it lets you coach students and design assignments that reinforce it.</p><ol><li><strong>GOVERN:</strong> Check the assignment level and instructor rules. Is GenAI allowed? What disclosure is required? If unclear, ask.</li><li><strong>MAP:</strong> What did GenAI help create—ideas, wording, images/code, sources?</li><li><strong>MEASURE:</strong> Answer the six questions below.</li><li><strong>MANAGE:</strong> Fix anything marked FIX before submitting.</li></ol>" },
            { type: "checklist", title: "Try it as a student would", instructions: "Imagine a student who used AI at Level 3 to brainstorm a paper. Mark each question Yes or Fix.", items: [
              { title: "Learning & agency", q: "Can I explain the ideas and show which reasoning is mine?", values: "Spiritual: creativity, responsibility · Economic: proficient use", color: "#6b4f9e", fix: "Rework the sections you cannot explain until the reasoning is yours." },
              { title: "Truth & sources", q: "Did I check facts, quotations, citations and links against sources that really exist?", values: "Spiritual: conscience · Social: sincerity", color: "#1e5a8a", fix: "Verify or remove every unsupported claim and citation." },
              { title: "Honest attribution", q: "Did I follow the assignment rules for disclosing GenAI use?", values: "Spiritual: conscience · Social: sincerity", color: "#1f7a4a", fix: "Add the required disclosure (tools used and how they helped)." },
              { title: "Dignity & fairness", q: "Did I correct bias, stereotypes, harmful wording or barriers to access?", values: "Spiritual: dignity, compassion · Social: support, service", color: "#6b4f9e", fix: "Revise unfair or harmful content." },
              { title: "Privacy & rights", q: "Did I protect private information and respect other people's work and rights?", values: "Spiritual: responsibility · Economic: principled use", color: "#9a6200", fix: "Remove private data and properly credit others' work." },
              { title: "Purposeful use", q: "Did GenAI support my learning enough to justify using it?", values: "Economic: stewardship · Environmental: resource care", color: "#3f7d3a", fix: "Reconsider whether AI use served the learning goal." }
            ], okMsg: "<strong>Ready to submit.</strong> The use is allowed and every answer is Yes.", fixMsg: "<strong>Take action before submitting:</strong>" },
            { type: "callout", title: "Coaching tip", html: "Submit only if the use is allowed and every answer is YES. Encourage students to raise concerns with you <em>before</em> submission—not after." }
          ]
        },
        {
          title: "Phased implementation",
          blocks: [
            { type: "table", head: ["Timing", "Institutional actions", "Training and evidence"], rows: [
              ["First 90 days", "Approve the policy and framework; name owners; publish assignment guidance; prepare disclosure statements and privacy guidance.", "Develop the university-wide training plan; train a pilot group of faculty and staff."],
              ["Months 4–9", "Pilot in selected courses, programs and administrative units.", "Role-specific training for faculty, students, administrators and technology staff."],
              ["Months 10–18", "Embed AI literacy in programs, faculty development and research methods; evaluate pilot results.", "Discipline-specific coaching; additional training for reviewers of sensitive uses (e.g., integrity screening)."],
              ["Annual cycle", "Review evidence, technology, regulation, approved tools, stakeholder feedback and emerging risks.", "Update training; include GenAI in onboarding for all new faculty and staff."]
            ] },
            { type: "classify", title: "Put it in order", instructions: "Which phase does each activity belong to?", options: ["First 90 days", "Months 4–9", "Months 10–18", "Annual cycle"], items: [
              { t: "Name implementation owners and publish assignment guidance.", a: 0, why: "Establishing requirements and responsibilities comes first." },
              { t: "Pilot the policy in selected courses and administrative units.", a: 1, why: "Months 4–9 is the pilot and role-specific training phase." },
              { t: "Embed AI literacy into academic programs and evaluate pilot results.", a: 2, why: "Months 10–18 embeds literacy and evaluates." },
              { t: "Review approved tools, regulations and stakeholder feedback; update training.", a: 3, why: "This recurs every year." }
            ] },
            { type: "html", html: "<p><strong>Evidence of progress</strong> includes published assignment guidance, role-specific training completion (like this course), approved tools, source-audit practices and pilot feedback. The policy should be reviewed <strong>at least annually</strong> by a cross-functional group representing faculty, students, academic integrity, accessibility, information security, libraries and instructional design.</p>" }
          ]
        },
        {
          title: "Your commitments",
          blocks: [
            { type: "html", html: "<p>GenAI offers IWU real opportunities to support teaching and learning—<strong>without allowing the technology to replace learning, human judgment or the university's mission</strong>. Your daily choices make that real.</p>" },
            { type: "cards", title: "Summary: what faculty & staff do", items: [
              { title: "Set the level", text: "Name a level for every assessed activity and explain why." },
              { title: "Design for thinking", text: "Use source audits, portfolios, comparisons and oral defenses." },
              { title: "Protect data", text: "Only approved systems for student, research or proprietary data." },
              { title: "Decide as a human", text: "Grades and integrity findings are yours—never a detector's." },
              { title: "Model disclosure", text: "Disclose substantive AI help in course materials and feedback." },
              { title: "Apply VBM–NIST", text: "Evaluate new AI uses with GOVERN, MAP, MEASURE, MANAGE." }
            ] },
            { type: "reflect", prompt: "Write three concrete actions you will take this term (e.g., add levels to two assignments, add a verification log, review a tool with your chair)." },
            { type: "callout", tone: "ok", title: "Next: the final exam", html: "Complete the knowledge check for this module to unlock the 20-question final exam. You need 80% to earn your IWU certificate, and you can retake it as many times as you need." }
          ]
        }
      ],
      quiz: [
        { q: "What is the first step in the student pre-submission checklist?", options: ["Check the assignment's level and instructor rules (GOVERN)", "Run the paper through a detector", "Ask AI to proofread", "Count the words"], a: 0, explain: "Students first confirm what is allowed." },
        { q: "According to the checklist, a student should submit only when:", options: ["The use is allowed and every answer is Yes", "At least four answers are Yes", "The AI tool says the work is good", "The deadline is near"], a: 0, explain: "All six must be resolved." },
        { q: "In which phase are selected courses and administrative units piloted?", options: ["Months 4–9", "First 90 days", "Months 10–18", "Annual cycle"], a: 0, explain: "Piloting happens in months 4–9." },
        { q: "How often should the GenAI policy be reviewed?", options: ["At least annually", "Every five years", "Only when a lawsuit occurs", "Never; it is permanent"], a: 0, explain: "At least annually by a cross-functional group." },
        { q: "Which is an example of evidence of implementation progress?", options: ["Role-specific training completion", "Number of AI detector licenses", "Reduced course offerings", "Fewer assignments"], a: 0, explain: "Training completion, published guidance, approved tools and pilot feedback." }
      ]
    }
  ],

  /* ======================= FINAL EXAM BANK (20 drawn per attempt) ======================= */
  exam: [
    { topic: "Module 1 · Foundations", q: "Large language models generate text by:", options: ["Predicting probable sequences of words in response to a prompt", "Looking up verified answers in a database", "Copying text from a single trusted source", "Understanding meaning the way a scholar does"], a: 0 },
    { topic: "Module 1 · Foundations", q: "Which best describes the Task Force's overall recommendation?", options: ["Neither a blanket ban nor unrestricted use, but a five-level, assignment-specific policy", "A complete ban on GenAI in coursework", "Unrestricted use with no disclosure", "Leave all decisions to AI vendors"], a: 0 },
    { topic: "Module 1 · Foundations", q: "Why does IWU policy address AI functions rather than brand names?", options: ["Capabilities appear across many rapidly changing products", "Brand names change every week by law", "Only one brand exists", "Functions are cheaper to license"], a: 0 },
    { topic: "Module 1 · Foundations", q: "Who is responsible for work submitted with AI assistance?", options: ["The person who submits it", "The AI vendor", "The AI tool as co-author", "The IT department"], a: 0 },
    { topic: "Module 1 · Foundations", q: "Which is IWU's response to the concern that heavy AI use weakens critical thinking?", options: ["Use AI after initial thinking and keep no-AI tasks where mastery requires it", "Ban all writing assignments", "Require AI for every task", "Grade only on formatting"], a: 0 },
    { topic: "Module 2 · Use levels", q: "When an assignment names no AI level, which level applies?", options: ["Level 2 — Everyday Assistance", "Level 1 — Independent Work", "Level 4 — AI-Assisted Work", "Level 5 — AI-Integrated Learning"], a: 0 },
    { topic: "Module 2 · Use levels", q: "Which activity is permitted at Level 2?", options: ["Using AI to identify spelling and grammar errors", "Using AI to generate the thesis", "Including AI-written paragraphs", "Asking AI to answer the questions"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 3, AI-generated text in the final submission is:", options: ["Not permitted", "Permitted if cited", "Required", "Permitted up to 20%"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 4, students who include AI-generated material must:", options: ["Verify it, identify it, substantially revise it and cite sources independently", "Include it unchanged", "Hide it from the instructor", "Use only one AI tool"], a: 0 },
    { topic: "Module 2 · Use levels", q: "Which assignment best fits Level 5?", options: ["Students compare two AI outputs and critique their reasoning", "A closed-book final exam", "A journal with grammar checking only", "A brainstorming-only research proposal"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 1, what must faculty do?", options: ["Explain why independent performance is necessary and list allowed tools", "Nothing; students know what to do", "Provide an AI tool", "Require an AI disclosure"], a: 0 },
    { topic: "Module 2 · Use levels", q: "A single course can include assignments at different levels because:", options: ["Levels are set per assessed activity based on its learning outcomes", "Levels change randomly", "Students choose their own levels", "The registrar assigns them"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "A detector flags a paper as 95% AI-generated. What should the instructor do?", options: ["Use it only as a prompt for conversation and further review under integrity procedures", "Record a misconduct finding immediately", "Assign an automatic zero", "Forward the score to the whole class"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "Which may be entered into an unapproved public AI tool?", options: ["A generic request for discussion questions on a public topic", "Student names with grades", "Unpublished student work", "Research participant transcripts"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "Faculty may use approved AI to help with feedback, but must:", options: ["Personally review student work and make all grading decisions", "Let AI assign final grades", "Share student names with the vendor", "Stop giving written feedback"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "When a specific AI tool is required for an assignment, the course must:", options: ["Provide an equitable alternative", "Require students to pay for it", "Grade tool users higher", "Skip disclosure requirements"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "Before sharing an AI-drafted case study, faculty must review it for:", options: ["Accuracy, bias, copyright, accessibility, cultural and theological appropriateness, and alignment", "Length only", "Font and color only", "Whether the AI tool is popular"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "Which faculty AI use should be disclosed to students?", options: ["Substantive AI contributions to instructional content or individualized feedback", "Spell-check", "Using a calculator", "Using a projector"], a: 0 },
    { topic: "Module 3 · Non-negotiables", q: "In scholarship, faculty may use GenAI when:", options: ["Permitted by the applicable journal, publisher, funder or protocol—with verification and disclosure", "It is listed as a co-author", "They skip citation checks", "Human-subject data is uploaded to public tools"], a: 0 },
    { topic: "Module 4 · Assessment design", q: "Which strategy produces an annotated verification log?", options: ["Source audit", "Oral defense", "Process portfolio", "AI as a tutor"], a: 0 },
    { topic: "Module 4 · Assessment design", q: "A research process portfolio makes which of the following visible?", options: ["The development of authorship through outlines, drafts, disclosures and revisions", "The student's typing speed", "The AI vendor's pricing", "The detector score"], a: 0 },
    { topic: "Module 4 · Assessment design", q: "Rubrics should be revised to reward:", options: ["Reasoning, verification and transparent revision", "The length of AI prompts", "Perfect grammar only", "Use of the most expensive tools"], a: 0 },
    { topic: "Module 4 · Assessment design", q: "Why should faculty explain disclosure rules with examples for IWU National and Global learners?", options: ["Assumptions about authorship and collaboration differ across cultures", "Examples replace the need for a policy", "Global students are exempt from the policy", "Examples are required by detectors"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "Which VBM capital asks whether a use strengthens trust, support and equitable participation?", options: ["Social", "Economic", "Spiritual", "Ecological"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "Which VBM capital asks whether a use protects learning quality and stewards resources?", options: ["Economic", "Social", "Spiritual", "None"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "Which NIST function identifies stakeholders, exposure and where a use could displace agency?", options: ["MAP", "GOVERN", "MEASURE", "MANAGE"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "Naming human owners and setting decision thresholds belongs to which function?", options: ["GOVERN", "MAP", "MEASURE", "MANAGE"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "A tool shows biased outcomes across student groups during testing. The framework requires:", options: ["Redesign, restriction or prohibition, with documented evidence", "Approval if most students benefit", "No action if the tool is popular", "Letting the vendor decide"], a: 0 },
    { topic: "Module 5 · VBM–NIST", q: "Which is one of the four documented IWU decisions?", options: ["Pilot with controls", "Approve without review", "Delegate the decision to AI", "Defer indefinitely"], a: 0 },
    { topic: "Module 6 · Implementation", q: "Students should submit AI-assisted work only when:", options: ["The use is allowed and every checklist answer is Yes", "The AI tool approves it", "Most checklist answers are Yes", "A classmate reviewed it"], a: 0 },
    { topic: "Module 6 · Implementation", q: "The GenAI policy should be reviewed:", options: ["At least annually by a cross-functional group", "Only once at adoption", "Every decade", "Only by the IT department"], a: 0 },
    { topic: "Module 6 · Implementation", q: "Role-specific training for faculty, students, administrators and technology staff occurs primarily in:", options: ["Months 4–9", "First 90 days only", "Never", "Year five"], a: 0 }
  ]
};
