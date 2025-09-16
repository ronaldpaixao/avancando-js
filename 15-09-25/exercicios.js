// q1 e q2 > criar metódo apresentar que exiba mensagem.
const student = {
    name: 'Artur',
    age: 22,
    course: 'Javascript',
    introduce() {
        console.log(`Olá, meu nome é ${this.name} e eu estudo ${this.course}.`);
    }
};

student.introduce();

// q3
const book = {
    title: 'Atchim!',
    author: 'Miró',
    year: 2019,
    isAvailable: true,
    checkOut() {
        return this.isAvailable = false;
    }
};

console.log(book.checkOut());

// q4
const product = {
    name: 'Calça',
    price: 300,
    stock: 4,
    sell() {
        this.stock--;
        return this.stock;
    },
    restock() {
        this.stock++;
        return this.stock;
    }
};

console.log(`Produto: ${product.name}. Valor: R$${product.price}. Quantidade estoque: ${product.stock}`);
console.log(product.sell());
console.log(product.restock());

// q5
const bankAccount = {
    holder: 'Fulando de Tal',
    balance: 5049,
    deposit(value) {
        this.balance += value;
        console.log(`Adicionando R$${value}...`);
        return this.balance;
    },
    withdraw(value) {
        this.balance -= value;
        console.log(`Sacando R$${value}...`);
        return this.balance;
    }   
};

console.log(bankAccount.balance);
console.log(bankAccount.deposit(200));
console.log(bankAccount.withdraw(200));

// q6
const movie = {
    title: 'Her',
    genre: 'Sci-fi/Drama',
    releaseYear: 2013,
    ratings: [],
    addRating(rating) {
        this.ratings.push(rating);
        console.log(`Adicionada a nota ${rating} ao filme ${this.title}.`);
    }
};

movie.addRating(4.5);
movie.addRating(6.3);
console.log(movie.ratings);