let gradearr = [85, 78, 65, 92, 95];
let gradeCount = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
};
for (let score of gradearr) {
  if (score >= 90) {
    gradeCount.A++;
  } else if (score >= 80) {
    gradeCount.B++;
  } else if (score >= 70) {
    gradeCount.C++;
  } else if (score >= 60) {
    gradeCount.D++;
  } else {
    gradeCount.F++;
  }
}
console.log(gradeCount);
