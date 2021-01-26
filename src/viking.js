// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}
let rambo = new Soldier(500, 10)
rambo.receiveDamage(99)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
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
    receiveDamage(damage) {

        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }




}

// War
class War { 
    vikingArmy = []
    saxonArmy = []

    addViking (sword) {
        this.vikingArmy.push(sword)

    }
    addSaxon (arrow) {
        this.saxonArmy.push(arrow)
    }
    vikingAttack() {
        let luckySoldier = getRandomInt(this.vikingArmy.length)
        let unluckySoldier = getRandomInt(this.saxonArmy.length)
        this.saxonArmy[unluckySoldier].receiveDamage(this.vikingArmy[luckySoldier].strength)
    }
}

let viking = new Viking ('Ragnar', 300, 300)
let saxon = new Saxon (200, 250)

let newWar = new War() 

newWar.addSaxon(saxon)
newWar.addViking(viking)

newWar.vikingAttack()
function getRandomInt (max) {
    return Math.floor(Math.random()*Math.floor(max))
}
