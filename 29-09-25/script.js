// Q1 -> resolver divisão que está dando infinity

function calcular(operacao, n1, n2) {
    let resultado
    if (operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/') {
        console.log('[ERRO] operação não encontrada.')
        return 
    } 

    if(operacao == '+') {
        resultado = n1 + n2
    } else if (operacao == '-') {
        resultado = n1 - n2
    } else if (operacao == '*') {
        resultado = n1 * n2
    } else {
        if (n2 === 0) {
             console.log('[ERRO] Impossível dividir por 0.')
             return 
        } else {
            resultado = n1 / n2
        }
    }

    return resultado
}

console.log(calcular('+', 2, 3))
console.log(calcular('**', 3, 4))
console.log(calcular('/', 3, 0))

// Q2 -> concluída
/* let listaNumeros = [2, 4, 5, 1, 3]

function manipularArrayDeNumeros(array) {
    const arraySoma = listaNumeros.reduce((acumulador, valorInicial) => acumulador + valorInicial, 0)
    const arrayMedia = arraySoma / array.length
    const menor = Math.min(...array)
    const maior = Math.max(...array)

    return [arraySoma, arrayMedia, menor, maior]
}

console.log(manipularArrayDeNumeros(listaNumeros)) */

// Q3 -> concluída

/* const idades = [21, 12, 33, 40, 5, 7]

const maioresDeIdade = idades.filter(idade => idade >= 18)
const menoresDeIdade = idades.filter(idade => idade < 18)
console.log(maioresDeIdade)
console.log(menoresDeIdade) */

// Q4
/* const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2005,
    velocidade: 80,
    acelerar() {
        this.velocidade += 10
        return this.velocidade
    },
    frear(){
        this.velocidade -= 10
        return this.velocidade
    }
}

console.log(carro.acelerar())
console.log(carro.frear()) */

// Q5
/* const estoque = [
    {
        produto: 'mouse',
        quantidade: 3,
        preco: 25.99
    },
    {
        produto: 'teclado',
        quantidade: 1,
        preco: 87.29
    }
]

function calcularTotalEstoque(produtos) {
    let precoTotal = 0
    for (produto of produtos) {
        precoTotal += produto.quantidade * produto.preco
    }

    return precoTotal
}

console.log(calcularTotalEstoque(estoque)) */

// Q6
/* const frase = 'Javascript é legal'
function calcularVogais(string) {
    const vogais = 'aeiouàáéèíìòóùúÀÁÉÈÍÌÓÒÚÙAEIOU'
    let contador = 0
    for (vogal of string) {
        if (vogais.includes(vogal)) {
            contador++
        }
    }

    return contador
}

console.log(calcularVogais(frase)) */

// Q7

/* function verificarSenha(senha) {
    const letraMaiuscula = 'AEIOUÀÁÈÉÌÍÒÓÙÚ'
    const numeros = '0123456789'
    const temMaiuscula = [...senha].some(char => letraMaiuscula.includes(char))
    const temNumero = [...senha].some(char => numeros.includes(char))


    if (temMaiuscula && temNumero && senha.length >= 8) {
        return 'Senha forte'
    } else {
        return 'Senha fraca'
    }
}

console.log(verificarSenha('aaaaaa'))
console.log(verificarSenha('Amora111'))
 */

// Q8
const numerosArray = [1, 2, 3, 4, 5]

/* const numerosArrayEmDobro = numerosArray.map(numero => numero * 2)

console.log(numerosArrayEmDobro) */

// Q9
const numerosArrayPares = numerosArray.filter(numero => numero % 2 == 0)
console.log(numerosArrayPares)

