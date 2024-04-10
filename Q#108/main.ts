// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.

let givenword:string = "maadeha";
const isIdentical = (word:string) =>{
  let tolowerCase = word.toLowerCase();
  if(givenword === tolowerCase){
    return(`${givenword} and ${word} Both are same words `)
  }
  else{
    return(`${givenword} and ${word} Both aren't same words`)
  }
}
console.log(isIdentical("Maria"));
