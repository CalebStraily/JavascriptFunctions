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

console.clear();

/*

//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 
//TODO Define an Array: Define an array containing a list of grades.
//TODO Create a Function: Create a function to calculate the average of the grades.
//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.

let gradesArray = [41, 74, 87, 100, 70, 85, 92];

calcAverage(gradesArray);
letterGrade(gradesArray)

function calcAverage(grades)
{
    let sum = 0;
    let count = 0;
    let average = 0;

    for (let i = 0; i < grades.length; i++)
    {
        sum += grades[i];
        count++;
    }

    average = sum / count;

    console.log(`Class Average: ${average.toFixed(2)}`);
}

function letterGrade(grades)
{
    for (let i = 0; i < grades.length; i++)
    {
        if (grades[i] >= 93)
        {
            console.log(`${grades[i]} is an A.`);
        }
        else if (grades[i] >= 83 && grades[i] <= 92)
        {
            console.log(`${grades[i]} is a B.`);
        }
        else if (grades[i] >= 74 && grades[i] <= 82)
        {
            console.log(`${grades[i]} is a C.`);
        }
        else if (grades[i] >= 65 && grades[i] <= 73)
        {
            console.log(`${grades[i]} is a D.`);
        }
        else if (grades[i] <= 64)
        {
            console.log(`${grades[i]} is an F.`);
        }
    }
}

*/

/*
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.

let userInput = 0;
let balance = 0;

do
{
    userInput = prompt("Bank Account Manager \n1. Deposit Money\n2. Withdraw Money\n3. Check Balance\nEnter null to exit.");
    console.log(userInput);
    switch(true)
    {
        case (userInput == 1):
            balance = depositMoney(balance);
            break;
        case (userInput == 2):
            balance = withdrawMoney(balance);
            break;
        case (userInput == 3):
            checkBalance(balance);
            break;
        default:
            console.log("Enter a valid response.");
            break;
    }
} while(userInput != null);

function depositMoney(balance)
{
    let depositAmount = 0;

    do
    {
        depositAmount = prompt("Enter the amount you would like to deposit.");
    } while (Number(depositAmount) == false);

    console.log("Deposit Amount: " + Number(depositAmount));

    console.log(`Depositing $${depositAmount}...`);
    balance += Number(depositAmount);
    console.log(`Updated Balance: $${balance}`);

    return balance;
}

function withdrawMoney(balance)
{
    let withdrawAmount = 0;

    do
    {
        withdrawAmount = prompt("Enter the amount you would like to withdraw.")
    } while (Number(withdrawAmount) > balance);

    console.log(`Withdrawing $${withdrawAmount}...`);
    balance -= Number(withdrawAmount);
    console.log(`Updated Balance: $${balance}`);

    return balance;
}

function checkBalance(balance)
{
    console.log(`Current Balance: $${balance.toFixed(2)}`);
}
*/

/*
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.
 
//! BONUS: Be able to remove a task

//Declare Variables
let taskList = [];
let userInput;
let taskCount = 1;

//executes while the user does not input tilde at the menu screen
do
{
    userInput = prompt("1. Add Task \n2.Remove Task \n` to exit.");

    switch(true)
    {
        //adds a task
        case (userInput == 1):
            addTask(taskList);
            break;
        //removes a task
        case (userInput == 2):
            removeTask(taskList);
            break;
        case (userInput == "`"):
            break;
        default:
            console.log("Enter a valid response.");
            break;
    }

} while (userInput != "`");

//adds a task to the task list array
function addTask(taskList)
{
    //prompts the user to add the task description
    userInput = prompt(`Enter the task you would like to add: `);

    //pushes the task to the end of the task list array
    taskList.push(`${taskCount}. ${userInput}`);

    //increments taskCount by 1 for each new task made
    taskCount++;

    //shows the updated task list array
    console.log(`To-do List: ${taskList}`);
}

//removes a task from the task list array
function removeTask(taskList)
{
    //prompts the user to input which number task they would like to remove
    userInput = prompt(`Enter the task that you would like to remove: `);

    //checks to make sure the user input is within the range of the current tasks in the array
    if (userInput <= taskList.length && userInput >= 1)
    {
        //removes the task at the given user input number
        taskList.splice(Number(userInput) - 1, 1);
    }

    //outputs the updated task list array
    console.log(`To-do List: ${taskList}`);
}

*/

//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
 
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.

let celsius;
let fahrenheit;
let kelvin;
let userInput;
let tempValue;

userInput = prompt("What is the temperature value?: ");
tempValue = Number(userInput);

userInput = prompt("What unit do you want to convert from?: ");

switch(true)
{
    case (userInput == "C"):
        celsius = Number(tempValue);
        celsiusToKelvin(celsius);
        celsiusToFahrenheit(celsius);
        break;
    case (userInput == "F"):
        fahrenheit = Number(tempValue);
        fahrenheitToCelsius(fahrenheit);
        break;
    case (userInput == "K"):
        kelvin = Number(tempValue);
        KelvinToCelsius(kelvin);
        break;
    default:
        console.log("Invalid Input.");
        break;
}

function KelvinToCelsius(kelvin)
{
    let convertedTemp = 0;

    convertedTemp = kelvin - 273.15;
    console.log(`Kelvin to Celsius: ${convertedTemp.toFixed(2)}`);
}

function celsiusToKelvin(celsius)
{
    let convertedTemp = 0;

    convertedTemp = celsius + 273.15;
    console.log(`Celsius to Kelvin: ${convertedTemp.toFixed(2)}`);
}

function celsiusToFahrenheit(celsius)
{
    let convertedTemp = 0;

    convertedTemp = (celsius * 9/5) + 32;
    console.log(`Celsius to Fahrenheit: ${convertedTemp.toFixed(2)}`);
}

function fahrenheitToCelsius(fahrenheit)
{
    let convertedTemp = 0;

    convertedTemp = (fahrenheit - 32) * 5/9;
    console.log(`Fahrenheit to Celsius: ${convertedTemp.toFixed(2)}`);
}