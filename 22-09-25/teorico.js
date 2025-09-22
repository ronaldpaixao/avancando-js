// Métodos forEach, map, filter...
const alunos = [
    {nome: 'Roni', idade: 31},
    {nome: 'Maycon', idade: 22},
    {nome: 'Daniela', idade: 17},
    {nome: 'Gerusa', idade: 61},
]

for (const aluno of alunos) {
    console.log(aluno.nome);
}

// Parecido com o for of;
alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.idade} anos.`);
});

// map para criação de nova lista com dados de propriedades de um outro array
const nomes = alunos.map(aluno => aluno.nome);
console.log(nomes);

const idades = alunos.map(aluno => aluno.idade);
console.log(idades);

// cria outra lista a partir de uma condicional
const maiores = alunos.filter(aluno => aluno.idade >= 18);
console.log(maiores);

const menores = alunos.filter(aluno => aluno.idade < 18);
console.log(menores);

const alunoRoni = alunos.find(aluno => aluno.nome === 'Roni');
console.log(alunoRoni);

const aluno22 = alunos.find(aluno => aluno.idade === 22);
console.log(aluno22);

const livros = [
    {
        titulo: 'Dom Casmurro',
        preco: 25
    },
    {
        titulo: 'O Hobbit',
        preco: 45
    },
    {
        titulo: '1984',
        preco: 30
    },
    {
        titulo: 'Harry Potter',
        preco: 60
    }
];

livros.forEach(livro => {
    console.log(livro.titulo);
});

const precos = livros.map(livro => livro.preco);
console.log(precos);

const precosAbaixo40 = livros.filter(livro => livro.preco < 40);
console.log(precosAbaixo40);

const getLivro = livros.find(livro => livro.titulo === '1984');
console.log(getLivro);

