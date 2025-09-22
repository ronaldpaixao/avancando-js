// Q1
const cellphone = {
    brand: 'Apple',
    model: 'iPhone 17 pro',
    isOn: true
};

console.log(cellphone);
cellphone.isOn = false;
console.log(cellphone);

// Q2
const movie = {
    title: 'Her',
    releaseYear: 2011
};

const genre = 'drama';
movie['genre'] = genre;

console.log(movie);

// Q3
const product = {
    name: 'calça',
    price: 300,
    quantity: 2
}

product.quantity += 10;

console.log(product);

// Q4
const lamp = {
    isOn: false,
    turnOn() {
        this.isOn = true;
        return this.isOn;
    },
    turnOff() {
        this.isOn = false;
        return this.isOn;
    }
};

console.log(`A lâmpada está ligada? ${lamp.isOn}`);
console.log(`Ligar a lâmpada: ${lamp.turnOn()}`);
console.log(`Lâmpada ligada? ${lamp.turnOff()}`);

// Q5 
const user = {
    name: 'Roni',
    password: 1234,
    login(inputPassword) {
        if (inputPassword === this.password) {
            return 'Acesso permitido';
        } else {
            return 'Acesso negado.';
        };
    }
};

console.log('---------- senha errada:');
console.log(user.login(12));
console.log('---------- senha correta:');
console.log(user.login(1234));

// Q6
const student = {
    name: 'Exemplo Aluno',
    address: {
        street: 'Rua da Viúva',
        number: 12,
        city: 'Recife'
    }
};

console.log(`O aluno ${student.name} mora na ${student.address.street}, nº${student.address.number}, em ${student.address.city}`);

// Q7
const order = {
    client: {
        name: 'Cliente X',
        phone: '(81)9999-9999',
        items: [
        'Café com leite', 'Pão de queijo', 'Água com gás'
        ]
    }
};

console.log(`O cliente ${order.client.name} fez um pedido. O primeiro item do pedido é: ${order.client.items[0]}.`);
