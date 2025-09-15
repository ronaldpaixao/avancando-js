class User {
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