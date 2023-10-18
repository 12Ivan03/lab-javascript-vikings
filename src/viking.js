// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {

        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -=damage;

        if(this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// |~~~~~~~~~~|  
// | ===V==   |  ===Viking Army soldiers===
// |~~~~~~~~~~|
const viking1 = new Viking("Ivar", 100, 3);
const viking2 = new Viking("Bjorn", 100, 3);
const viking3 = new Viking("Ingrid", 100, 3);
const viking4 = new Viking("Ulf", 100, 3);


// |^^^^^^^^^^^|
// | <><>S<><> | <>>>Saxon Army soldiers<<<>
// |_,_,_,_,_,_|
const saxonEdmund = new Saxon(100, 3);
const saxonAlfred = new Saxon(100, 3);
const saxonGraham = new Saxon(100, 3);
const saxonHarold = new Saxon(100, 3);


// The Battle of York 
/* 
    The Battle of York was fought between the 'Great Heathen Viking Army'
led by Ubba and Ivar and the Anglo-Saxons.
    The Vikings attacked from the eastern shores of the British island, they 
were remorseless and ruthless. 
    Even thought the Kingdome united and fought as true warriors, 
their faith was already foretold.
    The battle ended with a defeat for the Northumbrian army, and the death 
of both kings AElla and Osberht.

https://en.wikipedia.org/wiki/Battle_of_York_(867)
*/



class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {
      
      //const randomChosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      //const randomChosenViking = Math.floor(Math.random() * this.vikingArmy.length);
      
      const randomSaxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const randomVikingAttack = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      
      let damage = randomVikingAttack.strength; // gives damage
      let madeDamageOn = randomSaxonSoldier.receiveDamage(damage);
      
      if(randomSaxonSoldier.health <= 0) {
        this.saxonArmy.splice(randomSaxonSoldier, 1);
      }
      
      return madeDamageOn
    }
    
    saxonAttack() {
      
        const randomVikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxonAttack = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let damage = randomSaxonAttack.strength;
        let damageMadeOn = randomVikingSoldier.receiveDamage(damage);

        if(randomVikingSoldier.health <= 0) {
            this.vikingArmy.splice(randomVikingSoldier, 1);
        }

        return damageMadeOn
    }
    
    showStatus() {
        
        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
  }