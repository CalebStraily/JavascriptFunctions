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

function greeting()
{
    console.log("HI");
}
greeting();

function greetingByName(name)
{
    console.log("Hello, " + name + "! Welcome to the site.");
}
greetingByName("Caleb");

function greetingByExcitement(name)
{
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);

    //return statement returns the output of the function
    return upperCaseName;
}

//assigns the return outcome of the function to a variable to be used within this scope
let screamingName = greetingByExcitement("zach");
console.log(`YOOOOOOO ${screamingName}! IT'S NORTHERN LIGHT SUPLEX'S SINGER!!`);

function sandwichMaker(typeOfBread = "N/A", typeOfMeat = "N/A", typeOfSauce = "N/A", typeOfVeggie = "N/A")
{
    console.log(
        `Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce} Veggies: ${typeOfVeggie}`
    );
}

let zachSandwich = sandwichMaker("white", "ham", "mayo", "lettuce");
let margaritoSandwich = sandwichMaker("white", "rostisserie chicken", "buffalo");