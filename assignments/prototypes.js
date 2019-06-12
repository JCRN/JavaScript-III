/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// GameObject Constructor ***
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

// GameObject Methods
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

// CharacterStats Constructor
function CharacterStats(attributes) {
  GameObject.call(this, attributes)
  this.healthPoints = attributes.healthPoints;  
}

// CharacterStats Inheritance (inherits from GameObject)
CharacterStats.prototype = Object.create(GameObject.prototype)

// CharacterStats Methods
CharacterStats.prototype.takeDamage = function() {
	return `${this.name} took damage.`
}

// Humanoid Constructor
function Humanoid(attributes) {
  CharacterStats.call(this, attributes)
  this.team = attributes.team
  this.weapons = attributes.weapons
  this.language = attributes.language
}

// Humanoid Inheritance (inherits from CharacterStats)
Humanoid.prototype = Object.create(CharacterStats.prototype)

// Humanoid Methods
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}

// Villain Constructor
function Villain(attributes) {
  Humanoid.call(this, attributes)
}

// Villain Inheritance
Villain.prototype = Object.create(Humanoid.prototype) 

// Villain Methods
Villain.prototype.backStab = function(opponent) {
  let death = opponent.destroy();
  // let battleText = "";
  // // hit or miss  
  // let roll = Math.floor(Math.random() * Math.floor(10)); // 0 - 9
  // let success = (roll > 5) ? true : false;
  // if(success) {
  //   opponent.healthPoints -= 1;
  //   battleText = `${this.name} hits ${opponent.name}. \n ${opponent.name}'s remaining health points: ${opponent.healthPoints}`;
  // } else {
  //     battleText = `${this.name} misses ${opponent.name}.`;
  //   }
  // return battleText;
  return death;
}
//   let hit = Math.floor(Math.random() * Math.floor(10)); // 0 - 9
//   let battleText = '';
//   switch(hit) {
//     case 1,2,3,4:
//       battleText = `${this.name} 
//       break;
//     case 5,6,7,8:
//       opponent.healthPoints -= 1;
//       battleText = `${this.name} hits ${opponent.name}. \n ${opponent.name} loses a health point. \n ${opponent.name}'s remaining health points: ${opponent.healthPoints}`;
//       break;
//     case 9: 
//       battleText = `Backstabbed! ${this.name} has killed ${opponent.name}`
//       opponent.destroy();
//       break;    
//   }
// }

// Hero Constructor
function Hero(attributes) {
  Humanoid.call(this, attributes)
}

// Hero Inheritance
Hero.prototype = Object.create(Humanoid.prototype)

// Hero Methods
// Hero.prototype.karateChop = function(opponent) {
  
//   let battleText = '';
//   let hp = 0;


//       battleText = `${this.name} completely misses ${opponent.name}.`
  
  
//       opponent.healthPoints -= 1;
//       battleText = `${this.name} hits ${opponent.name}. \n ${opponent.name} loses a health point. \n ${opponent.name}'s remaining health points: ${opponent.healthPoints}`;
  
  
//       battleText = `Karate Chop straight to the throat! ${this.name} has killed ${opponent.name}`
//       opponent.destroy();
      
//   }
// }

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const ninja = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    healthPoints: 10,
    name: 'Steve',
    team: 'Pit of Despair',
    weapons: [
      'Butter Knife',
      'Spork'
    ],
    language: 'Chaos',
  });

  const warrior = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Chuck',
    team: 'Any team he wants',
    weapons: [
      'Fists',
      'Feet'
    ],
    language: 'English',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  console.log(ninja.backStab(warrior));
  console.log(ninja.backStab(warrior));
  console.log(ninja.backStab(warrior));
  console.log(ninja.backStab(warrior));
  console.log(ninja.backStab(warrior));
  console.log(ninja.backStab(warrior));


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

