//Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
function getSeason(month) {
    var season;
    switch (month) {
        // Spring: March (3), April (4), May (5)
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        // Summer: June (6), July (7), August (8)
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        // Autumn: September (9), October (10), November (11)
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        // Winter: December (12), January (1), February (2)
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        default:
            season = "Invalid month";
            break;
    }
    return season;
}
console.log(getSeason(3)); // Output: Spring
console.log(getSeason(8)); // Output: Summer
console.log(getSeason(12)); // Output: Winter
console.log(getSeason(13)); // Output: Invalid month
