// function personConstructorcopy(name, age) {
//     let person = {};
//     person.name = name;
//     person.age = age;
//     person.greet = function() {
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     return person;
// }
// let steve = personConstructorcopy("Steve", 27);
// steve.greet();

// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// const anika = new personConstructor("Anika", 33);
// anika.greet();

// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// const emily = new personConstructor("Emily", 22);

// emily.greet();

// console.log(this);
// function hello() {
//     let a = 100;
//     console.log("What is a? " + this.a);
//     console.log(this);
// }
// hello();


// function Person(name, age) {
//     let ssn = "234-44-4323";
//     let sec = function() {
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// const eliza = new Person("Eliza", 48);
// console.log(eliza.ssn);
// console.log(eliza.name);
// console.log(eliza.greet());

function Person(name, age) {
    let self = this;
    let SSN = "123-33-9988";
    let getSec = function() {
        console.log("The secret is " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years Old!");
        console.log("The SSN number is: " + SSN);
        getSec();
    }
}
const joe = new Person("Joe", 23);
joe.greet();