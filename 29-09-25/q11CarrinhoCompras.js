const carrinho = [
    {
        nome: 'camisa',
        preco: 38.9,
        quantidade: 3
    },
    {
        nome: 'calça',
        preco: 99.90,
        quantidade: 1
    },
    {
        nome: 'boné',
        preco: 32.22,
        quantidade: 2
    }
]

function adicionarItens(nome, preco, quantidade) {
    return {
        nome,
        preco, 
        quantidade
    }
}

function removerItemDoCarrinho(produto, produtos) {
    const index = produtos.findIndex(p => p.nome === produto.nome)

    if (index === -1) {
        console.log('produto não encontrado')
    } else {
        produtos.splice(index, 1)
        console.log(`Produto ${produto.nome} removido com sucesso.`)
    }

    return produtos
}


function calcularTotalCarrinho(produtos) {
    let valorTotal = 0

    for (produto of produtos) {
        valorTotal += produto.preco * produto.quantidade
    }

    return valorTotal
}

function listarItensCarrinho(produtos) {
    console.log('------Itens Adicionados----')
    for (item of produtos) {
        console.log(`Item: ${item.nome}, QT: ${item.quantidade}, VU: ${item.preco}, VT: R$${(item.quantidade * item.preco).toFixed(2)}`)
    }
}

const meia = adicionarItens('meia', 19.90, 2)
carrinho.push(meia)

listarItensCarrinho(carrinho)
console.log(carrinho)

console.log(`Valor total: R$${calcularTotalCarrinho(carrinho)}`)

const produtoParaRemover = {nome: 'meia'}
removerItemDoCarrinho(produtoParaRemover, carrinho)
console.log(carrinho)