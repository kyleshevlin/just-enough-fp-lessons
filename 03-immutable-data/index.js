// Immutable Data

// A mutable data structure can be changed after creation, an immutable
// data structure cannot. You might recognize the conflict between the
// purity of functional programming and the side effect of mutations.

// Functional programming utilizes immutable data to ensure that the
// internal state of a data structure is never changed. This makes
// functional programming thread-safe, and capable of handling some
// difficult situations where mutable data structures struggle.

// One of the ways I like to describe the difference between mutable
// and immutable data structures is to think about taking a drink from
// a glass. Let's create two classes, a MutableGlass and an ImmutableGlass,
// and look at how they differ when we implement a `takeDrink` method.

// Taking a drink from the mutable glass returns the same glass as before
// with the amount of content mutated to the correct amount.
class MutableGlass {
  constructor(content, amount) {
    this.content = content
    this.amount = amount
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0)
    return this
  }
}

// We can verify this by checking the references of the first glass and
// the glass returned by `takeDrink()` and see that they are the same.
const mg1 = new MutableGlass('water', 100)
const mg2 = mg1.takeDrink(20)
console.log(mg1.amount === 80 && mg1.amount === mg2.amount) // true
console.log(mg1 === mg2) // true

// Taking a drink from the immutable glass returns an entirely new glass,
// but with the correct content and amount of it in the glass.
class ImmutableGlass {
  constructor(content, amount) {
    this.content = content
    this.amount = amount
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
  }
}

// We can verify this by checking the references and seeing that they are
// _not_ equal
const ig1 = new ImmutableGlass('water', 100)
const ig2 = ig1.takeDrink(20)
console.log(ig1.amount !== ig2.amount) // true
console.log(ig1 === ig2) // false
