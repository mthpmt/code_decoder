function mostrarResultado(texto) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = texto;

    let botaoCopiar = document.getElementById("botao-copiar");
    botaoCopiar.style.display = 'inline-block';

    const mensagemInicial = document.getElementById("mensagem-inicial");
    if (mensagemInicial) {
        mensagemInicial.style.display = "none";
    }

    const imagemAlura = document.getElementById("imagem-alura");
    if (imagemAlura) {
        imagemAlura.style.display = "none";
    }
}

function criptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const criptografado = mensagem.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    mostrarResultado(criptografado);
    botaoCopiar.style.display = "inline-block";

}

function descriptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const descriptografado = mensagem.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    mostrarResultado(descriptografado);
    botaoCopiar.style.display = "inline-block";


}

function copiarTexto() {
    var texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado para a área de transferência!");
    }, function(err) {
        console.error("Erro ao copiar texto: ", err);
    });
    
}