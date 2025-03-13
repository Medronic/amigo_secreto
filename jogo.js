const palavras = ["javascript", "html", "css", "programacao", "desenvolvimento"];
let palavraAtual = "";
let palavraEmbaralhada = "";
let pontos = 0;
let chances = 3;
let chancesExtras = 0;

const palavraEmbaralhadaElemento = document.getElementById("palavra-embaralhada");
const entradaPalpite = document.getElementById("entrada-palpite");
const botaoSubmeter = document.getElementById("botao-submeter");
const mensagemElemento = document.getElementById("mensagem");
const chancesRestantesElemento = document.getElementById("chances-restantes");
const pontosElemento = document.getElementById("pontos");
const chancesExtrasElemento = document.getElementById("chances-extras");

function embaralharPalavra(palavra) {
    let embaralhada = palavra.split('').sort(() => Math.random() - 0.5).join('');
    return embaralhada;
}

function iniciarNovaRodada() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    palavraAtual = palavraAleatoria;
    palavraEmbaralhada = embaralharPalavra(palavraAleatoria);
    palavraEmbaralhadaElemento.textContent = palavraEmbaralhada;
    entradaPalpite.value = '';
    mensagemElemento.textContent = '';
}

function atualizarPlacar() {
    pontosElemento.textContent = pontos;
    chancesRestantesElemento.textContent = chances;
    chancesExtrasElemento.textContent = chancesExtras;
}

botaoSubmeter.addEventListener("click", () => {
    const palpiteUsuario = entradaPalpite.value.trim().toLowerCase();
    if (palpiteUsuario === palavraAtual) {
        pontos += 10;
        chancesExtras++;
        if (chances < 3 + chancesExtras) {
            chances++;
        }
        mensagemElemento.textContent = "Acertou! Você ganhou pontos!";
        mensagemElemento.style.color = "green";
    } else {
        chances--;
        mensagemElemento.textContent = "Errou! Tente novamente.";
        mensagemElemento.style.color = "red";
    }

    if (chances <= 0) {
        mensagemElemento.textContent = "Game Over! Você perdeu!";
        mensagemElemento.style.color = "red";
        botaoSubmeter.disabled = true;
    } else {
        iniciarNovaRodada();
    }

    atualizarPlacar();
});

iniciarNovaRodada();
