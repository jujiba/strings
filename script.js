const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostrarpalavrachave);

function mostrarpalavrachave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("resultado-pavrachave")
    const palavrasChaves = processaTexto(texto)

    campoResultado.textContent = palavrasChave.join(" - ");
}

function processaTexto(texto){
      let palavra = texto.split(/\P{L}+/u))
      
      return palavras;
}