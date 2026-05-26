function checkGrade(marks) {
  if (marks >= 90) {
    return "Grade A";
  } else if (marks >= 70) {
    return "Grade B";
  } else if (marks >= 50) {
    return "Grade C";
  } else if (marks >= 35) {
    return "Grade D";
  } else {
    return "Fail";
  }
}

console.log(checkGrade(49));

