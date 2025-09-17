// Q1

const name = "Roni";
const age = 31;
const email = "ronaldpaixao.tech@gmail.com";
const isStudent = true;

// Q2
console.log(
  `Meu nome é ${name}, tenho ${age} anos, meu email é ${email} e estou estudando: ${isStudant}`
);

// Q3

console.log(typeof name);
console.log(typeof age);
console.log(typeof email);
console.log(typeof isStudent);

// Bloco 2
// Q1
/* const unitPrice = Number(prompt('Digite o preço unitário: '));
const quantity = Number(prompt('Digite a quantidade: ')); */

// Q2
/* let total = unitPrice * quantity; */

//Q3
/* if (total > 100) {
    alert(`Valor final com desconto de 10% aplicado: ${total *= 0.9}`);
} */

// Q4
/* if (quantity % 2 == 0) {
    alert(`A quantidade de produtos comprados é par ${quantity}`);
    };
if (quantity >= 5 && quantity <= 20) {
        alert('E está entre 5 e 20 produtos.');
    }
*/

// Bloco 3
// Q1
const rate = 10;
let grade = "";

// Q2
if (rate >= 90 && rate <= 100) {
  grade = "A";
} else if (rate >= 80) {
  grade = "B";
} else if (rate >= 70) {
  grade = "C";
} else if (rate >= 60) {
  grade = "D";
} else {
  grade = "E";
}

// Q3
console.log(`O aluno tirou ${rate} e ficou com o conceito ${grade}`);

// Bloco 4
// Q1
/* const n = Number(prompt('Digite um número')); */

// Q2
/* console.log(`--- TABUADA COM FOR ---`)
for(let i = 1; i <= 10 ; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
};

console.log('--- TABUADA COM WHILE --- ')
let i = 1;
while (i <= 10) {
    console.log(`${i} x ${n} = ${i * n}`);
    i++;
};
 */
// BLOCO 5
// Q1
const purchases = ["Aroz", "Uva", "Filé de peito", "Feijão", "Graviola"];

// Q2
for (let i = 1; i <= purchases.length; i++) {
  console.log(`${i}. ${purchases[i - 1]}`);
}

// Q3
function printReport(list) {
  console.log(list);
}

printReport(purchases);

// BLOCO 6
// Q1
function calculateMedia(a, b, c = 0) {
  return (a + b + c) / 3;
}

// Q2
console.log(calculateMedia(3, 4).toFixed(2));
console.log(calculateMedia(3, 4, 5).toFixed(2));

// Q3
function finalResult(grade) {
  if (grade >= 60) {
    return "Aprovado";
  } else if (grade >= 40) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

console.log(finalResult(calculateMedia(50, 60, 80).toFixed(2)));

// BLOCO 7
// Q1
const learner = {
    name: 'Jhon Doe',
    age: 21,
    course: 'NodeJs',
    introduce() {
        return `Aluno: ${this.name}. Idade: ${this.age} anos. Curso: ${this.course}`;
    }
};

//Q2
console.log(learner.introduce());

// Q3
const gradeObj = 9;
learner['grade'] = gradeObj;
console.log(learner);

// BLOCO 8
// Q1
const cart = [
    {
        name: 'Playstation 5',
        price: 3000,
        quantity: 1
    },
    {
        name: 'Cable',
        price: 14,
        quantity: 2
    },
    {
        name: 'Pc da Nasa',
        price: 5000,
        quantity: 3
    }
];

// Q2
function calculateTotalCart(items) {
    let total = 0;
    for (item of items) {
        total += item.price * item.quantity;
    }
    return total;
};

console.log(calculateTotalCart(cart));

// Q3
function filterExpensiveItems(items) {
    const expensiveItems = [];
    for(item of items) {
        if (item.price >= 50) {
            expensiveItems.push(item);
        }
    }

    return expensiveItems;
};
console.log(filterExpensiveItems(cart));

