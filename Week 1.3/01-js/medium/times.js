/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const start = Date.now()

    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += 1
    }

    const end = Date.now()

    console.log(start)
    console.log(end)

    return (end - start);
}

console.log(calculateTime(100))
console.log(calculateTime(100000))
console.log(calculateTime(1000000000))