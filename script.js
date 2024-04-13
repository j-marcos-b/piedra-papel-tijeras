
let puntuacionUsuario = 0;
let puntuacionComputadora = 0;

const imagenPiedra = document.querySelector("#piedra");
const imagenPapel = document.querySelector("#papel");
const imagenTijeras = document.querySelector("#tijeras");
const resultado = document.querySelector("#resultado");
const puntuacion = document.querySelector("#puntuacion");

imagenPiedra.addEventListener('click', () => jugar('piedra'));
imagenPapel.addEventListener('click', () => jugar('papel'));
imagenTijeras.addEventListener('click', () => jugar('tijeras'));

const opciones = ['piedra', 'papel', 'tijeras'];

function jugar(eleccionUsuario) {
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    if ((eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
       (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
       (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')) {
       puntuacionUsuario++;
       resultado.textContent = `¡Ganaste! ${eleccionUsuario} le gana a ${eleccionComputadora}`;
    } else if (eleccionUsuario === eleccionComputadora) {
        resultado.textContent = `Empate. Ambos eligieron ${eleccionUsuario}`;
    } else {
        puntuacionComputadora++;
        resultado.textContent = `Perdiste. ${eleccionComputadora} le gana a ${eleccionUsuario}`;
    }

    puntuacion.textContent = `Usuario: ${puntuacionUsuario}, Computadora: ${puntuacionComputadora}`;

}