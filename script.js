const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");

// COPIAR
function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");

    // Limpa o valor do campo de mensagem após a ação de copiar
    mensagem.value = "";

    // Recarrega a página após um pequeno atraso
    setTimeout(function () {
        location.reload();
    }, 200);
}

//CRIPTOGRAFAR
function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function criptografar(mensagemCriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemCriptografada = mensagemCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemCriptografada.includes(matrizCodigo[i][0])) {
            mensagemCriptografada = mensagemCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return mensagemCriptografada;
}

//DESCRIPTOGRAFAR
function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function descriptografar(mensagemDescriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemDescriptografada = mensagemDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemDescriptografada.includes(matrizCodigo[i][1])) {
            mensagemDescriptografada = mensagemDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    //faz a imagem desaparecer
    const elementoImagemFundo = document.querySelector(".mensagem");
    elementoImagemFundo.style.backgroundImage = "none";

    return mensagemDescriptografada;
}
