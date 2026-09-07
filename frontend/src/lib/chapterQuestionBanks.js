// Registry of chapter-wise question sets keyed by `${subjectId}:${ch}:${mark}`.
// Each value has the SAME shape as RF_5M_PAGES:
//   pages -> [ year-group, ... ]  where a year-group is
//   { year, label, tint, questions: [ { tag, qno, marks, text } ] }
//
// To publish a new chapter/mark-type, add an entry here (or import from a
// dedicated file) and it will automatically render via ChapterQuestions.jsx.
// Note: math chapter "Relations and Functions" 5M has its own dedicated page.

export const CHAPTER_QUESTION_BANKS = {
  // "math:1:3": someArrayOfPages,
  // "physics:1:2": someArrayOfPages,
};

export function getChapterBank(subjectId, ch, mark) {
  return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`] || null;
}
