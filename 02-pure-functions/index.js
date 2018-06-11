// Pure Functions

// A pure function is a function whose output is derived
// entirely from its inputs and causes no side effects

// The most common example of pure functions that people have
// encountered are mathematical functions. You might recall
// from math, seeing a function that looked like this:
// f(x) = x + 1. This is a function that accepts one variable,
// and returns a value based on that input. We can write this in
// JavaScript as:

const f = x => x + 1

// This function is a pure function because we always get the same
// output from the same input, and we cause no side effects in our
// program or outside world.

// Let's compare this with several impure functions.

// Impure Function ex. 1 - Output not derived solely from inputs
const COST_OF_ITEM = 19
function cartTotal(quantity) {
  return COST_OF_ITEM * quantity
}

cartTotal(2) // 38

// While this function returns the same value each time it is called
// the result is not derived _only_ from its inputs, but depends on a global state

// Impure Function ex. 2 - Same input, different output
function generateID() {
  return Math.floor(Math.random() * 10000)
}

function createUser(name, age) {
  return {
    id: generateID(),
    name,
    age
  }
}

createUser('Kyle', 33) // { id: 6723, name: "Kyle", age: 33 }
createUser('Kyle', 33) // { id: 1384, name: "Kyle", age: 33 }
createUser('Kyle', 33) // { id: 2880, name: "Kyle", age: 33 }

// If this were a pure function, calling createUser with the same
// arguments would return the same user object. The generateID
// function is impure, and its use in createUser makes that function
// impure as well

// Impure Function ex. 3 - Side Effects
let id = 0
function createFoodItem(name) {
  return {
    id: ++id,
    name
  }
}

createFoodItem('Cheeseburger') // { id: 1, name: 'Cheeseburger' }
createFoodItem('Fries') // { id: 2, name: 'Fries' }
createFoodItem('Milkshake') // { id: 3, name: 'Milkshake' }

// Not only does the function impurely return a different id
// if given the same name, it has the side effect of modifying
// state outside of the function. Pure functions have no effect on
// outside state

// Impure Function ex. 4 - Side Effects #2
function logger(message) {
  console.log(message)
}

// Side effects are not confined to the state of our application,
// they include affecting the outside world. In this case,
// we're affecting the state of our run-time environment, be that
// a Node server or a browser
