const biblioteca = {
    livros: [
        {
            titulo: 'Harry Potter',
            disponivel: true,
        },
        {
            titulo: '1984',
            disponivel: false,
        },
        {
            titulo: 'Seu Bezerra',
            disponivel: true,
        },
    ]
};

biblioteca.livros.forEach(livro => {
    console.log(livro.titulo);
});

console.log(biblioteca.livros);

/* biblioteca.livros.emprestar('Harry Potter'); */

const livrosDisponiveis = biblioteca.livros.filter(livro => livro.disponivel === true);
console.log(livrosDisponiveis);

/* biblioteca.livros.devolver('Harry Potter'); */

// criar métodos emprestar e devolver dentro do objeto biblioteca. A dúvida é: dentro do array de livros ou dentro do objeto biblioteca? Esses métodos alteram o valor da propriedade disponível. 