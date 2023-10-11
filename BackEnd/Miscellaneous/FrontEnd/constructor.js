//Cunstructor does'nt return anything and start with capital letter //

// function Person (name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi my name is ${this.name}`);
// }

// Better way using class

class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    talk () {
        console.log(`Hi my name is ${this.name}`);
    }
}

let p1 = new Person ("Kaushal",20);
let p2 = new Person ("Ananya",18);