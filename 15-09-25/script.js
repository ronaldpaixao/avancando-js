/* class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greet() {
        return `Olá, ${this.name}. Você tem ${this.age} anos.`;
    };
};

const user1 = new User('Pedro', 34);
console.log(user1.greet());
const user2 = new User('Ana', 98);
console.log(user2.greet());
const user3 = new User('Roni', 31);
console.log(user3.greet());
 */

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Black',
    turnOn() {
        console.log(`Turn on the car.`)
    },
};

console.log(car);
console.log(car.color);
car.doors = 4;
car.color = "Gray";

car.turnOn();


const user = {
    name: 'Maria',
    age: 32,
    address: {
        street: 'Avenida Brasil',
        number: 171
    }
};

console.log(`${user.address.street}, nº ${user.address.number}`);

