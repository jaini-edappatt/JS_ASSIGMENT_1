function myFunction(){
    let studentsMarks1 =parseInt( prompt("English", "Eg:100"));
    let studentsMarks2 =parseInt( prompt("Malayalam", "Eg:100"));
    let studentsMarks3= parseInt( prompt("Hindi", "Eg:100"));
    let studentsMarks4= parseInt( prompt("Maths", "Eg:100"));
    let studentsMarks5= parseInt( prompt("Science", "Eg:100"));
    let studentsMarks6= parseInt( prompt("History", "Eg:100"));

let totalMarks = studentsMarks1 + studentsMarks2 + studentsMarks3 + studentsMarks4 + studentsMarks5 + studentsMarks6;


let averageMarks = totalMarks / 6;


let grade;

if (averageMarks >= 90) {
  grade = "A";
} else if (averageMarks >= 80) {
  grade = "B";
} else if (averageMarks >= 70) {
  grade = "C";
} else if (averageMarks >= 60) {
  grade = "D";
} else {
  grade = "F";
}


document.getElementById("totalmarks").innerHTML = totalMarks;
document.getElementById("avaragemarks").innerHTML = averageMarks.toFixed(2);
document.getElementById("grades").innerHTML = grade;

}