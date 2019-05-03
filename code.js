// Instructions
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

// Solution
function solution(number) {
    // set minimum parameter of zero
    let total = 0
    // iterate through each number
    for (let i = 0; i < number; i++)
    // if statement
    // if a number less than 10 is not a muliple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
        // return total number of 3 or 5 mulpiples
        // no duplicates
        total += i
    }
    // total count
    return total;
}