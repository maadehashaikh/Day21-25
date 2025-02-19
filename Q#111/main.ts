//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

const checkAgeGroup  = (numb:number) =>{
 if(numb<=12){
  return(`Child`);
 }
 else if(numb>=13 && numb<= 19){
   return ('Teenager')
 }
 else{
  return('Adult');
 }
}
console.log(checkAgeGroup(34));
console.log(checkAgeGroup(12));
console.log(checkAgeGroup(17));