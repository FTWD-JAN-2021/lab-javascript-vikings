// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage (damage) {
        this.health -= damage
    }
}
let rambo = new Soldier(500,10)
rambo.receiveDamage(99)

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
