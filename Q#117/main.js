// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
var fruit = "kiwi";
switch (fruit) {
    case "banana":
        console.log("It's a banana.");
        break;
    case "apple":
        console.log("It's an apple.");
        break;
    case "orange":
        console.log("It's an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
