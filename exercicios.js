// q1 e q2 > criar metódo apresentar que exiba mensagem.
const student = {
    name: 'Artur',
    age: 22,
    course: 'Javascript',
    present() {
        console.log(`Olá, meu nome é ${this.name} e eu estudo ${this.course}.`);
    }
};

student.present();

// q3
const book = {
    title: 'Atchim!',
    author: 'Miró',
    year: 2019,
    isAvaliable: true,
    toLend() {
        return this.isAvaliable = false;
    }
};

console.log(book.toLend());

// q4
const product = {
    name: 'Calça',
    price: 300,
    stock: 4,
    sell() {
        this.stock--;
        return this.stock;
    },
    replacement() {
        this.stock++;
        return this.stock;
    }
};

console.log(`Produto: ${product.name}. Valor: R$${product.price}. Quantidade estoque: ${product.stock}`);
console.log(product.sell());
console.log(product.replacement());

// q5
const bankAccount = {
    holder: 'Fulando de Tal',
    balance: 5049,
    toDeposite(value) {
        this.balance += value;
        console.log(`Adicionando R$${value}...`);
        return this.balance;
    },
    toWithdraw(value) {
        this.balance -= value;
        console.log(`Sacando R$${value}...`);
        return this.balance;
    }   
};

console.log(bankAccount.balance);
console.log(bankAccount.toDeposite(200));
console.log(bankAccount.toWithdraw(200));

// q6
/* const movie = {
    title:
    gender:
    yearOfRelease:
    review: 
}; */