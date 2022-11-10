//implementations of a class and ex. of inheritance.
class Parent {
    constructor(fastname,lastname){
        this.fastname=fastname;
        this.lastname=lastname;
    }
    sayHey(){
        console.log(`Hello, my fastname is ${this.fastname} and my lastname is ${this.lastname}.`)
    }
}

const parent1= new Parent('Saraswati','Panda');
parent1.sayHey();

//Inheritance
class Child extends Parent {
    constructor(fastname,lastname,father){
       super(fastname,lastname);
       this.father=father;
    }
    sayHey(){
        super.sayHey();
        console.log(`My father name is ${this.father}`);
    }
}

 const child1=new Child('Saraswati','Panda',"Bijaya");
 child1.sayHey();