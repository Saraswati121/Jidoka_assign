//implementations of a class and ex. of inheritance.
class Parent {
    constructor(name,father){
        this.name=name;
        this.father=father;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.father} years old.`)
    }
}

const parent1= new Parent('Preeti','Jayant');
parent1.sayHello();

//Inheritance
class Child extends Parent {
    constructor(name,father,mother){
       super(name,father);
       this.mother=mother;
    }
    sayHello(){
        super.sayHello();
        console.log(`My mother name is ${this.mother}`);
    }
}

 const child1=new Child('Preeti','Jayant',"Sabita");
 child1.sayHello();