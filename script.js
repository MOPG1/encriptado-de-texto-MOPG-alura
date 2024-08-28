// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Evento para el botón de encriptar
document.getElementById("encrypt-btn").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;
});

// Evento para el botón de desencriptar
document.getElementById("decrypt-btn").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;
});

// Evento para el botón de copiar
document.getElementById("copy-btn").addEventListener("click", function () {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});