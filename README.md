# IWU – Artificial Intelligence Training

Branded generative-AI training for **Indiana Wesleyan University**, built from the proposal by DBA Cohort 15, PBL Team Six
*Generative AI in Coursework* (Executive Report & Presentation, DeVoe School of Business, September 2026).

## Tracks

| Page | Audience | Course |
|---|---|---|
| `index.html` | Everyone | Landing page – choose **Faculty & Staff** or **Student** |
| `faculty.html` | Faculty & Staff | *Leading Responsible Artificial Intelligence at IWU* – 6 modules, 21 lessons |
| `student.html` | Students | *Learning With Artificial Intelligence, Leading With Integrity* – 6 modules, 18 lessons |

Each track includes:

- **Teaching content** – the five assignment use levels (Level 2 default), requirements at every level, faculty guidelines,
  assessment strategies, the VBM–NIST (GOVERN / MAP / MEASURE / MANAGE) decision framework, the student pre-submission checklist
  and the implementation roadmap.
- **Interactive lessons** – flip cards, scenarios with feedback, level/category sorting, "spot the problem" exercises,
  matching, the interactive checklist, and private reflection notes.
- **Examples** – assignment statements, disclosure statements, verification logs, prompts, and before/after redesigns.
- **Knowledge check** (5 questions, instant feedback) at the end of every module.
- **Final exam** – 20 questions drawn at random from a 30+ question bank, unlocked after all modules are complete.
  **80% (16/20) to pass, unlimited retakes**; missed topics are listed without revealing answers.
- **Branded certificate** – issued on passing, with the learner's name, score, date and certificate ID.
  Print / Save as PDF (landscape letter) or download a PNG.

## Running

It is a static site with no build step and no dependencies:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

**Live site:** https://eremedic.github.io/Indiana-Weselyan-University-Faculty-and-Student-AI-training/ —
deployed by `.github/workflows/pages.yml` on every push (Settings → Pages → Source must be **GitHub Actions**).

It can also be hosted an LMS (as a web package/link) or any web server.
Progress is saved in the browser's `localStorage` (per track); there is no server or account.

## Structure

```
assets/css/styles.css          IWU brand styles (crimson #A6192E, gray #626466)
assets/js/app.js               course engine: navigation, activities, quizzes, exam, certificate
assets/js/content-faculty.js   Faculty & Staff content + exam bank
assets/js/content-student.js   Student content + exam bank
assets/img/                    IWU wordmark, seal and Wildcats marks
```

To edit content, change the `content-*.js` files. Each lesson is a list of blocks
(`html`, `callout`, `table`, `cards`, `steps`, `accordion`, `compare`, `example`, `chat`,
`flip`, `scenario`, `classify`, `spot`, `match`, `checklist`, `reflect`).
The pass mark and exam length are `PASS_PCT` and `EXAM_LEN` at the top of `app.js`.

> Content reflects a task-force *proposal*. Learners are told to follow the level and rules their instructor sets and the
> university's adopted policies.

## Credits

Developed by **DBA Cohort 15, PBL Team Six** — Doctor of Business Administration, DeVoe School of Business, Indiana Wesleyan University:
Chad Scott, Greg Mason, Shannel Mason and Denice Viktoria Staaf.
