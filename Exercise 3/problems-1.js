/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

//so basically nums is the array 

function isSortedAndHow(nums) {
    //these are the conditions that we assume to be set
    asc = true;
    desc = true;

    // when these conditions are not met (I.e. when asc = false, desc = false)
    for(let i = 0; i < nums.length; i++){
    if (nums[i] > nums[i+1]){
        asc = false;   

    } else if (nums[i] < nums[i+1]){
        desc = false;
    }}
    // now we want a message to be printed
    if(asc){
        return "yes, ascending"
    } else if (desc) {
        return "yes, descending"
    } else {
        return "no"
    }
} 


// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow