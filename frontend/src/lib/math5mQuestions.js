// Mathematics — 5 Mark (Part D) board questions grouped by year, per chapter.
// Same shape as RF_5M_PAGES: pages -> [ year-group ] -> { year, label, tint, questions }.
// LaTeX from the source PDF has been cleaned into readable plain-text math.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- 40. Matrices (Q40) ----------------
const MATRICES = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1 · Ops", qno: "Q40", marks: 5, text: "Calculate AC, BC and (A + B)C. Also verify that (A + B)C = AC + BC.\n(Note: matrix values were missing in the original OCR.)" },
      { tag: "Model 1 · System", qno: "Q40", marks: 5, text: "Solve the system of linear equations by matrix method:\n4x + 3y + 2z = 60;  2x + 4y + 6z = 90;  6x + 2y + 3z = 70." },
      { tag: "Model 2 · Ops", qno: "Q40", marks: 5, text: "Compute (A + B) and (B − C). Also verify that A + (B − C) = (A + B) − C.\n(Note: matrix values were missing in the original OCR.)" },
      { tag: "Model 2 · System", qno: "Q40", marks: 5, text: "Solve the system of equations x + y + z = 6;  y + 3z = 11;  x − 2y + z = 0 by matrix method." },
      { tag: "Model 3 · Ops", qno: "Q40", marks: 5, text: "For the matrices A = [−2; 4; 5], B = [1  3  −6], verify that (AB)' = B'A'." },
      { tag: "Model 3 · System", qno: "Q40", marks: 5, text: "Solve the system of linear equations by matrix method:\n2x + 3y + 3z = 5;  x − 2y + z = −4;  3x − y − 2z = 3." },
      { tag: "Model 4 · Ops", qno: "Q40", marks: 5, text: "If A = [[1, 2, 3], [3, −2, 1], [4, 2, 1]], then show that A³ − 23A − 40I = O." },
      { tag: "Model 4 · System", qno: "Q40", marks: 5, text: "Use the product [[1, −1, 2], [0, 2, −3], [3, −2, 4]] · [[−2, 0, 1], [9, 2, −3], [6, 1, −2]] to solve the system of equations:\nx − y + 2z = 1;  2y − 3z = 1;  3x − 2y + 4z = 9." },
      { tag: "Model 5 · Ops", qno: "Q40", marks: 5, text: "If A = [[3, √3, 2], [4, 2, 0]] and B = [[2, −1, 2], [1, 2, 4]], then verify (A + B)' = A' + B'." },
      { tag: "Model 5 · System", qno: "Q40", marks: 5, text: "Solve the system of linear equations by matrix method:\n3x − 2y + 3z = 8;  2x + y − z = 1;  4x − 3y + 2z = 4." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1 · Ops", qno: "Q40", marks: 5, text: "If A = [1; −4; 3] and B = [−1  2  1], verify that (AB)' = B'A'." },
      { tag: "Exam 1 · System", qno: "Q40", marks: 5, text: "Solve the following system of equations using matrix method:\n3x − 2y + 3z = 8;  2x + y − z = 1;  4x − 3y + 2z = 4." },
      { tag: "Exam 2 · Ops", qno: "Q40", marks: 5, text: "If A = [−2; 4; 5] and B = [1  3  −6], verify that (AB)' = B'A'." },
      { tag: "Exam 2 · System", qno: "Q40", marks: 5, text: "Solve the system of equations by matrix method:\nx − y + 2z = 7;  3x + 4y − 5z = −5;  2x − y + 3z = 12." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1 · Ops", qno: "Q40", marks: 5, text: "If A = [1; −4; 3] and B = [−1  2  1], verify that (AB)' = B'A'." },
      { tag: "Exam 1 · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations by matrix method:\n4x + 3y + 2z = 60;  2x + 4y + 6z = 90;  6x + 2y + 3z = 70." },
      { tag: "Exam 2 · Ops", qno: "Q40", marks: 5, text: "If A = [[0, 6, 7], [−6, 0, 8], [7, −8, 0]], B = [[0, 1, 1], [1, 0, 2], [1, 2, 0]] and C = [2; −2; 3], then calculate AC, BC and (A + B)C. Also verify that (A + B)C = AC + BC." },
      { tag: "Exam 2 · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations using matrix method:\n4x + 3y + 2z = 60;  2x + 4y + 6z = 90;  6x + 2y + 3z = 70." },
      { tag: "Exam 3 · Ops", qno: "Q40", marks: 5, text: "If A = [[0, 6, 7], [−6, 0, 8], [7, −8, 0]], B = [[0, 1, 1], [1, 0, 2], [1, 2, 0]] and C = [2; −2; 3], calculate AC, BC and (A + B)C. Also verify (A + B)C = AC + BC." },
      { tag: "Exam 3 · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations using matrix method:\nx − y + 2z = 7;  3x + 4y − 5z = −5;  2x − y + 3z = 12." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1 · Ops", qno: "Q40", marks: 5, text: "If A = [[1, 2, −3], [5, 0, 2], [1, −1, 1]], B = [[3, −1, 2], [4, 2, 5], [2, 0, 3]], C = [[4, 1, 2], [0, 3, 2], [1, −2, 3]], then compute (A + B) and (B − C). Also verify that A + (B − C) = (A + B) − C." },
      { tag: "Exam 1 · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations by matrix method:\nx + y + z = 6;  y + 3z = 11;  x − 2y + z = 0." },
      { tag: "Exam 2 · Ops", qno: "Q40", marks: 5, text: "If A = [[1, 2, −3], [5, 0, 2], [1, −1, 1]], B = [[3, −1, 2], [4, 2, 5], [2, 0, 3]] and C = [[4, 1, 2], [0, 3, 2], [1, −2, 3]], then compute (A + B) and (B − C). Also verify that A + (B − C) = (A + B) − C." },
      { tag: "Exam 2 · System", qno: "Q40", marks: 5, text: "Solve the system of linear equations by matrix method:\n3x − 2y + 3z = 8;  2x + y − z = 1;  4x − 3y + 2z = 4." },
      { tag: "Exam 3 · Ops", qno: "Q40", marks: 5, text: "If A = [[4, −√3, 2], [4, 2, 0]] and B = [[2, −1, 2], [1, 2, 4]], verify that (A + B)' = A' + B'." },
      { tag: "Exam 3 · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations using matrix method:\nx + y + z = 6;  y + 3z = 11;  x − 2y + z = 0." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam · Ops", qno: "Q40", marks: 5, text: "If A = [[0, 6, 7], [−6, 0, 8], [7, −8, 0]], B = [[0, 1, 1], [1, 0, 2], [1, 2, 0]], C = [2; −2; 3]. Calculate AC, BC and (A + B)C. Verify that (A + B)C = AC + BC." },
      { tag: "Main Exam · System", qno: "Q40", marks: 5, text: "Solve the following system of linear equations by matrix method:\n3x − 2y + 3z = 8;  2x + y − z = 1;  4x − 3y + 2z = 4." },
      { tag: "Supplement · Ops", qno: "Q40", marks: 5, text: "If A = [[1, 2, −3], [5, 0, 2], [1, −1, 1]], B = [[3, −1, 2], [4, 2, 5], [2, 0, 3]] and C = [[4, 1, 2], [0, 3, 2], [1, −2, 3]], compute (A + B) and (B − C). Verify that A + (B − C) = (A + B) − C." },
      { tag: "Supplement · System", qno: "Q40", marks: 5, text: "Solve the system of linear equations using matrix method:\n2x + 3y + 3z = 5;  x − 2y + z = −4;  3x − y − 2z = 3." },
    ]),
  ],
];

