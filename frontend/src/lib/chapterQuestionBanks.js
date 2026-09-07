// Registry of chapter-wise question sets keyed by `${subjectId}:${chOrLabel}:${mark}`.
// `mark` is the pattern TYPE (e.g. "5m", "3m", "2m", "numeric") so BOTH the
// chapter-wise flow and the pattern flow resolve to the SAME content.
// Each value has the SAME shape as RF_5M_PAGES:
//   pages -> [ year-group, ... ]  where a year-group is
//   { year, label, tint, questions: [ { tag, qno, marks, text } ] }
import { RF_5M_PAGES } from "@/lib/rfQuestions";

export const CHAPTER_QUESTION_BANKS = {
  // Relations and Functions · 5 Mark — shared by both flows (label + chapter-no keys)
  "math:Relations and Functions:5m": RF_5M_PAGES,
  "math:1:5m": RF_5M_PAGES,
};

export function getChapterBank(subjectId, ch, mark) {
  return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`] || null;
}

// Resolve a bank by chapter number OR chapter label (whichever is provided).
export function resolveChapterBank({ subjectId, ch, label, mark }) {
  if (ch != null && CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`];
  if (label && CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`];
  return null;
}
