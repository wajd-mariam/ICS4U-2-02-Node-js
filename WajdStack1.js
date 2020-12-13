/**
 * Copyright (c) 2020
 *
 *  The WajdStack Class creates a stack, and methods to use 
 * by the PopStack.js program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
class WajdStack1 {
    
  // Constructors that defines stack array
  constructor() {
    this.stackArray = [];
  }
  // Addition method.
  push(add) {
    this.stackArray.push(add);
  }
  
  pop() {
    var poppedNumber = this.stackArray[this.stackArray.length - 1];
    this.stackArray.pop[this.stackArray.length - 1];
    return poppedNumber;
  }
  
  // Returning method.
  list () {
    var currentCharacters = "";
    for (let character = 0; character < this.stackArray.length; character++) {
      currentCharacters = currentCharacters + this.stackArray[character] + `, `;
    }
    return currentCharacters;
  }
} 

// Exporting the class
module.exports = WajdStack1;