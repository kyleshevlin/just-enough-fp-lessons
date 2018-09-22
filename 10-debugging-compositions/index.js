// Debugging Compositions

const {
  compose,
  map,
  split,
  join,
  lowerCase
} = require('./shared')

const bookTitles = [
  'The Culture Code',
  'Designing Your Life',
  'Algorithms to Live By'
]

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

// Let's try to take the `bookTitles` from above and try to make a list of URL
// slugs from them. We'll do this through a composition, debugging as we go along.
// We'll iterate through buggy versions of the composition until we arrive at the
// best version.

let slugify = compose(
  join('-'),
  map(lowerCase),
  map(split(' '))
)

console.log(slugify(bookTitles)) // str.toLowerCase is not a function

// Ok, something isn't right about our composition, let's add some traces to see into
// the transformations

slugify = compose(
  join('-')
  map(lowerCase),
  trace('after split'),
  map(split(' '))
)

console.log(slugify(bookTitles))
// [[ 'The', 'Culture', 'Code' ], [ 'Designing', 'Your', 'Life' ], ['Algorithms', 'to', 'Live', 'By']]
// str.toLowerCase is not a function

// Ok, that makes sense, `lowerCase` expects a string and is instead receiving an array.
// Let's switch the order of our split and lowerCase

slugify = compose(
  join('-'),
  map(split(' ')),
  map(lowerCase)
)

console.log(slugify(bookTitles))
// 'the,culture,code-designing,your,life-algorithms,to,live,by'

// Ok, no errors, but that isn't what we wanted, let's trace after the split and figure it out.

slugify = compose(
  join('-'),
  trace('after split'),
  map(split(' ')),
  map(lowerCase)
)

console.log(slugify(bookTitles))
// [['the', 'culture', 'code'], ['designing', 'your', 'life'], ['algorithms', 'to', 'live', 'by']]
// 'the,culture,code-designing,your,life-algorithms,to,live,by'

// Ahh yes, again, split rears it's ugly head and returns a two-dimensional array. We need
// a `map` on our join as well

slugify = compose(
  map(join('-')),
  map(split(' ')),
  map(lowerCase)
)

console.log(slugify(bookTitles))
// ['the-culture-code', 'designing-your-life', 'algorithms-to-live-by']

// Awesome, our composition is debugged, but you might realize we're calling map three
// times and we can make this a bit better by composing `join`, `split`, and `lowercase`
// and passing that into map.

slugify = compose(
  map(
    compose(
      join('-'),
      split(' '),
      lowerCase
    )
  )
)

console.log(slugify(bookTitles))
