// Pointfree

// Pointfree programming refers to a method in which anonymous functions with interim
// variables are not used, and instead the function itself is passed as an argument to
// the consuming function. This might sound a bit confusing, but can be easily
// understood with a few examples.

// For starters, we have to be clear on how a function is invoked when it is passed
// as a callback to another function. Let's look at the Array.prototype.map method as an example.

const arr = [1, 2, 3]

arr.map(x => x * 2) // [2, 4, 6]

// The map method receives a callback, in this case, an anonymous function that uses an interim
// variabled which we have defined as `x`. What we name this interim is not very important to the
// function. It's just a pointer to a value passed to the callback when it is called.

// Think about what happens under the hood. That anonymous function is called with each item of the
// array passed into it's `x` placeholder. Instead of creating an anonymous function, we can define
// a function with the same argument signature, and pass it in by name to the same effect.

const double = x => x * 2

arr.map(double) // [2, 4, 6]

// This is pointfree programming. The double function is invoked for each item in the array.
// Pointfree makes our functionality more legible and reduces the chances of bugs by
// eliminating the need for declaring and tracking interim variables. We can easily test
// our double function (do you really need to?) and be confident of how it'll function in
// the map method.
