const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostrarpalavrachave);

funcion mostrarpalavrachave() {
    alert("fui clicado")
    const texto = document.querySelector("#entrada de texto").value;
    const campoResultado = document.querySelector("resultado-pavrachave")
    const palavras = texto.split(" ")

    campoResultado.textContent = palavras.join(", ");
}