// ---------------- 42. Continuity & Differentiability (Q42) ----------------
const CONTINUITY = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q42", marks: 5, text: "If y = 3e^(2x) + 2e^(3x), then prove that d²y/dx² − 5·dy/dx + 6y = 0." },
      { tag: "Model 2", qno: "Q42", marks: 5, text: "If y = sin⁻¹x, then prove that (1 − x²)·d²y/dx² − x·dy/dx = 0." },
      { tag: "Model 3", qno: "Q42", marks: 5, text: "If y = (tan⁻¹x)², show that (1 + x²)²·y₂ + 2x(1 + x²)·y₁ = 2." },
      { tag: "Model 4", qno: "Q42", marks: 5, text: "If y = 3cos(log x) + 4sin(log x), prove that x²·y₂ + x·y₁ + y = 0." },
      { tag: "Model 5", qno: "Q42", marks: 5, text: "If y = Ae^(mx) + Be^(nx), prove that d²y/dx² − (m + n)·dy/dx + (mn)·y = 0." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If y = Ae^(mx) + Be^(nx), show that d²y/dx² − (m + n)·dy/dx + mny = 0." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If y = 3cos(log x) + 4sin(log x), show that x²·y₂ + x·y₁ + y = 0." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If y = (tan⁻¹x)², then show that (x² + 1)²·y₂ + 2x(x² + 1)·y₁ = 2." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If y = (tan⁻¹x)², then show that (x² + 1)²·d²y/dx² + 2x(x² + 1)·dy/dx = 2." },
      { tag: "Exam 3", qno: "Q42", marks: 5, text: "If x = a(cosθ + θsinθ) and y = a(sinθ − θcosθ), then show that d²y/dx² = (1/(aθ))·sec³θ." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If y = Ae^(mx) + Be^(nx), show that d²y/dx² − (m + n)·dy/dx + mny = 0." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If y = Ae^(mx) + Be^(nx), show that d²y/dx² − (m + n)·dy/dx + mny = 0." },
      { tag: "Exam 3", qno: "Q42", marks: 5, text: "If y = 3cos(log x) + 4sin(log x), show that x²·y₂ + x·y₁ + y = 0." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q42", marks: 5, text: "If y = (tan⁻¹x)², then prove that (x² + 1)²·y₂ + 2x(x² + 1)·y₁ = 2." },
      { tag: "Supplement", qno: "Q42", marks: 5, text: "If y = (tan⁻¹x)², then prove that (x² + 1)²·y₂ + 2x(x² + 1)·y₁ = 2." },
    ]),
  ],
];

