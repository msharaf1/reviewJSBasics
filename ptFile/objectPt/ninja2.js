class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this._speed = 3;
        this._strength = 3;
    };
    get sayName(){
        console.log(`Name: ${this.name}`);
    };
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this._strength}, Speed: ${this._speed}, Health: ${this.health}`);
    }
    drinkShake() {
        return this.health+10;
    }

};

const ninja = new Ninja("Hyabusa");
ninja.sayName;
ninja.showStats();
