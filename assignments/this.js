// The for principles of "this";
//   in your own words. explain the four principle for the "this" keyword below.

//  1. window binding
//  2. implicit binding
//  3.  new binding
//  4.  explicit binding

// write out a code example of each explanation above

// Principle 1
//this in the global scope refers the the window.

// code example for Window Binding
console.log(this);

// Principle 2
// Whenever an object is calling a function the calling object is this.

// code example for Implicit Binding
const coolObj = {
  volume: 'yelling',
  yells: function(name) {
    console.log(`${name} ${this.volume} my name is ${name}`);
    console.log(this);
  },
};
coolObj.yells(`Bob`);
// Principle 3
// When using the new keyword this refers to the instance of the object created

// code example for New Binding
function Person(name, height, weight) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.describe = function() {
    console.log(`Hi, I'm ${this.name}, ${this.height} feet tall and ${this.weight} lbs.`);
    console.log(this);
  };
}

const bob = new Person(`Bob`, 6, 195);
const paul = new Person(`Paul`, 6, 216);
paul.describe();
bob.describe();

// Principle 4
// When using call and apply this is the object being called or applied

// code example for Explicit Binding
bob.describe.call(paul);
paul.describe.apply(bob);
