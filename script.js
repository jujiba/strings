const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostrarpalavrachave);

function mostrarpalavrachave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("resultado-pavrachave")
    const palavrasChaves = processaTexto(texto)

    campoResultado.textContent = palavrasChave.join(" - ");
    const frequencias = contaFrequencias(palavras);
    let ordenadas = Objects.keys(frequencias).sort(ordenaPalavra);

    finction ordenaPalavra(p1, p2){
        return frequencias[p2] - frequencias[p1];
    }
    console.log(ordenadas);
    return palavras.slice(0. 10);

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

      let frequencias;

      return palavras;
}