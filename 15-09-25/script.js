class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greet() {
        console.log(`Olá, ${this.name}. Você tem ${this.age} anos.`);
    };
};

const user1 = new User('Pedro', 34);

const user2 = new User('Ana', 98);

const user3 = new User('Roni', 31);
