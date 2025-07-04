const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostrarpalavrachave);

function mostrarpalavrachave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("resultado-pavrachave")
    const palavrasChaves = processaTexto(texto)
    campoResultado.textContent = palavrasChave.join(" - ");
}

     palavras = tiraPalavrasRuins(palavras);

function processaTexto(texto){
      let palavra = texto.split(/\P{L}+/u);
       for(let i in palavras){
            palavras [i] = palavras [i].tolowerCase();
       }
      
    const frequencias = contaFrequencias(palavras);
    let ordenadas = Objects.keys(frequencias).sort(ordenaPalavra);
    function ordenaPalavra(p1, p2){
        return frequencias[p2] - frequencias[p1];
    }
    console.log(ordenadas);
    return ordenadas.slice(0. 10);
}

function contaFrequencias(palavras) {
    let frequencias = {};
      for(let i of palavras) {
          frequencias [i] = 0;
          for(let j of palavras) {
              if (i == j) {
              frequencias[i]++;
            }
        }
      }
      return frequencias;
}

function tiraPalavrasruins(palavras) {
    const PALAVRAS_RUINS = new Set (["por", "e", "é", "um", "na", "de", "o", "me", "a", "com", "que", "para", "do"])
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has (palavras) && palavra.length > 2) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasboas;
}