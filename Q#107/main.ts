// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.

const isDivisible = (numb:number) =>{
  if(numb % 3 ==0 && numb%2 ==0){
    return(`${numb} is divisible by both 2 and 3`);
  }
  else{
    return(`${numb} isn't  divisible by both 2 and 3`);
  }
}
console.log(isDivisible(23));
console.log(isDivisible(6));