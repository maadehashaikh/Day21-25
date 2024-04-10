// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
const checkGrade = (numb:number) => {
 if(numb>=90){
  return("A Grade");
 }
 else if(numb >= 80){
  return("B Grade");
 }
 else if(numb >= 70){
  return("C Grade");
 }
 else if(numb>=60){
  return("D Grade");
 }
 else{
  return ("F Grade")
 }
}
console.log(checkGrade(76));