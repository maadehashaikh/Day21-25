// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
var checkGrade = function (numb) {
    if (numb >= 90) {
        console.log("A Grade");
    }
    else if (numb >= 80) {
        console.log("B Grade");
    }
    else if (numb >= 70) {
        console.log("C Grade");
    }
    else if (numb >= 60) {
        console.log("D Grade");
    }
    else {
        return ("F Grade");
    }
};
console.log(checkGrade(76));