// ---------------- 43. Integrals (Q43) ----------------
const INTEGRALS = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q43", marks: 5, text: "Find the integral of 1/√(a² − x²) with respect to x and hence evaluate ∫ dx/√(25 − x²)." },
      { tag: "Model 2", qno: "Q43", marks: 5, text: "Find the integral of 1/(x² − a²) with respect to x and evaluate ∫ dx/(x² − 16)." },
      { tag: "Model 3", qno: "Q43", marks: 5, text: "Integrate 1/(x² + a²) with respect to x and hence find ∫ dx/(x² + 2x + 10)." },
      { tag: "Model 4", qno: "Q43", marks: 5, text: "Find the integral of 1/√(x² + a²) w.r.t x and hence evaluate ∫ 1/√(x² + 2x + 4) dx." },
      { tag: "Model 5", qno: "Q43", marks: 5, text: "Find the integral of 1/√(x² + a²) with respect to x and hence evaluate ∫ dx/√(1 + 4x²)." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of 1/(a² − x²) with respect to x and hence find ∫ 1/(25 − x²) dx." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of 1/√(a² − x²) with respect to x and hence find ∫ 1/√(9 − 25x²) dx." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of 1/(x² + a²) with respect to x and hence find ∫ 1/(x² − 6x + 13) dx." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of 1/(x² − a²) with respect to x and hence evaluate ∫ 1/(4x² − 9) dx." },
      { tag: "Exam 3", qno: "Q43", marks: 5, text: "Find the integral of 1/(a² − x²) with respect to x and hence evaluate ∫ 1/(3 − x² − 2x) dx." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of 1/(x² + a²) with respect to x and hence find ∫ 1/(x² + 2x + 2) dx." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of 1/√(x² + a²) with respect to x and hence evaluate ∫ 1/√((2 − x)² + 1) dx." },
      { tag: "Exam 3", qno: "Q43", marks: 5, text: "Find the integral of 1/(a² − x²) with respect to x and hence evaluate ∫ dx/(5 − x²)." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q43", marks: 5, text: "Find the integral of 1/√(x² + a²) with respect to x and hence evaluate ∫ 1/√(x² + 2x + 2) dx." },
      { tag: "Supplement", qno: "Q43", marks: 5, text: "Find the integral of 1/(x² + a²) with respect to x and hence evaluate ∫ 1/(3 + 2x + x²) dx." },
    ]),
  ],
];

