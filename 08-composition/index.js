// Composition

// Composition is the heart and soul of functional programming. Composition is the
// act of combining several functions to create a new function. It is a way of
// building up complexity atomically.

// If you studied math in school, you might remember functions that
// look something like these ones:

const f = x => x + 1
const g = x => x * 3

// A composition is the nesting of one function inside the other,
// passing its returned value as the input to another.

f(g(2)) // 7
f(g(4)) // 13

// I am guessing that most of the functions in your program are
// not written with a single letter as a name. Thus, nesting them
// to build up complexity can be cumbersome.

// Let's make some slightly more useful functions and witness this firsthand.

const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

repeat(exclaim(scream('I love egghead'))) // I LOVE EGGHEAD! I LOVE EGGHEAD!

// What we need is a way to create a new function with the same functionality
// that removes the need for nesting. How about a higher order function
// that takes functions as arguments and returns the new function? We'll call
// this function `compose`

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

// `compose` takes any number of functions as arguments, returns a function
// that awaits a value. When that value is received, it passes it to the
// last function in the array, the most nested function in our previous example,
// and passes the result to the next function, unnesting each layer and
// eventually returning our final result.

const enhance = compose(repeat, exclaim, scream)

// Notice that argument order reflects the left-to-right order of
// the next version. Now, using this `enhance` function with the
// same string, we get the same result.

enhance('I love egghead') // I LOVE EGGHEAD! I LOVE EGGHEAD!

// Another way to create compositions that you might come across in libraries like
// Ramda or lodash-fp is the `pipe` function. It works exactly the same as `compose`,
// except the functions are reduced from left-to-right instead of right-to-left

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const enhanceWithPipe = pipe(scream, exclaim, repeat)

enhanceWithPipe('I love egghead') // I LOVE EGGHEAD! I LOVE EGGHEAD!
