class Dot {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log("you have a created a dot.");
    }
    showLocation() {
        console.log(`This is a dot at x ${this.x} and y ${this.y}`);
    }
}
const dot1 = new Dot(10,30);
dot1.showLocation();

