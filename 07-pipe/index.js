// Pipe

// An alternative to `compose` is `pipe`. It is a "mirror" to compose
// applying the functions given to it as arguments from left-to-right
// instead of right-to-left.

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

const enhance = pipe(scream, exclaim, repeat)

enhance('I love egghead') // I LOVE EGGHEAD! I LOVE EGGHEAD!
