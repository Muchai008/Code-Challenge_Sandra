function getStudentGrade() {
    let marks = prompt("Enter student marks (0-100):");
    //convert input to a number
    marks = Number(marks);
    //check if input is a valid number 
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return;
    }
    //Determining the grade
    let grade;
    if (marks > 79) {
        grade = "A";
    }else if (marks >= 60) {
        grade = "B";    
    }else if (marks >= 49) {
        grade = "C";
    }else if (marks >= 40) {
        grade = "D";
    }else {
        grade = "E";
    }
    alert("The student's grade is: " + grade);
    getStudentGrade();
}