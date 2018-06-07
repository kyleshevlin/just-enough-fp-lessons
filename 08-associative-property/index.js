// Associative Property

// This is kind of a bonus lesson, because you don't _need_ to know
// it to get started, but it will help.

// Functional compositions obey the associative property of mathematics.
// That is, we can change the grouping of compositions and acheive the
// same result. Let's remember what the property is first.

// In mathematics, if there are two or more occurences of the same operation,
// the order in which you perform the operations does not matter. Take addition,
// for example:

console.log(1 + 2 + 3) // 6
console.log((1 + 2) + 3) // 6
console.log(1 + (2 + 3)) // 6

// Each of these operations is equivalent due to the associative property.
// This holds true for compositions.

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

const comp1 = compose(repeat, exclaim, scream)
const comp2 = compose(compose(repeat, exclaim), scream)
const comp3 = compose(repeat, compose(exclaim, scream))

comp1('x') === comp2('x') === comp3('x')

// Each of our compositions is the same! Learning this property of math
// allows us to conceive of ever more complex functions through the composition
// of compositions.
