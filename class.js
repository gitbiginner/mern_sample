class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name, this.age);
    }
}

const person1 = new People('John', 20);

person1.sayName(); // John
