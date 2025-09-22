const biblioteca = {
    livros: [
        {
            titulo: 'Harry Potter',
            disponivel: false,
        },
        {
            titulo: '1984',
            disponivel: true,
        },
        {
            titulo: 'Seu Bezerra',
            disponivel: true,
        },
    ],
    emprestar(titulo) {
        const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
        if (livroEncontrado) {
            if (livroEncontrado.disponivel === true) {
                livroEncontrado.disponivel = false;
                console.log(`Livro ${livroEncontrado.titulo} emprestado com sucesso.`)
            } else {
                console.log(`O livro ${livroEncontrado.titulo} não está disponível para empréstimo.`)
            } 
        } else {
            console.log(`O livro ${titulo} não foi encontrado.`);
        }
    },
    devolver(titulo) {
        const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
        if (livroEncontrado) {
            if (livroEncontrado.disponivel === false) {
                livroEncontrado.disponivel = true;
                console.log(`Livro ${livroEncontrado.titulo} devolvido com sucesso.`);
            } else {
                console.log(`O livro ${titulo} já se encontra na biblioteca.`);
            }
        } else {
            console.log(`O livro ${titulo} não faz parte do nosso acervo.`);
        }
    },
    listarDisponiveis() {
        const livrosDisponiveis = this.livros.filter(livro => livro.disponivel === true);
        console.log(livrosDisponiveis);
    }
};

biblioteca.emprestar('1984');
biblioteca.devolver('1984');
biblioteca.devolver('1999');

console.log('---------- Livros Disponíveis -------')
biblioteca.listarDisponiveis();
