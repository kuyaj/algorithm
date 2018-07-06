function getGrades(grades) {
  grades.forEach(grade => console.log(grade > 38 || (grade % 5) < 3 ? grade + (5 -(grade % 5)) : grade))
}
let grades = [70, 67, 63, 33, 38]
console.log(getGrades(grades))

