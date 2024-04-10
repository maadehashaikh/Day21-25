// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
var givenword = "maadeha";
var isIdentical = function (word) {
    var tolowerCase = word.toLowerCase();
    if (givenword === tolowerCase) {
        return ("".concat(givenword, " and ").concat(word, " Both are same words "));
    }
    else {
        return ("".concat(givenword, " and ").concat(word, " Both aren't same words"));
    }
};
console.log(isIdentical("Maria"));
