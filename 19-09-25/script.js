// Q1
function displayCountDown(num) {
    const numbers = [];
    for (let i = num; i >= 0; i--) {
        numbers.push(i);
    }

    const expression = numbers.join(', ');
    console.log(expression + '.');
};

console.log(`----- Contagem regressiva iniciando...`);
displayCountDown(6);

// Q2 
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
};

console.log(`----- Conversão de °C para °F`);
console.log(`${celsiusToFahrenheit(32)}°F.`);

// Q3
const colorsList = [
    'red', 'blue', 'green', 'gray', 'yellow', 'brown', 'white', 'purple'
];

function displayColors(colors) {
    for (color of colors) {
        console.log(`Cor disponível: [${color}].`);
    };
};

console.log('----- Cores:');
displayColors(colorsList);

// Q4
function isStudentApproved(grade1, grade2, freq) {
    const average = (grade1 + grade2) / 2;
    return average >= 6 && freq >= 75;
};

console.log('----- Aprovado ou não?');
console.log(isStudentApproved(5, 8, 80));

// Q5
function power(base, exponent) {
    console.log('----- Potência:');
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
};

console.log(power(3, 2));

// Q6
const calculator = {
    sum(a, b) {
        console.log('----- Soma:');
        return a + b;
    },
    sub(a, b) {
        console.log('----- Subtração:');
        return a - b;
    },
    mult(a, b) {
        console.log('----- Multiplicação:');
        return a * b;
    },
    div(a, b) {
        if (b === 0) {
            return '[ERRO] Impossível dividir por 0.';
        } else {
            console.log('----- Divisão:');
            return a / b;
        }
    }
};

console.log(calculator.sum(2, 5));
console.log(calculator.sub(2, 5));
console.log(calculator.mult(2, 5));
console.log(calculator.div(2, 5));

// Q7 
const numbers = [2, 3, 5, 1, 6, 9, 8];
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
        console.log('Lista vazia!');
    }

    let smallest = numbers[0];
    for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
};

console.log('-------- Achando o menor número... --------');
console.log(`O menor número encontrado no array é: ${findSmallestNumber(numbers)}`);

// Q8
const books = [
    {
        title: 'Dom Casmurro',
        author: 'Machado de Assis'
    },
    {
        title: 'Morangos Mofados',
        author: 'Caio Fernando'
    },
    {
        title: 'Eu',
        author: 'Augusto dos Anjos'
    },
    {
        title: 'Quarto de Despejo',
        author: 'Carolina Maria De Jesus'
    }
]

function listBooks(books) {
    console.log('------ Livros da Estante ------');
    for(book of books) {
        console.log(`${book.title} - escrito por ${book.author}`);
    };
};

listBooks(books);

// Q9
function sumOddNumbers(numbers) {
    console.log(`------ Soma dos números ímpares do array de números criados na questão 7:`);
    let sumOdd = 0;
    for(number of numbers) {
        if (number % 2 != 0) {
            sumOdd += number;
        };
    };

    return sumOdd;
};

console.log(sumOddNumbers(numbers));

// Q10
const characters = ["a","b","c","1","2","3","@","#","$"];

function generatePassword(array, num){
    console.log(`---- Gerando senha aleatória com ${num} digitos.`)
    let password = ''
    for(let i = 1; i <= num; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        password += array[randomIndex];
    };

    return password;
};

console.log(generatePassword(characters, 8));