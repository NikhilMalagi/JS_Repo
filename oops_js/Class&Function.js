class Person{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    getDetails(){
        return `${this.name} :: ${this.id}`
    }
}

let per = new Person(10,"Nikhil");
console.log(per)


class Employee extends Person{ // Set the prototype of Employee to Person
    constructor(id,name,age){
        super(id,name);
        this.age = age
    }

    employeeInfo(){
        return `${this.name} :: ${this.id}:: ${this.age}`
    }
}

let emp = new Employee(10,"Nikhil",25);
console.log(emp)


function PersonFun(id,name){
    this.id = id;
    this.name = name;
    this.x = function a(){
        console.log("HI")
    }
}

PersonFun.prototype.getDetails = function(){
    return `${this.name} :: ${this.id}`
}


function EmployeeFun(id,name,age){
    PersonFun.call(this,id,name) // Includes to Person props in 'this' context
    this.age = age
}

Object.setPrototypeOf(EmployeeFun.prototype,PersonFun.prototype) // extends
EmployeeFun.prototype.employeeInfo = function(){
    return `${this.name} :: ${this.id}:: ${this.age}`
}

let empFun = new EmployeeFun(10,"Nikhil",25);
// console.log(per2.getDetails())