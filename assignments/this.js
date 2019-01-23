/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Referencing window/console object
* 2. Referencing object that is before a dot
* 3. Used in constructors to refer to the specific instance of the object
* 4. Using .apply or .call to override what a constructer is set to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const impBind = {
    num: 2,
    example: function(x) {
      console.log(x + this.num);
    }
  };

  impBind.example(1);

// Principle 3

// code example for New Binding
function CoolFruits(fruit) {
    this.intro = 'The coolest fruit(s) is/are ';
    this.fruit = fruit;
    this.speak = function() {
      console.log(this.intro + this.fruit);
    };
  }
  
const mango = new CoolFruits('mango');
const watermelon = new CoolFruits('watermelon');

mango.speak();
watermelon.speak();

// Principle 4

// code example for Explicit Binding
mango.speak.apply(watermelon);