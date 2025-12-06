class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age; 
    }
}

const person1 = new Person("Sap", 19);
console.log(person1);