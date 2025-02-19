// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
var students = new Map();
students.set(52, "maadeha");
students.set(53, "Maham");
students.set(56, "Misbah");
students.forEach(function (student, id) {
    console.log("".concat(student, " has ID Number ").concat(id));
});
