/**
 * Copyright (c) 2020
 *
 * The PopStack file pops off the top integer that was added to the stack.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
// Importing the class WajdStack from another file
const WajdStack1 = require("./WajdStack1");

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring stack by using the JacobStack class
let stack = new WajdStack1();

// Declaring variables used:
let sizeStack = 0;
let intAdded = 0;
let counter = 0;
let popDecision = '';


// Try Catch Statement:
try {
  
  // Input / Process / Output
  
  // Getting size of the stack:
  sizeStack = prompt(`Enter the size of the stack: `);
  
  // Entering a do/while loop to add integers into the stack:
  do {
    // Getting an integer to add from user:
    intAdded = prompt(`Enter a number to add to the stack: `);
    // Adding one to counter each time:
    counter = counter + 1;
    // pushing the integer inputted to the stack:
    stack.push(intAdded);
  } while (counter != sizeStack);
  
  // Asking the user whether or not they want to pop off integers from stack:
  popDecision = prompt(`Would you like to pop integers off stack? (Yes)(No): `);
  
  // If statements to proceed with user's decision:
  if (popDecision == "No") {
    // Printing array list stack the user created:
    console.log(stack.list());
  } else if (popDecision == "Yes") {
    // Popping off the first element in the stack and printing to user:
    console.log(``);
    console.log(`The popped number is ${stack.pop()}`);
    // Printing array list stack the user created
    console.log(``);
    console.log(`The stack after popping off the top integer: `);
    console.log(stack.list());
  }
// Error Catch Statement:
} catch(err) {
  console.log (`ERROR`);
}