exports.compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
exports.pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
exports.trace = msg => x => (console.log(msg, x), x)
exports.prop = key => obj => obj[key]
exports.map = fn => xs => xs.map(fn)
exports.filter = fn => xs => xs.filter(fn)
exports.add = x => y => x + y
exports.subtract = x => y => x - y
exports.multiply = x => y => x * y
exports.divide = x => y => x / y
exports.split = pattern => str => str.split(pattern)
exports.join = separator => xs => xs.join(separator)
exports.lowerCase = str => str.toLowerCase()
exports.upperCase = str => str.toUpperCase()
