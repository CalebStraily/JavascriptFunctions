//function schema
//making functions saves blocks of code to be ran when we need it.
//INSTEAD of immediately running as the page loads

//function instantiation
function funcOne()
{
    console.log("Hello World!");
};

//function call
funcOne();

let numOne = 7;
let numTwo = 3;

function addTwoNums()
{
    console.log(numOne + numTwo);
}

addTwoNums();

//example of a function that accepts parameters
function addTwoNumsV2 (a, b)
{
    console.log(a + b);
}


//sends variables to use as parameters in the function called
addTwoNumsV2(numOne, numTwo);
addTwoNumsV2(6, 10);
addTwoNumsV2("Hello, ", "World!");