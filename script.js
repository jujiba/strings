const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostrarpalavrachave);

function mostrarpalavrachave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("resultado-pavrachave")
    const palavrasChaves = processaTexto(texto)

    campoResultado.textContent = palavrasChave.join(" - ");
}

function processaTexto(texto){
      let palavra = texto.split(/\P{L}+/u)

      let frequencias = {}
      for(let i of palavras){
          frequencias [i] = 0;
          for(let j of palavras){
              if (i == j){
              frequencias[i]++;
            }
        }
      }

      console.log(frequencias);

      return palavras;
}