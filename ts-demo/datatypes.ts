let myName: string = "Geta";
myName = "Anca";

const age : number = 30;

const isLoading: boolean = true;

let amount : any = 25
amount = "Vasile"

console.log(amount);

console.log(age);

console.log(myName);

const sum = (a: number,b: number):number => {
    return a+b;
};
console.log(sum(2,3))

let isHungry: boolean | number; //Union type
isHungry = true;
isHungry = 21;

console.log(isHungry)

const person1 = {
    fullName: "Luca",
    age: 31,
    address: {
        city: "Bucharest",
        zipCode: 111111
    }
}

console.log(person1.address.city)
