// Currying & Partial Application

// Currying is the technique of writing a function so that it
// receives its arguments one at a time, returning a new function with each
// argument until it has received all its arguments and finally evaluates

// Curried functions are essential to functional composition, so
// it's an important concept to learn well. Let's look at the canonical example.

// Canonical Example
function add(x) {
  return function(y) {
    return x + y
  }
}

const addFive = add(5) // returns a function awaiting a second value
addFive(4) // 9

// A helpful word to learn when talking about functions is "arity". A function's
// arity is the number of inputs it receives. Functions with a particular arity
// are described with particular names. For example, a function with an arity
// of 1 is called a unary function. An arity of 2 is a binary function.
// 3, ternary. 4, quaternary (not a typo), so on and so forth.

// Currying can then also be described as the act of changing a function with an arity
// greater than 1 into a series of functions whose arity is 1.

// Typically, an add function takes 2 arguments. In fact, when we write 1 + 1, we are using
// an "infix function", that is a function in which the call is fixed between its two arguments.
// But, this requires that we have both arguments at the same time. This might not always be the case
// in our programs.

// In the add() function above, our first function has an arity of 1, receiving our `x`
// value. It then returns an anonymous function with an arity of 1 that awaits a value `y`.
// Once it receives the `y` argument, it evaluates and we get our answer.

// While it is really clear that you are returning a new function when using
// the "function" keyword, it can be quite cumbersome to write functions this way.
// Arrow functions, introduced in ES2015 can make this a lot cleaner to write.

const multiply = x => y => x * y

// Arrow functions with only one parameter do not need parentheses. Also, we can
// leave off the "return" keyword if we want to return what immediately follows the arrow.
// Thus, we can write our curried multiplication function quite succinctly.

const multiFive = multiply(5) // returns a function awaiting a second value
multiFive(4) // 20

// One thing that might not be obvious right away is what makes currying such a powerful
// technique. Currying is powerful because of something called "partial application".
// When we give a curried function one of its arguments, but not all of its arguments,
// it is said that we have partially applied those values.

// In the examples above, when we supply our first argument, the returned function has that
// value partially applied. This works because the value is held in closure. That is,
// the value is available to the scope of any functions with in that scope or nested further.
// So the function we return that awaits the `y` value, has access to the `x` value via closure.

// This is so powerful because now we can create reusable functions with partially applied values
// that await their final arguments.

// Say we are running a store and frequently have sales with the same discounts, 10%, 25% and 50%.
// We can create a curried function, partially apply some values, and have reusable discount functions
// for our program.

const discount = percentOff => amount =>
  Math.round(amount * (1 - percentOff) * 100) / 100

const discount10 = discount(0.1)
const discount25 = discount(0.25)
const discount50 = discount(0.5)

// Now, we can use those functions over and over again without having to supply the percent off ever again.

discount10(100) // 90
discount10(75) // 67.5
discount25(40) // 30
discount25(2) // 1.5
discount50(2) // 1

// While this isn't the only reason to write curried functions, it is a compelling one.
// Curried functions provide significant flexibility and reusability to our programs.
