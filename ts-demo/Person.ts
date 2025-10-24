class Person {
    fullName: string;
    age: number;

    constructor(fullName:string , age: number){
        this.fullName = fullName;
        this.age = age;
    }
}

const p1 = new Person("John Doe", 21); // obiect sau instanta
const p2 = new Person("Andreea", 22);

interface Animal {
    animalName: string;
    numberOfFeet: number;
}

class Cat implements Animal {
animalName: string;
    numberOfFeet: number;

    constructor(animalName: string, numberOfFeet: number){
        this.animalName = animalName;
        this.numberOfFeet = numberOfFeet;
    }
    makeSound(numberOfTimes: number): string {
        return `My name is ${this.animalName} and i make meow ${numberOfTimes} times`
    }
}

class Dog implements Animal {
animalName: string;
    numberOfFeet: number;
    constructor(animalName: string, numberOfFeet: number){
        this.animalName = animalName;
        this.numberOfFeet = numberOfFeet;
}

}

const cat1 = new Cat("Pufi", 4)
const dog1 = new Dog("Pufi", 4)

console.log(cat1.makeSound(4))

abstract class FormaGeometrica {
    shape: string;

    constructor(shape: string){
        this.shape = shape
    }

    getShapeName(): string {
        return this.shape
    }
}

class Triunghi extends FormaGeometrica {
    color: string;

    constructor(shape: string, color: string){
        super(shape)
        this.color = color;
    }
}

const forma1 = new Triunghi('romb', 'albastru')

console.log(forma1.getShapeName())
console.log(forma1.color)

class Vehicul {
    color: string;
    noOfWheels: number;

    constructor(color: string, noOdWheels: number){
        this.color=color;
        this.noOfWheels = noOdWheels;
    }

    makeSound(): string {
        return 'tit'
    }

    sum(a: number,b: number): number;
    sum(a: number,b: number,c: number):number

    sum(a:number, b: number, c?: number){
        if(c===undefined){
            return a+b
        }
        return a+b+c
    }
        
    
}

class Bicicleta extends Vehicul {
    areClaxon: boolean;

    constructor(color: string, noOdWheels: number, areClaxon: boolean) {
        super(color, noOdWheels);
        this.areClaxon = areClaxon

        
        
    }
     makeSound(): string {
        return 'Clopotel'
    }
}

const v = new Vehicul('rosu', 4)
const b = new Bicicleta('albastru', 2, true)

console.log(b.makeSound())
console.log(b.sum(2,3))
console.log(b.sum(2,3,5))


//exemplu incapsulare

class Carte {
   private author:string
    nrPagini: number

    constructor(author: string, nrPagini: number) {
    this.author= author;  //private, public, protected
    this.nrPagini=nrPagini
    }

    getAuthor(): string {
        return this.author;
    }

    setNrPagini(nrPaginiNou:number):void {
this.nrPagini=nrPaginiNou
    }

    getNrPagini(): number{
        return this.nrPagini
    }
}
const carte1 = new Carte("JJ Doe", 140)
carte1.setNrPagini(3)

console.log(carte1.getAuthor())
console.log(carte1.getNrPagini())

const carte5 = new Carte("tatiana", 100)
console.log(carte5.getNrPagini())


