// Higher order functions

// A higher order function is any function that does at least one of the following
//   1. Accepts a function as an argument
//   2. Returns a new function

// Functions that take a callback argument are an example
// of higher order functions that obey the first rule.

function delayedCall(timeout, callback) {
  setTimeout(callback, timeout)
}

delayedCall(1000, () => {
  console.log('A late greeting')
})

// Functions that return new functions are an example
// of higher order functions that obey the second rule.
// In functional programming, this is the more common use
// of higher order functions.

function strConcat(str1) {
  return function(str2) {
    return `${str1}${str2}`
  }
}

// Calling strConcat with a string returns a function that
// awaits a second string to concatenate
const withFoo = strConcat('foo ')

withFoo('bar') // 'foo bar'
