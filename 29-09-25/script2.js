// Q1 -> Crie um programa que imprima todos os múltiplos de 7 entre 1 e 100
for (let i = 1; i <= 100 ; i++) {
    if (i % 7 == 0) {
        console.log(i)
    }
}

// Q2 -> Mostre os números de 1 a 100, mas substitua:
/*  ○ os que forem múltiplos de 3 por "Fizz",
    ○ os que forem múltiplos de 5 por "Buzz",
    ○ os múltiplos de 3 e 5 juntos por "FizzBuzz". */

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// Q3 -> Solicite um número inteiro e mostre a tabuada desse número até 20.
/* let numero = Number(prompt('Digite um número'))

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
} */

// Q4 -> Peça ao usuário um número e exiba todos os seus divisores.
/* let numero2 = Number(prompt('Digite um número e saiba quantos divisores ele tem'))
for (let i = 1; i <= numero2 ; i++) {
    if (numero2 % i == 0) {
        console.log(i)
    }
} */

// Q5 -> Crie um programa que leia 10 números e conte quantos são pares e quantos são ímpares
let contadorPares = 0
let contadorImpares = 0
for (let i = 1 ; i <= 10 ; i++) {
    if (i % 2 == 0) {
        contadorPares++
    } else {
        contadorImpares++
    }
}

console.log(`De 1 a 10 foram encontrados: ${contadorPares} pares e ${contadorImpares}`)

// Q6 -> Mostre uma pirâmide de asteriscos com 5 linhas, como no exemplo:
let asterisco = '*'
for(let i = 1; i <= 5; i++) {
    console.log(asterisco)
    asterisco += '*'
}

// Q7 -> Mostre os números de 1 até 100 pulando de 5 em 5.
for(let i = 1; i <= 100; i++) {
    if (i % 5 == 0 || i === 1) {
        console.log(i)
    }
}

// Q8 -> Crie um programa que peça ao usuário uma palavra e conte quantas vogais ela possui.
let frase = prompt('Digite uma frase para saber a qnt de vogais.')

function calcularQuantidadeVogais(string) {
    let vogais = 'aeiouAEIOUÁÀÉÈÍÌÓÒÚÙáàéèíìóòúù'
    let contador = 0
    for (vogal of string) {
        if (vogais.includes(vogal)) {
            contador++
        }
    }

    return contador
} 
console.log(`--- contagem de vogais para a frase: '${frase}'`)
console.log(calcularQuantidadeVogais(frase))

// Q9 ->  Gere um número secreto de 1 a 10 e faça o usuário tentar adivinhar até acertar (joguinho de adivinhação).

let numeroSecreto = Math.floor(Math.random() * 10) + 1
let contador = 0
let numeroChute

do {
    numeroChute = Number(prompt('Tente acertar o número secreto:'))

    if (numeroChute < numeroSecreto) {
        alert(`O número secreto é maior que ${numeroChute}.`)
    } else if (numeroChute > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroChute}.`)
    } 

    contador++
} while (numeroChute != numeroSecreto)

let pluralOuSingular = contador > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você acertou. O número secreto é ${numeroSecreto}. Você acertou com ${contador} ${pluralOuSingular}.`)

// Q10 -> Mostre a soma dos números ímpares de 1 até 100.
let somaImpares = 0
for (let i = 1 ; i <= 100 ; i++) {
    if (i % 2 != 0) {
        somaImpares += i
    }
}
console.log('------ Soma de impares de 1 a 100')
console.log(somaImpares)
