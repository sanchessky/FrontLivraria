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
    carregar_maisvendidos()

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

function carregar_maisvendidos() {
    const livros_maisvendidos = document.getElementById("livrosmaisvendidos");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
            <div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="quantidade">Vendidos: ${liv.quantidade}</p>
                    
            </div>`
            })
            livros_maisvendidos.innerHTML = saida;
        })
    carregar_autores()

}

function carregar_autores() {
    const livros_autores = document.getElementById("livrosautores");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
            <div class="autor">
                <img src="${liv.foto}" alt="Autor ${liv.nome}">
                <h3>${liv.nome}</h3>                 
            </div>`
            })
            livros_autores.innerHTML = saida;
        })
}

function carregar_esporte() {
    const livros_esporte = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Esporte")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livesporte">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            livros_esporte.innerHTML = saida;
        })

}
function carregar_ficcao() {
    const livros_ficcao = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/ficcao")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livficcao">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            livros_ficcao.innerHTML = saida;
        })

}
function carregar_romance() {
    const livros_romance = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/romance")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livromance">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            livros_romance.innerHTML = saida;
        })

}
function carregar_fantasia() {
    const livros_fantasia = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/fantasia")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livfantasia">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            livros_fantasia.innerHTML = saida;
        })

}
function carregar_manga() {
    const livros_manga = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/manga")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livmanga">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            livros_manga.innerHTML = saida;
        })

}
function carregar_detalhes() {
    let idlivro = window.location.search.split('=');
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes");
    fetch(`http://127.0.0.1:5000/api/v1/produto/listarporid/${idlivro}`)
    .then((res) => res.json())
    .then((dt) => {
        console.log(dt)
    })
    .catch ((error)=>{
        console.log(error)
    })
}