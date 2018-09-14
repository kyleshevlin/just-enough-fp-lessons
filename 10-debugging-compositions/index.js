// Debugging Compositions

// One of the challenges of debugging functional compositions is that,
// by design, we have removed side effects in favor of pure, pointfree
// functions. We need to create an "escape hatch" that lets us examine
// values at different parts of their transformation during a composition.
// This can be achieved with the use of a `trace()` function.

const trace = msg => x => (console.log(msg, x), x)

// The code above may look a bit confusing. We are using the comma operator,
// a not-so-well-known operator that evaluates each expression from left to
// right and returns the final expression, in order to first log out our
// message and value, and then return the value. We can insert `trace`s into
// our compositions to see what a value is at a given point in the evaluation.

const {
  compose,
  filter,
  join,
  lowerCase,
  map,
  split,
  trace
} = require('../shared')
