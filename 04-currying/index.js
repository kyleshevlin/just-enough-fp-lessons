// Currying

// Currying is the technique of writing a function so that it
// receives its arguments one at a time, returning a new function with each
// argument until it has received all its arguments and finally evaluates

// Curried functions are essential to functional composition. We often
// don't have all of the arguments a function needs up front. Currying
// means we can delay supplying an argument until it is available
// an necessary.

// Canonical Example - ES5
function add(x) {
  // x is stored in closure here and is available in the body of our
  // returned function awaitng the y value
  return function(y) {
    return x + y
  }
}

const addFive = add(5) // returns a function awaiting a second value
addFive(4) // 9
addFive(15) // 20
addFive(8) // 13

// Some helpful jargon to learn when discussing functions is "arity". Arity
// describes the number of arguments a function receives. There are words
// to describe particular arities, such as:

// 1 argument = unary
// 2 arguments = binary
// 3 arguments = ternary
// 4 arguments = quaternary (no that's not a typo)

// Any function that receives more than one argument can be described as a
// multivariate function. Thus, currying can then be described as the act of
// refactoring a multivariate function into one that is a series of unary functions.

// Typically, an `add()` function is a binary function, receiving two arguments
// at the _same_ time. This is quite the restraint. What if we don't have both
// our arguments just yet, but know that we will want to add something with a value
// we already have? In functional programming, every function is a curried function,
// so we can do this without any problem. We supply the arguments we have, and the
// function doesn't evaluate until it receives its final argument.

// I want to take some time to demonstrate writing curried functions in ES2015.
// In the add example above, I use ES5 to clearly demonstrate we are returning
// a new function and where the values are stored in closure. We can write this
// function much more succinctly with ES2015+ arrow function syntax.

const add2 = x => y => x + y

// Unary arrow functions do not require parentheses around the argument, and
// will implicitly return the expression that follows the arrow.Thus, we can
// create our series of unary functions with very little code.
