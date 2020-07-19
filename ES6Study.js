// Differences betweenthe ar and let keywords
var camper = 'James';
var camper = 'David';
console.log(camper);// logs 'David'
// One of the biggest problems with declaring ariables with the var keyword is 
// that you can overwrite variable declarations without an error.

let camper2 = 'James';
let camper2 = 'David'; // throws an error 
// when using let, a variable with the same name an only be declared once.
// Note the "use strict".
// This enables Strict Mode, which catches common coding mistakes and 'unsafe' actions.
// ex)
function useStrict(){
    "use strict";
    x = 3.14; // throws an error because x is not declared.
}

// Compare Scropes of the var and let Keywords
/*
    When you declare a variable with the var keyword,
    it is declared globally, or locally if declared inside a function.

    Whenyou declare a variable with the let keyword inside a block,
    statement, or expression, its scope is limited to that block, statement, or expression.

*/
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 3

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2
console.log(i); // returns "i is not defined"

// Declare a Read-only variable with the const keyword
/*
    const have all features that let has, with the added that variables declared using const are read-only.
    once a bariable is assigned with const, it cannot be reassigned.
*/
// It is common for developers to use uppercase variable identifiers for immutable values

function usingConst() {
    "use strict";
    const FAV_PET = "Cats";
    FAV_PET = "Dogs"; // returns error
}


// Mutate an Array Declared with const
// Objects(including arrays and functoins) assigned to a variable using const are still mutable.
// Using the const declaratiion only prevents reassignment of the variable identifier.
function mutateConst() {
  "use strict";
  const s = [5,6,7];
  // s = [1,2,3]; throws error
  s[2] = 45;
  console.log(s); // returns [5, 6, 45]
}

// Prevent Object Mutation
// To ensure data doesn't change JS provides a function Object.freeze to prevent data mutation.
// Once the object is frozen, you can no longer add, update, or delete properties from it.
// Any attempt at changing the object will be cause error.

function objectFreeze() {
  let obj = {
    name : "Woo Joon Han",
    age : 22
  }
  Object.freeze(obj);
  obj.age = 23; // will be ignored, mutation not allowed.
  console.log(obj); // {name : "Woo Joon Han", age : 22}
}

// Use Arrow Functions to Write Concise Anonymous Functions
// Replacing inline function

const myFunc1 = function() {
  const myVar = "value";
  return myVar;
} // normal inline function

const myFunc2 = () => {
  const myVar = "value";
  return myVar;
} // Arrow function

const myFunc3 = () => "value"; // Simplified

// Set Default Parameters for your functions
const defaultFunc = (parameter = 5) => {};

// Use the Rest Parameter with Function Parameters
// These arguments are stored in an array that can be accessed later from inside the function.
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter(), and reduce() on the parameters array.
function howMany(...args) {
  return "You have passed " + args.length();
}

console.log(howMan(0,1,2)); // return 3
console.log(howMany(0, [1,2], "one", 4)); // return 4

// Use the Spread Operator to Evaluate Arrays In-Place
// ...arr returns an unpacked array. In other words, it spreads the array.
// However, the spread operator only works in-place,
// like in an argument to a function or in an array literal.
// The following code will not work: const spreaded = ...arr; // will throws an error

// In ES5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
// In ES6
const arryES6 = [6, 89, 3, 45];
const maximusES6 = Math.max(...aryES6);

// Use Destructuring Assignment to Extract Values from Objects
// In ES5,
function inES5() {
  const user = { name : 'John Doe', age : 34};
  
  const name = user.name; // name = 'John Doe'
  const age = user.age; // age : 34
}

function DestructuringES6() {
  const user = { name : 'John Doe', age : 34};
  const {name, age} = user; // name = 'John Doe', age = 34
}

// Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values.
function DestructueAssignES6(){
  const user = {
    name: 'John Doe',
    age: 32
  }
  const{ name: userName, age: userAge } = user; // userName = 'John Doe', userAge = 32
}

// Use Destructuring Assignment to Assign Variables from Nested Objects
function DestructureAssignNestedES6() {
  const user = {
    johnDoe: {
      age: 34,
      email: 'johnDoe@gmail.com'
    }
  }

  const { johnDoe: {age: userAge, email: userEmail}} = user;
}

// Use Destructuring Assignment to Assign Variables from Arrays
// Difference to spread operator is that Destructuring an array can pick or choose which elements you wan to assign to variables.
function DestructuringArrayES6() {
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2

  const [a, b,,,c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c); // 1, 2, 5
}

function DestructuringSwap() {
  let a = 6, b = 8;
  [a, b] = [b, a]; // a = 8, b = 6;
}

// Use Destructuring Assignment with the Rest Parameter to Reassign rray Elements
function DestructuringRestParameter() {
  const[a, b, ...arr] = [1,2,3,4,5,6];
  console.log(a, b); // 1, 2
  console.log(arr); //[3, 4, 5, 7]
}

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max : 10,
  median : 5,
  min: -1,
  average: 7
}

function DestructuringPassObject() {
  const half = (stats) => {
    const {max, min} = stats;
    // Do something with it.
  };

  const half2 = ({max, min}) => {
    // Do something with it.
  };
}

// Create Strings using Template Literals
// This is a special type of string that makes creating complex strings easier.

function CreateStringTeplate() {
  const person = {
    name: "W.J.Han",
    age: 22
  };

  const heyThere = `Hi, my name is ${person.name}, and my age is ${person.age}.`; // use backticks and $
  // also can use string sums like ${a+b};

  console.log(heyThere)// prints "Hi, my name is W.J.Han, and my age is 22."
}

// Write Concise Object Literal Delarations Using Object Property Shorthand

function ConciseObjectES6() {
  const getPosition = (x, y) => ({
    x: x,
    y: y
  });

  const getPositionSimple = (x, y) => ({x, y});
}

// Write Concise Declarative Functions with ES6
function functionInObjectES5() {
  const person = {
    name: "W.J.Han",
    sayHi: function() {
      return `Hi! I'm ${this.name}.`;
    }
  };
}

function functionInObjectES6() {
  const person ={
    name: "W.J.Han",
    sayHi() {
      return `Hi! I'm ${this.name}.`;
    }
  };
};

// Use class Syntax to Define a Constructor Function
// In ES5, usually define a constructor function and use the new keyword to instantiate an object.

function ClassES5() {
  var Bus = function(targetPlace) {
    this.targetPlace = targetPlace;
  }

  var School = new Bus('KHU');
}

// The class syntax simply replaces the constructor function creation

function ClassES6() {
  class Bus {
    constructor(targetPlace) {
      this.targetPlace = targetPlace;
    }
  }
  const School = new Bus('KHU');
}

// Use getters and setters to Control Access to an Object
function getSet() {
  class Game {
    constructor(developer) {
      this._developer = developer;
    }
    // getter
    get developer() {
      return this._developer;
    }
    // setter
    set developer(updateDeveloper) {
      this._developer = updateDeveloper;
    }
  }

  const LOL = new Game('Riot');
  console.log(LOL.developer); // Riot
  LOL.developer = "someone";
  console.log(LOL.developer); // someone
}

// Create a Module Script
/*
<script type="module" src="fileName.js"></script>
*/