// Higher order functions

// A higher order function is any function that does at least one of the following
//   1. Accepts a function as an argument
//   2. Returns a new function

// Receives a function as an argument
const withCount = fn => {
  let count = 0

  // Returns a new function
  return (...args) => {
    console.log(`Call count: ${++count}`)
    return fn(...args)
  }
}

const add = (x, y) => x + y

const countedAdd = withCount(add)

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))
