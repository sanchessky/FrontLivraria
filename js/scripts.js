function carregar_novidades() {
    const livros_novidades = document.getElementById("livrosnovidades");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listar")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
            <div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="preco">R$${liv.preco}</p>
                    <button>
                        <img src="img/carrinho.png" alt="Carrinho para adicionar">
                        <p>Adicionar ao carrinho</p>
                    </button>
            </div>`
            })
            livros_novidades.innerHTML = saida;
        })

}

let pe = 0
function rolarNovidadesEsquerda() {
    if (pe < -2200) {
        pe = -2200
    }
    else {
        pe -= 200;
    }
    const livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`
    //testeconsole.log(livrosnovidades.style.marginLeft)
}
function rolarNovidadesDireita() {
    
    if (pe > 0) {
        pe = 0
    }
    else {
        pe += 200;
    }
    const livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`
    // teste console.log(livrosnovidades.style.marginLeft)
}