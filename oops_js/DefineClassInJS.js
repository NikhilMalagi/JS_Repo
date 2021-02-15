// NOTES **********
/* Every Object has a constructor property and that refers to the function that was used to create an object
1. With the object literal the constructor called is of the global Object
2. For function object the constructor is Function which refs the global Object
 */


//Creating with a function constructor

function vehicle(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
//new keyword to create an object 
let car1 = new vehicle('GT', 'BMW', '1998cc');
//property accessors 
console.log(car1.name);
console.log(car1.maker);
console.log(car1['engine']);

//creating js objects with object literal 
let car2 = {
    name: 'GT',
    maker: 'BMW',
    engine: '1998cc'
};
//property accessor 
console.log(car2.name); //dot notation 
console.log(car2['maker']); //bracket notation 

//Creating object with Object.create() method:
const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);
me.name = 'Mukul';
// both 'name and isStudying' are added to the me object' and will look for the prototype if that variable is not present in the me object
me.isStudying = true;
me.printIntroduction();


//using es6 classes 
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
}

let car1 = new Vehicle('GT', 'BMW', '1998cc');

console.log(car1.name); 