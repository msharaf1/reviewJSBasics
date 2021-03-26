class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    parentFunction() {
        return "This is comming from the parent.";
    }
}
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x,y);
        this.radius = radius;
    }
    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
}
// const cirlce = new Circle(33,33,33);
// console.log(cirlce);
// cirlce.showLocation();

const circle = new Circle(1,2,3);
circle.childFunction();




class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
};

// const pie = new Pizza(12, 6);
// console.log(pie.slices);     // we use the getter to determine how many slices we have
// pie.slices = 12;             // the setter will change the number of slices
// console.log(pie.slices);     // use the getter again to make sure our slices have doubled


class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
