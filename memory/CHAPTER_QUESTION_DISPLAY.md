# Chapter Question Display — Standard Convention

Whenever a NEW chapter's questions are uploaded, they must be shown EXACTLY in the
same style as the "Relations and Functions · 5 Marks · Part D" page.

## Reference files (the template to copy)
- Display page:  `frontend/src/pages/RelationsFunctions5M.jsx`
- Question data: `frontend/src/lib/rfQuestions.js`  (exports `RF_5M_PAGES`)
- Route:         `frontend/src/App.js` → `/subject/:subjectId/chapters/:ch/<slug>`
- Entry point:   `frontend/src/pages/ChapterDetail.jsx` (navigates to the page)
- Chapter list:  `frontend/src/lib/examChapters.js` (`EXAM_CHAPTERS`)

## Data schema (per chapter file)
```js
export const <CHAPTER>_PAGES = [
  // one array per swipe/page
  [
    {
      year: "2027",              // banner year
      label: "Model Paper",      // banner label ("Exam" or "Model Paper")
      tint: "teal",              // teal | sky | blue | indigo | violet
      questions: [
        { tag: "Model 1", qno: "Q39", marks: 5, text: "...question text..." },
        // ...more questions
      ],
    },
    // ...more year-groups on the same page
  ],
  // ...more pages
];
```

## Mandatory visual rules (already implemented — keep identical)
1. Gradient page background (teal → blue → violet). Header uses subject color.
2. Yellow year banner (`bg-[#F2C230]`, italic serif) for each year-group.
3. Cards wrapped so there is a WHITE strip on the left/right sides of the group.
4. Divider between questions is a bit darker (`bg-slate-300`, `space-y-px`).
5. Wide layout: `max-w-3xl`; question rows use small side padding (`px-2 py-3`).
6. Each question shows THREE pill tags in the header row, same pill style:
   - the item tag (Model 1 / Exam 1 / ...) — slate
   - `Easy` — emerald  (difficulty)
   - `Concept` — violet
7. Inline edit pencil on every question (saved to localStorage).
8. Bottom pagination bar (Previous / n/total dots / Next).
9. Shiny animated "Similarity" button (twinkling star) in the header `rightSlot`.

## Ready-to-paste prompt for future uploads
> "Add a new chapter '<CHAPTER NAME>' for <subject> <class>. Here are the questions
> grouped by year (year, Model Paper/Exam label, and each question's tag, Qno, marks
> and text). Display them EXACTLY like the Relations and Functions 5-Mark page —
> same yellow year banners, white side strips, darker dividers, wide layout, the
> Model/Exam + Easy + Concept pill tags on every question, inline edit pencil,
> pagination, and the shiny Similarity star button in the header. Follow
> memory/CHAPTER_QUESTION_DISPLAY.md."