// ---------------- 44. Application of Integrals (Q44) ----------------
const APP_INTEGRALS = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q44", marks: 5, text: "Find the area of the ellipse x²/a² + y²/b² = 1 by the method of integration." },
      { tag: "Model 2", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the circle x² + y² = a²." },
      { tag: "Model 3", qno: "Q44", marks: 5, text: "Find the area bounded by the curve y = sin x between x = 0 and x = 2π." },
      { tag: "Model 4", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the ellipse x²/4 + y²/9 = 1." },
      { tag: "Model 5", qno: "Q44", marks: 5, text: "Using the method of integration, find the area lying in the first quadrant and bounded by the circle x² + y² = 4 and the lines x = 0 and x = 2." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area of circle x² + y² = a² by method of integration." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the circle x² + y² = a²." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area bounded by the curve y = sin x between x = 0 and x = 2π." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Find the area of the region bounded by the line y = 3x + 2, the X-axis and the ordinates x = −1 and x = 1 by the method of integration." },
      { tag: "Exam 3", qno: "Q44", marks: 5, text: "Find the area bounded by the curve y = cos x between x = 0 and x = 2π." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area enclosed by the ellipse x²/a² + y²/b² = 1 by the method of integration." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Find the area enclosed by the ellipse x²/a² + y²/b² = 1 using integration." },
      { tag: "Exam 3", qno: "Q44", marks: 5, text: "Find the area enclosed by the circle x² + y² = a² using integration." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q44", marks: 5, text: "Find the area enclosed by the circle x² + y² = a² by the method of integration." },
      { tag: "Supplement", qno: "Q44", marks: 5, text: "Find the area of the circle x² + y² = a² by integration." },
    ]),
  ],
];

// ---------------- 45. Differential Equations (Q45) ----------------
const DIFF_EQ = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation dy/dx + 2y = sin x." },
      { tag: "Model 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation dy/dx + y·cot x = 4x·cosec x (x ≠ 0)." },
      { tag: "Model 3", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²·log x." },
      { tag: "Model 4", qno: "Q45", marks: 5, text: "Find the general solution of cos²x·dy/dx + y = tan x  (0 ≤ x ≤ π/2)." },
      { tag: "Model 5", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation dy/dx + y/x = x²." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²  (x ≠ 0)." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx − y = 2x²." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Solve the differential equation cos²x·dy/dx + y = tan x  (0 ≤ x < π/2)." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²·log x." },
      { tag: "Exam 3", qno: "Q45", marks: 5, text: "Find the equation of a curve passing through the point (0, 0) and whose differential equation is dy/dx = e^x·sin x." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Find the particular solution of the differential equation (1 + x²)·dy/dx + 2xy = 1/(1 + x²);  y = 0 when x = 1." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²  (x ≠ 0)." },
      { tag: "Exam 3", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation dy/dx + y/x = x²." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²·log x  (x ≠ 0)." },
      { tag: "Supplement", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation x·dy/dx + 2y = x²·log x  (x ≠ 0)." },
    ]),
  ],
];

export const MATH_5M = {
  "Matrices": MATRICES,
  "Continuity and Differentiability": CONTINUITY,
  "Continuity & Differentiability": CONTINUITY,
  "Integrals": INTEGRALS,
  "Application of Integrals": APP_INTEGRALS,
  "Differential Equations": DIFF_EQ,
};
