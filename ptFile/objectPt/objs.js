function Ninja(name, health = 100) {
    let speed = 3;
    let strength = 3;
    this.name = name;
    this.health = health;

    this.sayName = function() {
        console.log("My ninja name is " + this.name);
    }
    this.showStats = function() {
        console.log("Name: " + this.name + " Health: " + this.health + " Strength " + strength);
    }
    this.drinkSake = function() {
        this.health += 10;
        console.log(this.health);
    }
    this.punch = function(object) {
        object.health = object.health-15;
        console.log(object);
    }

}

let menhaj = new Ninja("Menhaj", 90);
menhaj.sayName();
menhaj.showStats();
menhaj.drinkSake();
let james = new Ninja("James", 100);
menhaj.punch(james);
