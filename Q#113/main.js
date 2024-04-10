// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
var countryCapitalMap = new Map();
// countryCapitalMap.set("Canada","Ottawa");
countryCapitalMap.set("Turkey", "Ankara");
countryCapitalMap.set("SaudiaArabia", "Riyadh");
var logCanadaCapital = function (countryCapitalMap) {
    if (countryCapitalMap.has("Canada")) {
        return ("The capital of Canada is ".concat(countryCapitalMap.get("Canada")));
    }
    else {
        return ("Canada is not in the Map.");
    }
};
console.log(logCanadaCapital(countryCapitalMap));
