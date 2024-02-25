

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

// creating a new instance of Hero
let hero1 = new Hero("Megolas",1)
console.log("Megolas",hero1)
console.log(hero1.greet()); // "Madmeg says hello"

// Getting the prototype of the newly created Hero object, which includes the constructor and greet functions that we defined above.
let hero1Prototype = Object.getPrototypeOf(hero1)
console.log("Madmeg Prototype",hero1Prototype)

// Note, the prototype method is a special hidden / intenral property - [[prototype]]
console.log(Hero.prototype)

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call - quick way to copy over properties from one constructor to another
  Hero.call(this, name, level);
  // Add a new property unique to warrior
  this.weapon = weapon;
}

// Add new attack method to the Warrior object
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

const hero2 = new Warrior('Madmeg', 1, 'axe');
console.log("Madmeg",hero2);
console.log(hero2.attack());

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);
  // Unique to healer
  this.spell = spell;
}

// Add new heal method to HEaler object
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero3 = new Healer('Madamlight', 1, 'cure');
console.log("Madamlight",hero3);
console.log(hero3.heal());

// At this stage, neither Warrior nor Healer can use the greet method.

// console.log(hero3.greet()); // returns an error

// The properties in the Hero constructor, which are common to all Heroes, are passed to Warrior and Healer
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log("This now works:",hero3.greet()); // this now works

// Note, prototypal inheritance is being applied here when we use greet on a Warrior.
// When the console tries to read hero3.greet it check the Healer object first, then the Hero prototype

// My interpretation - full prototypal hierearchy demonstrated below:

let healerPrototype = Healer.prototype
console.log("healerPrototype",healerPrototype)

let heroPrototype = Hero.prototype
console.log("heroPrototype",heroPrototype)

let objectPrototype = Object.prototype
console.log("objectPrototype",objectPrototype)

console.log(hero3.heal()) // uses Healer prototype
console.log(hero3.greet()) // uses Hero prototype
console.log(Object.getPrototypeOf(hero3)) // uses Object prototype




// pockets - bed - table - head : up the hierarchy

function Pocket(money) {
  this.money = money;
}

function Bed(sheet, pillow) {
  this.sheet = sheet;
  this.pillow = pillow;
}

function Table(pen) {
  this.pen = pen;
}

function Head(glasses) {
  this.glasses = glasses;
}

Object.setPrototypeOf(Pocket.prototype, Bed.prototype);

let pockets = new Pocket(2000)
pockets.sheet = 1
pockets.pillow = 2

Object.setPrototypeOf(Bed.prototype, Table.prototype);
pockets.pen = 3

Object.setPrototypeOf(Table.prototype, Head.prototype);
pockets.glasses = 1

console.log("pockets object:", pockets)


// Immediately invoked function expresison (IIFE)

const message = (function(name) {
  console.log('Hello ' + name + '!');
})('World');

const sayHello = function(name) {
  console.log('Hello ' + name + '!');
};

sayHello("World")


//Object.create structure:

const newHero = Object.create(
  {
    name: "john",
    greet() {
      console.log(`${this.name} says hello`)
    }
  }
)

newHero.isShort = true

newHero.greet()
console.log("the name property should be available",newHero.name)