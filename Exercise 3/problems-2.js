/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

// two lowest numbers in that 
// sum those numbers up 
// function(a, b){return a - b}

function sumTwoSmallestNumbers(nums) { 
    a = nums.sort((a,b) => a-b);


    //take the two smallest numbers
    a[0];
    a[1];

    //take the sum of them
    sum = a[0] + a[1];

    //print them out
    return sum
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers