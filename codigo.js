const cartaSecreta = "A"; // Cambiar por la carta que quieras que el usuario adivine
let intentosRestantes = 3;

function verificarAdivinanza() {
    const adivinanza = document.getElementById("adivinanza").value.toUpperCase();

    if (adivinanza === cartaSecreta) {
        mostrarMensaje("¡Felicidades! ¡Adivinaste la carta!");
        desactivarEntrada();
    } else {
        intentosRestantes--;
        document.getElementById("intentos").textContent = intentosRestantes;

        if (intentosRestantes === 0) {
            mostrarMensaje(`Lo siento, has agotado tus intentos. La carta era "${cartaSecreta}".`);
            desactivarEntrada();
        } else {
            mostrarMensaje("Incorrecto no es la carta. Intenta de nuevo.");
        }
    }
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").textContent = mensaje;
}

function desactivarEntrada() {
    document.getElementById("adivinanza").disabled = true;
    document.querySelector("button").disabled = true;
}

const paloSecreto = "pica";
let intentosPaloRestantes = 3;

function verificarPalo() {
    const paloAdivinanza = document.getElementById("paloAdivinanza").value.toLowerCase();

    if (paloAdivinanza === paloSecreto) {
        mostrarMensaje("¡Felicidades! ¡Adivinaste el palo!");
        desactivarBotonPalo();
    } else {
        intentosPaloRestantes--;

        if (intentosPaloRestantes === 0) {
            mostrarMensaje(`Lo siento, has agotado tus intentos. El palo era "${paloSecreto}".`);
            desactivarBotonPalo();
        } else {
            mostrarMensaje("Incorrecto no es el palo. Intenta de nuevo");
        }
    }
}

 function desactivarBotonPalo() {
    document.getElementById("paloAdivinanza").disabled = true;
    document.getElementById("botonPalo").disabled = true;
}