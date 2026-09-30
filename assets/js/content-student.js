/* IWU – AI Training | Student course content
   Source: IWU GenAI Task Force proposal, "Generative AI in Coursework"
   (Team 06 Executive Report & Presentation, DeVoe School of Business, Sept. 2026). */
window.IWU_COURSE = {
  id: "student",
  audience: "Student",
  title: "Learning With AI, Leading With Integrity",
  certTitle: "Student Generative AI Training",
  certLine: "Five-Level Assignment Policy · Verification & Disclosure · Responsible, Values-Based AI Use",
  intro: "Generative AI can be a powerful study partner—or a shortcut that undermines your learning and integrity. This course shows you exactly what IWU expects, how to know what's allowed on each assignment, how to check AI output, protect privacy, disclose honestly, and use AI to grow as a thinker. It follows IWU's Generative AI Task Force framework, rooted in the Virtuous Business Model.",
  modules: [
    /* ======================= MODULE 1 ======================= */
    {
      title: "What GenAI Is (and Isn't)",
      summary: "How generative AI works, why it makes mistakes, and why you stay responsible for your work.",
      minutes: 15,
      objectives: [
        "Explain what generative AI and large language models do",
        "Recognize why AI produces confident but false answers",
        "Describe how AI can help and harm learning",
        "Explain why you are 100% responsible for work you submit"
      ],
      lessons: [
        {
          title: "How GenAI works",
          blocks: [
            { type: "html", html: "<p><strong>Generative AI (GenAI)</strong> is AI that produces new text, images, audio, code or other content by analyzing patterns in data. Chatbots are usually powered by <strong>large language models (LLMs)</strong>, which generate the most <em>probable</em> next words in response to your prompt.</p><p>Here is the key idea: an LLM is excellent at producing text that <em>sounds</em> right. It does not check whether the text <em>is</em> right. It has no understanding of truth, and it cannot take responsibility for what it says.</p>" },
            { type: "flip", title: "Know the terms", cards: [
              { front: "Generative AI", back: "AI that creates new content—text, images, audio, code—from patterns in data." },
              { front: "LLM", back: "Large language model. Predicts likely word sequences. Fluent does not mean accurate." },
              { front: "Prompt", back: "What you type to the AI. A good prompt helps, but you still have to check the output." },
              { front: "Hallucination", back: "When AI states something false as fact—including made-up quotes, statistics and citations." },
              { front: "Disclosure", back: "Telling your instructor which AI tools you used and how, when your assignment requires it." },
              { front: "Assignment level", back: "The 1–5 setting your instructor chooses that tells you what AI use is allowed." }
            ] },
            { type: "callout", tone: "info", title: "It's in more places than chatbots", html: "AI is built into search engines, word processors, grammar tools, note apps and study platforms. IWU's rules apply to <strong>what a tool does</strong> (does it generate ideas, analysis or content?)—not what it's called." }
          ]
        },
        {
          title: "Helpful and harmful",
          blocks: [
            { type: "compare", title: "Same tool, different outcomes", good: { title: "Supports learning", html: "<ul><li>Explaining a concept you're stuck on, in a different way</li><li>Quizzing you to practice for an exam</li><li>Giving feedback on a draft you wrote</li><li>Brainstorming after you've done your own thinking</li><li>Translation and accessibility support</li></ul>" }, bad: { title: "Undermines learning", html: "<ul><li>Writing your answers, arguments or analysis for you</li><li>Inventing sources you never read</li><li>Summarizing readings you skip</li><li>Solving problems you're supposed to learn to solve</li><li>Hiding who actually did the work</li></ul>" } },
            { type: "html", html: "<p>Research shows the effect of AI on learning depends on <strong>how</strong> you use it and <strong>whether you keep doing the thinking</strong>. When a Task Force team compared literature reviews written with and without AI, they found students learned more when they <em>kept cognitive responsibility, questioned the output, and revised with purpose</em>—not when they handed off the core task.</p>" },
            { type: "classify", title: "Learning partner or shortcut?", instructions: "For each use, decide whether it supports your learning or replaces it. (Whether it's <em>allowed</em> still depends on your assignment's level.)", options: ["Supports learning", "Replaces learning"], items: [
              { t: "Asking AI to explain supply and demand using a sports example after you read the chapter.", a: 0, why: "You're using AI as a tutor to deepen understanding." },
              { t: "Pasting the discussion prompt into AI and posting its answer.", a: 1, why: "AI did the thinking the discussion was designed to build." },
              { t: "Having AI quiz you on anatomy terms before an exam.", a: 0, why: "Practice and retrieval strengthen your own knowledge." },
              { t: "Asking AI to write your reflection on a service-learning experience.", a: 1, why: "A reflection is about your experience and thinking—AI can't have it for you." },
              { t: "Writing your draft first, then asking AI which paragraph is least clear.", a: 0, why: "Feedback after your own work supports revision (if the level allows it)." }
            ] }
          ]
        },
        {
          title: "You own your work",
          blocks: [
            { type: "quote", html: "“GenAI is not, and shall not at any time be, treated as an author or accountable scholar.”" },
            { type: "html", html: "<p>AI can't take responsibility for evidence, resolve an ethical question or protect the people affected by your work. <strong>You can—and you must.</strong> Under IWU's framework, <strong>you are 100% responsible for everything you submit</strong>, whether or not AI helped. \"The AI said it\" is never an excuse for an error, a fake source or an unfair statement.</p>" },
            { type: "callout", title: "Why this matters at IWU", html: "IWU exists to develop your independent judgment and character. The university's framework is built on the Virtuous Business Model, which asks whether our choices protect <strong>learning</strong>, strengthen <strong>trust and fairness</strong>, and honor <strong>human dignity and responsibility</strong>. Using AI well is part of becoming the kind of person and professional you want to be." },
            { type: "reflect", prompt: "How do you (or classmates) currently use AI for school? Which uses help you learn, and which might be shortcuts?" }
          ]
        }
      ],
      quiz: [
        { q: "What does a large language model actually do?", options: ["Generates probable sequences of words in response to a prompt", "Looks up only verified facts", "Understands and checks the truth of everything it writes", "Searches only peer-reviewed journals"], a: 0, explain: "It predicts likely text—it does not verify it." },
        { q: "What is an AI 'hallucination'?", options: ["A false statement or invented source presented as fact", "A creative image", "A slow response", "A disclosure statement"], a: 0, explain: "Hallucinations include fake quotes, statistics and citations." },
        { q: "Who is responsible for AI-assisted work you submit?", options: ["You", "The AI tool", "The company that made the AI", "Your instructor"], a: 0, explain: "You are 100% responsible for submitted work." },
        { q: "Which use most clearly supports learning?", options: ["Asking AI to quiz you on material you've studied", "Having AI write your discussion post", "Letting AI summarize readings you skip", "Having AI solve your homework problems"], a: 0, explain: "Practice builds your own knowledge." },
        { q: "IWU's AI rules apply based on:", options: ["What a tool does, such as generating ideas or content", "The brand name of the tool", "Whether the tool is free", "How popular the tool is"], a: 0, explain: "Rules follow functions, not brands." }
      ]
    },

    /* ======================= MODULE 2 ======================= */
    {
      title: "Know Your Level",
      summary: "The five AI use levels, the Level 2 default and what each level lets you do.",
      minutes: 20,
      objectives: [
        "Identify what's allowed at each of the five levels",
        "Apply the Level 2 default when no level is named",
        "Recognize that levels can differ from assignment to assignment",
        "Know when to ask your instructor"
      ],
      lessons: [
        {
          title: "The five levels",
          blocks: [
            { type: "html", html: "<p>At IWU, your instructor assigns every graded activity one of <strong>five AI use levels</strong>. The level tells you what AI can be used for, what you must disclose and what evidence of your work may be required.</p>" },
            { type: "table", head: ["Level", "What you may do", "What you must disclose"], rows: [
              ['<span class="level-chip lv1">1</span> Independent work', "No GenAI at all—including AI features in apps. Only tools your instructor lists (e.g., a calculator) and approved accommodations.", "Nothing to disclose; just don't use AI."],
              ['<span class="level-chip lv2">2</span> Everyday assistance', "Spelling, grammar and punctuation help; minor corrections. <strong>No</strong> AI-generated ideas, analysis, arguments or answers, and no major rewriting. Your own words.", "No disclosure required."],
              ['<span class="level-chip lv3">3</span> Learning support', "Brainstorming, preliminary outlines, concept explanations, study help, feedback on early drafts. <strong>No</strong> AI-generated text, citations or code in your final submission.", "Full disclosure on your cover page: which tools and how they helped."],
              ['<span class="level-chip lv4">4</span> AI-assisted work', "AI-generated material may appear in your work if the assignment allows it—but you must verify it, identify it, substantially revise it and find/cite sources yourself.", "Everything from Level 3, plus anything else your instructor requires."],
              ['<span class="level-chip lv5">5</span> AI-integrated learning', "AI use is required. You may compare outputs, try prompts, and critique or improve AI answers. Evaluating the AI is the assignment.", "Document your AI use and verification as your instructor directs."]
            ] },
            { type: "callout", title: "No level listed? It's Level 2.", html: "If an assignment doesn't say, <strong>Level 2 — Everyday Assistance</strong> applies: spelling and grammar help only. Don't assume more is allowed." }
          ]
        },
        {
          title: "Can I do this?",
          blocks: [
            { type: "html", html: "<p>Levels are set <strong>per assignment</strong>, not per course. Your Business Ethics course might use Level 1 for a quiz, Level 3 for a research paper and Level 5 for an AI-critique project. Always check each assignment.</p>" },
            { type: "classify", title: "What level would allow it?", instructions: "Pick the <strong>lowest</strong> level at which each action would be allowed.", options: ["Level 2", "Level 3", "Level 4", "Level 5"], items: [
              { t: "Using a grammar checker to fix comma errors in your own essay.", a: 0, why: "Minor editing is allowed at Level 2 (and above)." },
              { t: "Asking AI to suggest five possible topics before choosing one yourself.", a: 1, why: "Brainstorming is learning support: Level 3 and above, with disclosure." },
              { t: "Including an AI-drafted paragraph that you verified, heavily revised and disclosed.", a: 2, why: "AI material in the final submission first becomes possible at Level 4." },
              { t: "Asking AI to explain a statistics concept you didn't understand in class.", a: 1, why: "Concept explanations are learning support: Level 3." },
              { t: "Getting AI feedback on your first draft's organization.", a: 1, why: "Feedback on early drafts is Level 3—just keep AI text out of the final." }
            ] },
            { type: "scenario", title: "No level stated", prompt: "Your online discussion prompt says nothing about AI. You'd like to have AI draft a response that you'll then edit. What should you do?", options: [
              { t: "Go ahead—if the instructor didn't say no, it's allowed.", ok: false, fb: "When no level is named, Level 2 applies. AI-generated ideas and answers aren't allowed at Level 2." },
              { t: "Write the response yourself; use AI only for spelling and grammar, or ask your instructor if you'd like to use more.", ok: true, fb: "Correct. Level 2 is the default—minor editing only. When in doubt, ask." },
              { t: "Use AI but don't mention it.", ok: false, fb: "That would break the Level 2 rule and misrepresent AI work as your own." }
            ] }
          ]
        },
        {
          title: "Rules at every level",
          blocks: [
            { type: "html", html: "<p>No matter what level an assignment uses, some things are <strong>never</strong> allowed:</p>" },
            { type: "cards", items: [
              { title: "No fabrication", text: "Never submit fake AI information, quotes, data or citations." },
              { title: "Protect data", text: "Never put protected or confidential information into an unapproved tool." },
              { title: "No misrepresentation", text: "Never present AI-generated work as your own." },
              { title: "No shortcuts", text: "Never use AI to avoid the learning the assignment requires—or to impersonate someone." }
            ] },
            { type: "callout", tone: "ok", title: "Fair to you, too", html: "IWU's framework protects students as well. An <strong>AI-detection score can never be the only evidence</strong> of misconduct—detectors are unreliable. Grades and integrity decisions are made by people who consider all the evidence. And if an assignment <strong>requires</strong> a specific AI tool, your course must offer an <strong>equitable alternative</strong> if cost, location, language or technology is a barrier." },
            { type: "html", html: "<h4>When to ask your instructor</h4><ul><li>The level isn't clear, or two instructions seem to conflict</li><li>You aren't sure if a tool counts as GenAI</li><li>You need an alternative to a required tool</li><li>Norms about collaboration or authorship feel different from what you're used to (many IWU students study from different countries and cultures—asking is always appropriate)</li></ul>" }
          ]
        }
      ],
      quiz: [
        { q: "Your assignment doesn't mention AI. Which level applies?", options: ["Level 2 — Everyday Assistance", "Level 1 — Independent Work", "Level 4 — AI-Assisted Work", "Any level you choose"], a: 0, explain: "Level 2 is the default." },
        { q: "At Level 3, can AI-generated sentences appear in your final paper?", options: ["No", "Yes, if cited", "Yes, up to one paragraph", "Yes, if the paper is late"], a: 0, explain: "Level 3 allows learning support, but no AI material in the final submission." },
        { q: "At Level 1, which is allowed?", options: ["A basic calculator the instructor permits", "An AI chatbot for ideas", "AI grammar rewriting", "An AI summary of the reading"], a: 0, explain: "Level 1 means no GenAI; only listed non-AI tools." },
        { q: "What is required at Level 4 if you include AI material?", options: ["Verify it, identify it, substantially revise it, cite sources independently and disclose", "Paste it unchanged", "Nothing extra", "Only change the font"], a: 0, explain: "You remain responsible for the complete submission." },
        { q: "Which is never allowed at any level?", options: ["Submitting fabricated AI citations", "Checking your spelling", "Asking your instructor a question", "Studying with flashcards"], a: 0, explain: "Fabrication is never allowed." }
      ]
    },

    /* ======================= MODULE 3 ======================= */
    {
      title: "Verify Everything",
      summary: "Spotting AI errors and fake citations, and how to verify sources step by step.",
      minutes: 20,
      objectives: [
        "Recognize the common ways AI output goes wrong",
        "Verify facts, quotations, citations and links",
        "Keep a verification log",
        "Correct or remove unsupported claims"
      ],
      lessons: [
        {
          title: "Why AI gets it wrong",
          blocks: [
            { type: "html", html: "<p>Researchers found that ChatGPT frequently produces <strong>fabricated and erroneous bibliographic citations</strong> (Walters &amp; Wilder, 2023)—real-sounding author names, plausible journal titles and DOIs that lead nowhere. Because an LLM predicts likely text, a citation that <em>looks</em> right is exactly what it's built to produce.</p>" },
            { type: "cards", title: "Common AI errors", items: [
              { title: "Fake citations", text: "Articles, books or authors that don't exist—or real authors with invented titles." },
              { title: "Wrong facts", text: "Incorrect dates, numbers, names or statistics stated confidently." },
              { title: "Misquotes", text: "Quotes attributed to people who never said them." },
              { title: "Outdated info", text: "Information that was once true but has changed." },
              { title: "Bias", text: "Stereotypes or one-sided perspectives drawn from its training data." },
              { title: "Bad math", text: "Calculations that look correct but aren't." }
            ] },
            { type: "spot", title: "Fact-check this AI answer", instructions: "A student asked AI for background on servant leadership. Select every sentence that you would need to flag as a likely error or unverifiable claim, then check.", label: "AI response", segments: [
              { t: "Servant leadership is an approach in which a leader's primary focus is serving the growth and well-being of others." },
              { t: "The term was popularized by Robert K. Greenleaf in his 1970 essay \"The Servant as Leader.\"" },
              { t: "A 2021 Harvard study of 50,000 companies proved that servant leaders increase profits by exactly 312%.", issue: "Suspiciously precise statistic with no source; \"proved\" and \"exactly 312%\" are red flags for a fabricated claim." },
              { t: "According to Smith and Patel (2019) in the Journal of Virtuous Leadership, 42(7), 1–19, servant leadership is \"the only ethical model of management.\"", issue: "Likely fabricated citation and quote—you must locate the actual article before using it." },
              { t: "Many leadership scholars connect servant leadership to themes of humility, listening and stewardship." },
              { t: "Greenleaf personally founded Indiana Wesleyan University in 1920.", issue: "False: this invents a historical connection. Always check facts about people and institutions." }
            ], takeaway: "Fluent writing mixes true and false statements. Every factual claim and citation must be checked against a real source." }
          ]
        },
        {
          title: "How to verify",
          blocks: [
            { type: "steps", items: [
              { title: "Find the original", html: "Search the library database or Google Scholar for the exact title and author. Open the actual source." },
              { title: "Confirm the details", html: "Do the author, year, title, journal, volume, pages and DOI all match?" },
              { title: "Read the relevant part", html: "Does the source actually say what the AI claims? Quotations must match word-for-word." },
              { title: "Check facts and numbers", html: "Confirm statistics, dates and calculations with a reliable source—or redo the math yourself." },
              { title: "Correct, replace or remove", html: "If you can't verify it, don't use it. Replace it with a source you found and read." },
              { title: "Record it", html: "Log what you checked and what you changed (a verification log)." }
            ] },
            { type: "example", title: "A verification log", html: '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>AI claim or citation</th><th>Checked against</th><th>Result</th><th>Action</th></tr></thead><tbody><tr><td>Greenleaf coined \"servant leadership\" (1970)</td><td>Greenleaf Center website; library database</td><td>Verified</td><td>Kept, cited original essay</td></tr><tr><td>Smith &amp; Patel (2019), J. of Virtuous Leadership</td><td>Library search, Google Scholar, DOI lookup</td><td>Not found—fabricated</td><td>Removed</td></tr><tr><td>\"312% profit increase\"</td><td>Searched for the study</td><td>No source exists</td><td>Removed</td></tr></tbody></table></div><p style="margin-bottom:0">Some instructors will require a log like this (a <strong>source audit</strong>). Even when they don\'t, it\'s a great habit.</p>' },
            { type: "scenario", title: "The perfect source", prompt: "AI suggests a journal article that perfectly supports your thesis. You search the library and Google Scholar and can't find it anywhere. What do you do?", options: [
              { t: "Cite it anyway—it probably exists somewhere.", ok: false, fb: "Submitting an unverifiable citation risks submitting fabricated information, which is never allowed." },
              { t: "Remove it and find a real source you can read and cite—or ask a librarian for help.", ok: true, fb: "Exactly. If you can't verify it, you can't use it. IWU librarians can help you find real sources." },
              { t: "Change a few words in the title so it looks different.", ok: false, fb: "That's still fabrication. Only cite sources you have actually located and read." }
            ] }
          ]
        },
        {
          title: "Checking for bias",
          blocks: [
            { type: "html", html: "<p>Because GenAI recognizes patterns without understanding them, it can <strong>reproduce bias</strong> from its training data—stereotypes about gender, culture, race, religion, disability or income, or a single perspective presented as the only one.</p><p>To evaluate bias:</p><ul><li>Ask whose perspective is missing</li><li>Compare AI output with peer-reviewed research and diverse sources</li><li>Watch for generalizations about groups of people</li><li>Revise wording that is unfair, harmful or excludes people</li></ul>" },
            { type: "spot", title: "Spot the bias", instructions: "AI generated this short case scenario for a nursing class. Select any phrases that reflect bias or stereotypes.", label: "AI-generated case", segments: [
              { t: "Maria, a 68-year-old patient, arrives at the clinic with shortness of breath." },
              { t: "As an elderly woman, she is probably confused and will not understand her treatment options.", issue: "Age and gender stereotype—assumes cognitive decline without evidence." },
              { t: "The nurse reviews her vital signs and medical history." },
              { t: "Because she is from a low-income neighborhood, she likely does not follow medical advice.", issue: "Income-based stereotype that could lead to unfair care." },
              { t: "The nurse explains the options clearly and asks what questions Maria has." }
            ], takeaway: "Checking for bias protects the dignity of real people—a core IWU value." }
          ]
        }
      ],
      quiz: [
        { q: "Why does AI often produce fake citations?", options: ["It predicts text that looks plausible without checking whether it exists", "It is programmed to lie", "Libraries block it", "Citations are copyrighted"], a: 0, explain: "LLMs generate probable-looking text." },
        { q: "What's the first step to verify an AI-suggested source?", options: ["Find and open the original source", "Ask the AI whether it's real", "Check that it's formatted in APA", "Assume it's real if the DOI looks valid"], a: 0, explain: "Locate the actual source." },
        { q: "You can't find a source AI gave you. What should you do?", options: ["Remove it and replace it with a source you found and read", "Cite it anyway", "Change the title slightly", "Put it in a footnote"], a: 0, explain: "Unverifiable = unusable." },
        { q: "Which is a red flag in AI output?", options: ["A suspiciously precise statistic with no source", "A clear definition", "A short sentence", "A question back to you"], a: 0, explain: "Unsourced, overly precise claims are common fabrications." },
        { q: "Which helps you detect bias in AI output?", options: ["Comparing with peer-reviewed research and diverse perspectives", "Asking AI to rate its own bias", "Using a longer prompt", "Accepting the first response"], a: 0, explain: "Compare perspectives and sources." }
      ]
    },

    /* ======================= MODULE 4 ======================= */
    {
      title: "Privacy, Dignity & Honest Disclosure",
      summary: "What never goes into an AI tool, respecting others, and how to write a clear disclosure.",
      minutes: 20,
      objectives: [
        "Identify information that must never go into unapproved AI tools",
        "Respect other people's work, rights and dignity",
        "Write a clear, complete AI disclosure statement",
        "Understand equitable access and alternatives"
      ],
      lessons: [
        {
          title: "Protecting privacy",
          blocks: [
            { type: "html", html: "<p>What you type into a public AI tool may be stored, reviewed or used to train future models. IWU policy says <strong>confidential, personally identifiable, protected educational, research-participant and proprietary information</strong> may only be entered into <strong>approved systems</strong>.</p>" },
            { type: "classify", title: "Safe to paste into a public AI tool?", instructions: "Decide whether each item is OK to enter into a public, unapproved AI tool.", options: ["OK", "Don't enter it"], items: [
              { t: "Your own question: \"Explain the difference between mean and median.\"", a: 0, why: "General learning question, no private data." },
              { t: "A classmate's draft they shared with you for peer review.", a: 1, why: "That's someone else's unpublished work—respect their rights and privacy." },
              { t: "Patient details from your clinical placement (even without a name).", a: 1, why: "Health information from clinical work is protected and could identify someone." },
              { t: "Survey responses you collected for your research project.", a: 1, why: "Research participant data must stay in approved systems." },
              { t: "Confidential financial data from your internship employer.", a: 1, why: "Proprietary information belongs only in approved systems." },
              { t: "A published poem you're analyzing, to ask about poetic devices.", a: 0, why: "Published text used for learning is generally fine—still cite the poem properly." }
            ] }
          ]
        },
        {
          title: "Dignity & fairness",
          blocks: [
            { type: "html", html: "<p>IWU's framework rests on the Virtuous Business Model's three kinds of capital. For students, they boil down to simple questions:</p>" },
            { type: "table", head: ["Value", "Question for you"], rows: [
              ["<strong>Economic</strong> — stewardship", "Does my AI use protect the quality of my learning and use resources wisely?"],
              ["<strong>Social</strong> — trust &amp; fairness", "Is my use honest, fair to classmates and respectful of others' work?"],
              ["<strong>Spiritual</strong> — dignity &amp; responsibility", "Am I taking responsibility and treating every person with dignity?"]
            ] },
            { type: "scenario", title: "Group project", prompt: "Your group's AI-drafted slide includes an image and a joke that stereotype a religious group. The deadline is in an hour. What should you do?", options: [
              { t: "Keep it—the AI made it, not us.", ok: false, fb: "You're responsible for everything you submit. Stereotypes violate the dignity of real people." },
              { t: "Remove or revise the content, and let your group know why.", ok: true, fb: "Yes. Correcting bias and harmful wording is part of the pre-submission checklist." },
              { t: "Add a small note saying the AI created it.", ok: false, fb: "Disclosure doesn't excuse harmful content. Fix it before submitting." }
            ] },
            { type: "callout", tone: "info", title: "Equitable access", html: "Not every student has the same devices, internet or money for paid tools. If an assignment <strong>requires</strong> an AI tool and you face a barrier, tell your instructor—IWU policy requires an <strong>equitable alternative</strong>." }
          ]
        },
        {
          title: "Writing a disclosure",
          blocks: [
            { type: "html", html: "<p>At <strong>Level 3 and above</strong>, you must disclose your AI use. At Level 3 the disclosure goes on your <strong>cover page</strong> and names the tools and <em>how they supported your learning</em>. At Levels 4 and 5, follow any additional instructions from your instructor.</p><p>A good disclosure answers: <strong>Which tool? What did you ask it to do? What did you do with the output? What did you verify?</strong></p>" },
            { type: "compare", title: "Weak vs. strong disclosure", bad: { title: "Weak", html: "<p><em>\"I used AI.\"</em></p><p>Doesn't say which tool, for what, or what you did with it.</p>" }, good: { title: "Strong (Level 3)", html: "<p><em>\"AI use (Level 3): I used [tool name] to brainstorm possible research questions and to explain the term 'moral hazard.' I chose and refined my own research question. I received AI feedback on my outline's organization and reorganized two sections. No AI-generated text or citations appear in this paper; all sources were located and read by me.\"</em></p>" } },
            { type: "example", title: "Level 4 disclosure", html: "<p><em>\"AI use (Level 4): I used [tool name] to draft an initial version of the competitor analysis table (Section 3). I verified every figure against the companies' annual reports, corrected two errors in market share, rewrote all descriptions in my own words, and added sources I found independently. My prompts and the original AI output are attached in Appendix B, as required.\"</em></p>" },
            { type: "reflect", prompt: "Draft a disclosure for a recent or upcoming assignment where AI use is allowed. Which tool, what for, and what did you verify or change?" }
          ]
        }
      ],
      quiz: [
        { q: "Which information may be entered into a public AI tool?", options: ["A general question about a course concept", "Patient details from a clinical placement", "A classmate's unpublished draft", "Survey data from research participants"], a: 0, explain: "Only non-sensitive, non-private information." },
        { q: "Where does a Level 3 disclosure go?", options: ["On your cover page", "Nowhere—Level 3 needs no disclosure", "In a private message to a classmate", "Only in the file name"], a: 0, explain: "Level 3 requires full disclosure on the cover page." },
        { q: "A strong disclosure explains:", options: ["Which tool, what you used it for, what you did with the output, and what you verified", "Only that you used AI", "Your AI subscription cost", "Your prompts' word count"], a: 0, explain: "Be specific and complete." },
        { q: "An AI-generated slide contains a stereotype. What should you do?", options: ["Remove or revise it before submitting", "Keep it since AI made it", "Add a note blaming the AI", "Submit it and fix it later"], a: 0, explain: "You're responsible for correcting bias." },
        { q: "If a required AI tool costs money you don't have, you should:", options: ["Tell your instructor; the course must provide an equitable alternative", "Skip the assignment", "Use a classmate's account", "Take a zero"], a: 0, explain: "Equitable alternatives are required." }
      ]
    },

    /* ======================= MODULE 5 ======================= */
    {
      title: "Using AI to Learn, Not Replace Learning",
      summary: "Smart prompting, AI as a tutor, and how instructors see your thinking.",
      minutes: 20,
      objectives: [
        "Use AI as a tutor that strengthens your understanding",
        "Write prompts that support learning rather than outsource it",
        "Understand assignments like source audits, comparisons, portfolios and oral defenses",
        "Know how IWU handles suspected AI misuse fairly"
      ],
      lessons: [
        {
          title: "Think first, then prompt",
          blocks: [
            { type: "html", html: "<p>The Task Force recommends using AI <strong>after</strong> your initial thinking. When you think first, AI becomes a sparring partner that sharpens your ideas. When you prompt first, AI's ideas quietly become yours—and you lose the learning.</p>" },
            { type: "chat", title: "Prompting to learn (Level 3 assignment)", turns: [
              { who: "Student", t: "I'm studying for my macroeconomics exam. I think inflation happens when the money supply grows faster than output, but I'm confused about why interest rates matter. Don't give me the answer yet—ask me questions to help me figure it out." },
              { who: "AI", t: "Great starting point! Let's build on it. If borrowing money becomes more expensive, what do you think happens to how much businesses and families spend?" },
              { who: "Student", t: "They'd probably spend less, since loans cost more?" },
              { who: "AI", t: "Exactly. And if total spending falls while the amount of goods stays about the same, what might happen to prices?" }
            ], note: "Notice the student shared their own understanding first and asked AI to <strong>guide</strong>, not answer. This is AI as a tutor." },
            { type: "compare", title: "Prompts that outsource vs. prompts that teach", bad: { title: "Outsourcing", html: "<ul><li>\"Write my 500-word discussion post on servant leadership.\"</li><li>\"Solve problems 1–10.\"</li><li>\"Summarize chapter 4 so I don't have to read it.\"</li></ul>" }, good: { title: "Learning", html: "<ul><li>\"Here's my argument. What's the strongest counterargument I haven't addressed?\"</li><li>\"I got 42 on problem 3. Without solving it, give me a hint about where I might have gone wrong.\"</li><li>\"I read chapter 4. Quiz me with five questions and explain what I miss.\"</li></ul>" } },
            { type: "callout", tone: "warn", title: "Always check the level", html: "Even a \"learning\" prompt is off-limits at Level 1, and at Level 2 AI may not generate ideas or explanations for graded work. Level 3 and above allow tutoring-style use—with disclosure." }
          ]
        },
        {
          title: "Assignments that show your thinking",
          blocks: [
            { type: "html", html: "<p>Many IWU instructors are redesigning assignments so your reasoning is visible. Here's what to expect and how to succeed.</p>" },
            { type: "flip", title: "Assignment types", cards: [
              { front: "Source audit", back: "Verify every AI-suggested claim and citation, and submit a log of what you checked and corrected." },
              { front: "Human–AI comparison", back: "Write your own answer first, then compare it with an AI answer—critiquing reasoning, evidence, assumptions and omissions." },
              { front: "Process portfolio", back: "Submit your outline, drafts, AI disclosures and revisions to show how your work developed." },
              { front: "Oral defense", back: "Explain your claims, sources, methods and choices in conversation with your instructor." },
              { front: "AI as a tutor", back: "Practice with an approved AI tutor, then reflect on which advice helped and which you rejected." },
              { front: "Bias & culture audit", back: "Prompt for multiple stakeholder perspectives and compare the output with peer-reviewed research." }
            ] },
            { type: "callout", tone: "ok", title: "Tip: save your process", html: "Keep your outlines, drafts and AI conversations (for assignments where AI is allowed). They're your best evidence of authorship—and they make portfolios and oral defenses easy." }
          ]
        },
        {
          title: "Fair integrity process",
          blocks: [
            { type: "html", html: "<p>What happens if an instructor suspects AI was used in a way that wasn't allowed?</p>" },
            { type: "steps", items: [
              { title: "A concern is raised", html: "It might come from unverifiable citations, a mismatch with your other work, or a detector score." },
              { title: "A detector is never enough", html: "IWU policy says an AI-detection score may prompt a conversation, but can <strong>never</strong> be the sole evidence of misconduct." },
              { title: "A conversation", html: "Your instructor may ask you to explain your ideas, sources and process—bring your drafts and notes." },
              { title: "A human decision", html: "Your instructor reviews all evidence and follows IWU's established academic-integrity procedures." }
            ] },
            { type: "scenario", title: "Flagged by a detector", prompt: "You wrote your paper yourself, but your instructor says a detector flagged it. What's your best response?", options: [
              { t: "Panic and withdraw from the course.", ok: false, fb: "A detector score alone can't establish a violation. You'll have a chance to explain." },
              { t: "Calmly share your outline, drafts and notes, and explain your ideas and sources.", ok: true, fb: "Yes. Process evidence and your ability to explain your work are strong evidence of authorship." },
              { t: "Rewrite the paper using AI to make it sound less like AI.", ok: false, fb: "That would create a real violation where there wasn't one." }
            ] },
            { type: "reflect", prompt: "Write one 'learning' prompt you could use this week in a course where AI tutoring is allowed." }
          ]
        }
      ],
      quiz: [
        { q: "The Task Force recommends using AI:", options: ["After your initial thinking", "Before you read the assignment", "Instead of reading", "Only at night"], a: 0, explain: "Think first, then use AI to sharpen your work." },
        { q: "Which prompt best supports learning?", options: ["\"Here's my argument—what's the strongest counterargument I missed?\"", "\"Write my discussion post.\"", "\"Solve problems 1–10.\"", "\"Summarize the chapter so I don't have to read it.\""], a: 0, explain: "It keeps the thinking yours." },
        { q: "In a human–AI comparison assignment, you:", options: ["Write your own answer first, then critique an AI answer against it", "Submit the AI answer as your own", "Ask AI to compare two of its own answers only", "Skip the writing part"], a: 0, explain: "Your independent response comes first." },
        { q: "Can an AI-detection score alone prove misconduct at IWU?", options: ["No, it may only prompt further review", "Yes, if above 90%", "Yes, always", "Only in online courses"], a: 0, explain: "Detectors are unreliable; humans decide using all evidence." },
        { q: "Your best evidence of authorship is:", options: ["Your outlines, drafts, notes and ability to explain your work", "A screenshot of a detector score", "The length of your paper", "Your GPA"], a: 0, explain: "Process evidence shows how your work developed." }
      ]
    },

    /* ======================= MODULE 6 ======================= */
    {
      title: "The Pre-Submission Checklist",
      summary: "IWU's GOVERN → MAP → MEASURE → MANAGE checklist for any AI-assisted assignment.",
      minutes: 15,
      objectives: [
        "Apply the four-step checklist before submitting AI-assisted work",
        "Answer the six MEASURE questions honestly",
        "Take the right action for any question marked FIX",
        "Know when to ask your instructor"
      ],
      lessons: [
        {
          title: "The four steps",
          blocks: [
            { type: "html", html: "<p>IWU's student checklist is a simplified version of the university's VBM–NIST decision framework. Use it every time AI helped with an assignment.</p>" },
            { type: "steps", items: [
              { title: "GOVERN — Check the rules first", html: "Is GenAI allowed for this task? What use and disclosure are required? If unclear, ask your instructor <em>before</em> submitting." },
              { title: "MAP — What did AI help create?", html: "Mark every type of help: <strong>ideas, wording, images/code, sources</strong>. Keep track of what you contributed and what you must check." },
              { title: "MEASURE — Answer six questions", html: "Learning &amp; agency · Truth &amp; sources · Honest attribution · Dignity &amp; fairness · Privacy &amp; rights · Purposeful use." },
              { title: "MANAGE — Fix before you submit", html: "Verify or remove unsupported claims. Revise unfair or harmful content. Protect private data. Disclose AI help. Ask if unsure." }
            ] },
            { type: "callout", title: "The rule", html: "<strong>Submit only if the use is allowed and every answer is YES.</strong>" }
          ]
        },
        {
          title: "Practice the checklist",
          blocks: [
            { type: "html", html: "<p><strong>Scenario:</strong> Jordan has a Level 3 research paper on renewable energy. Jordan used AI to brainstorm subtopics and get feedback on an outline, then wrote the paper. Jordan hasn't checked two statistics that came from an AI brainstorm, and hasn't written the disclosure yet.</p><p>Complete the checklist as Jordan should answer it right now.</p>" },
            { type: "checklist", title: "Jordan's checklist", instructions: "Mark Yes or Fix for each question.", items: [
              { title: "Learning & agency", q: "Can I explain the ideas and show which reasoning is mine?", values: "Spiritual: creativity, responsibility · Economic: proficient use", color: "#6b4f9e", fix: "Rework any section you can't explain." },
              { title: "Truth & sources", q: "Did I check facts, quotations, citations and links against sources that really exist?", values: "Spiritual: conscience · Social: sincerity", color: "#1e5a8a", fix: "Jordan must verify the two statistics against real sources—or remove them." },
              { title: "Honest attribution", q: "Did I follow the assignment rules for disclosing GenAI use?", values: "Spiritual: conscience · Social: sincerity", color: "#1f7a4a", fix: "Jordan must add a Level 3 cover-page disclosure naming the tool and how it helped." },
              { title: "Dignity & fairness", q: "Did I correct bias, stereotypes, harmful wording or barriers to access?", values: "Spiritual: dignity, compassion · Social: support, service", color: "#6b4f9e", fix: "Revise unfair or harmful content." },
              { title: "Privacy & rights", q: "Did I protect private information and respect other people's work and rights?", values: "Spiritual: responsibility · Economic: principled use", color: "#9a6200", fix: "Remove private data; credit others' work properly." },
              { title: "Purposeful use", q: "Did GenAI support my learning enough to justify using it?", values: "Economic: stewardship · Environmental: resource care", color: "#3f7d3a", fix: "Reflect on whether AI served your learning." }
            ], okMsg: "<strong>Hmm—check again.</strong> Jordan still has unverified statistics and no disclosure. Those should be marked FIX.", fixMsg: "<strong>Before submitting, Jordan must:</strong>" },
            { type: "callout", tone: "info", title: "What should Jordan have marked?", html: "<strong>Truth &amp; sources</strong> and <strong>Honest attribution</strong> should be FIX: verify (or remove) the two statistics and add the required cover-page disclosure. Then—and only then—submit." }
          ]
        },
        {
          title: "Putting it all together",
          blocks: [
            { type: "cards", title: "Your AI habits at IWU", items: [
              { title: "Check the level", text: "Every assignment. No level = Level 2." },
              { title: "Think first", text: "Use AI to sharpen your thinking, not replace it." },
              { title: "Verify", text: "Every fact, quote, citation and link." },
              { title: "Protect", text: "No private or protected data in unapproved tools." },
              { title: "Disclose", text: "Honestly and specifically, as your level requires." },
              { title: "Own it", text: "You're 100% responsible for what you submit." }
            ] },
            { type: "reflect", prompt: "Which one habit will make the biggest difference in how you use AI this semester? Why?" },
            { type: "callout", tone: "ok", title: "Next: the final exam", html: "Finish this module's knowledge check to unlock the 20-question final exam. Score 80% or better to earn your IWU certificate. You can retake it as many times as you need." }
          ]
        }
      ],
      quiz: [
        { q: "What's the first step of the checklist (GOVERN)?", options: ["Check whether AI is allowed and what disclosure is required", "Run the paper through a detector", "Ask AI to grade it", "Submit early"], a: 0, explain: "Always start with the rules." },
        { q: "In the MAP step, you identify:", options: ["What AI helped create: ideas, wording, images/code, sources", "The AI company's address", "Your final grade", "Which classmates used AI"], a: 0, explain: "Track what AI contributed." },
        { q: "You haven't verified two statistics. For 'Truth & sources' you should mark:", options: ["FIX", "YES", "Skip it", "YES, if they look right"], a: 0, explain: "Unverified claims must be fixed before submitting." },
        { q: "When should you submit AI-assisted work?", options: ["Only when the use is allowed and every answer is YES", "When at least half the answers are YES", "Whenever the deadline arrives", "When the AI says it's ready"], a: 0, explain: "All six must be resolved." },
        { q: "The 'Purposeful use' question asks:", options: ["Did GenAI support my learning enough to justify using it?", "Did I use the newest AI tool?", "Did I use AI as much as possible?", "Did I finish quickly?"], a: 0, explain: "It connects to stewardship of learning and resources." }
      ]
    }
  ],

  /* ======================= FINAL EXAM BANK (20 drawn per attempt) ======================= */
  exam: [
    { topic: "Module 1 · What GenAI is", q: "Generative AI is best described as AI that:", options: ["Creates new text, images, audio or code by analyzing patterns in data", "Only corrects spelling", "Searches a library catalog", "Stores your files"], a: 0 },
    { topic: "Module 1 · What GenAI is", q: "Why can a chatbot state something false with confidence?", options: ["It predicts probable text and does not verify truth", "It is designed to deceive students", "It only uses outdated textbooks", "It is controlled by your instructor"], a: 0 },
    { topic: "Module 1 · What GenAI is", q: "If AI-generated content in your paper contains an error, who is responsible?", options: ["You", "The AI company", "The AI tool", "Nobody"], a: 0 },
    { topic: "Module 1 · What GenAI is", q: "Which use of AI most supports your learning?", options: ["Asking it to explain a concept differently after you've read about it", "Asking it to write your reflection paper", "Letting it answer quiz questions", "Having it post in discussions for you"], a: 0 },
    { topic: "Module 1 · What GenAI is", q: "Can AI be listed as an author of your work?", options: ["No, because it cannot take responsibility", "Yes, at Level 5", "Yes, if it wrote most of it", "Only in group projects"], a: 0 },
    { topic: "Module 2 · Use levels", q: "An assignment doesn't mention AI. What is allowed?", options: ["Level 2: spelling and grammar help only", "Anything, since it wasn't prohibited", "Nothing, not even spell-check", "AI-written drafts you edit"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 1 — Independent Work, you may:", options: ["Use only the non-AI tools your instructor permits, like a calculator", "Use AI for brainstorming", "Use AI to check your reasoning", "Use AI to rewrite paragraphs"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 3 — Learning Support, which is NOT allowed?", options: ["Including AI-generated sentences in your final paper", "Brainstorming with AI", "Asking AI to explain a concept", "Getting AI feedback on an early draft"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 4, AI-generated material in your submission must be:", options: ["Verified, identified, substantially revised and disclosed", "Left exactly as generated", "Hidden in an appendix", "Reduced to under 10 words"], a: 0 },
    { topic: "Module 2 · Use levels", q: "At Level 5, what is the focus of the assignment?", options: ["Using and critically evaluating AI output", "Avoiding AI completely", "Grammar only", "Speed of completion"], a: 0 },
    { topic: "Module 2 · Use levels", q: "AI levels are set:", options: ["Per assignment by your instructor", "Once for your whole degree", "By you, based on preference", "By the AI tool"], a: 0 },
    { topic: "Module 2 · Use levels", q: "Which is never allowed at any level?", options: ["Presenting AI-generated work as your own", "Asking your instructor about the rules", "Using spell-check at Level 2", "Verifying a citation"], a: 0 },
    { topic: "Module 3 · Verification", q: "AI gives you a citation you can't find in any database. You should:", options: ["Not use it; find a real source you can read", "Use it because it sounds credible", "Ask the AI to confirm it's real", "Change the author's name slightly"], a: 0 },
    { topic: "Module 3 · Verification", q: "Which is the strongest way to verify a quotation from AI?", options: ["Find the original source and confirm the exact wording", "Check that it has quotation marks", "Ask a friend if it sounds right", "Search for the AI's name"], a: 0 },
    { topic: "Module 3 · Verification", q: "A 'verification log' records:", options: ["Each claim or citation, what you checked it against, the result and your action", "Your AI subscription payments", "How long you studied", "Your instructor's feedback"], a: 0 },
    { topic: "Module 3 · Verification", q: "Which is a warning sign of a fabricated claim?", options: ["An overly precise statistic with no identifiable source", "A widely known definition", "A claim you confirmed in your textbook", "A citation you located in the library"], a: 0 },
    { topic: "Module 3 · Verification", q: "AI can produce biased content because:", options: ["It recognizes patterns in data without understanding them", "It has personal opinions", "Instructors program it", "It only reads one book"], a: 0 },
    { topic: "Module 4 · Privacy & disclosure", q: "Which can you safely enter into a public AI tool?", options: ["A general question about a course concept", "A classmate's unpublished draft", "Patient information from your clinical placement", "Your internship employer's confidential data"], a: 0 },
    { topic: "Module 4 · Privacy & disclosure", q: "At Level 3, your AI disclosure should appear:", options: ["On your cover page", "Nowhere", "Only if asked", "In your email signature"], a: 0 },
    { topic: "Module 4 · Privacy & disclosure", q: "Which is the best disclosure statement?", options: ["\"I used [tool] to brainstorm topics and get outline feedback; no AI text or citations appear in the paper.\"", "\"I used AI.\"", "\"AI helped a little.\"", "\"No comment.\""], a: 0 },
    { topic: "Module 4 · Privacy & disclosure", q: "A required AI tool costs money you can't afford. IWU policy says:", options: ["The course must provide an equitable alternative", "You must buy it", "You fail the assignment", "Use someone else's login"], a: 0 },
    { topic: "Module 4 · Privacy & disclosure", q: "Your AI-drafted slide includes a stereotype. What's the right action?", options: ["Revise or remove it before submitting", "Keep it because AI made it", "Add a disclaimer and submit", "Ask AI if it's offensive"], a: 0 },
    { topic: "Module 5 · Learning with AI", q: "When should you use AI on an assignment where it's allowed?", options: ["After your own initial thinking", "Before reading the instructions", "Instead of doing the reading", "Only after submitting"], a: 0 },
    { topic: "Module 5 · Learning with AI", q: "Which prompt uses AI as a tutor?", options: ["\"I think the answer is X—ask me questions to help me check my reasoning.\"", "\"Give me the answers to problems 1–10.\"", "\"Write my essay.\"", "\"Summarize the book so I don't have to read it.\""], a: 0 },
    { topic: "Module 5 · Learning with AI", q: "An AI detector flags work you wrote yourself. What does IWU policy say?", options: ["A detector score can never be the sole evidence of misconduct", "The score is final", "You automatically fail", "You must rewrite the paper with AI"], a: 0 },
    { topic: "Module 5 · Learning with AI", q: "What is a process portfolio?", options: ["Your outline, drafts, AI disclosures and revisions showing how your work developed", "A folder of AI-generated essays", "Your transcript", "A list of AI tools"], a: 0 },
    { topic: "Module 5 · Learning with AI", q: "In an oral defense, you:", options: ["Explain your claims, sources, methods and decisions", "Read the AI's answer aloud", "Present someone else's work", "Only answer yes or no"], a: 0 },
    { topic: "Module 6 · Checklist", q: "What is the GOVERN step of the student checklist?", options: ["Check whether AI is allowed and what disclosure is required", "Fix errors", "List what AI helped create", "Answer six questions"], a: 0 },
    { topic: "Module 6 · Checklist", q: "In the MAP step, you identify:", options: ["What AI helped create—ideas, wording, images/code, sources", "Where to submit", "Your grade", "Your classmates' AI use"], a: 0 },
    { topic: "Module 6 · Checklist", q: "If any checklist question is marked FIX, you should:", options: ["Take action before submitting, or ask your instructor", "Submit anyway", "Delete the checklist", "Ask AI to mark it YES"], a: 0 },
    { topic: "Module 6 · Checklist", q: "Which checklist question asks whether you can explain the ideas and show which reasoning is yours?", options: ["Learning & agency", "Privacy & rights", "Purposeful use", "Honest attribution"], a: 0 }
  ]
};
