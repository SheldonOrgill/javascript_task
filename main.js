// 1. In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// start your work here:
function makeNegative (number) {
    if(number < 0){
        return number;
     } else{
        return (number*-1);
     }
    // write the code for your function here

    // was hard to understand at 1st reason i didnt understand but once i started working with it an googgling some solutions
  
  }
  
  // call your function here
  console.log(makeNegative(3));


//   =========================THE END OF CHALLENGE ONE===================

// ==============================START OF CHALLENGE TWO====================
  // 2. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

// write your function here
var no = [1, 2, 3,];
const map1 = no.map(x => x * 2);
// call your function here
console.log(map1);
// expected output: Array [2, 4, 6,]

//   =========================THE END OF CHALLENGE TWO===================


// ==============================START OF CHALLENGE THREE====================

// 3. You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

function checkValue (a, x) {

  if (a.includes(x)) {
  
  return true;
  
  }
  else{
  
  return false;
  }
  }

  // call your function here
  
  console.log(checkValue([1, 2, 3, 'me  ', 4, 5], 'me'));

  // =========================THE END OF CHALLENGE THREE===================
