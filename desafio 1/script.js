function encriptar(){

    var frase = document.getElementById("textoEncriptado").value;
    if (/[A-Z0-9]/.test(frase)) {
        alert("No agregue mayúsculas ni números");
        return; 
    }
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("yalala").style.display = "block";
}

function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value;
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufet/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("yalala").style.display = "block";
}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}