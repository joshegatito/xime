// Variables para gestionar el estado de aceptación y rechazo
let aceptado = false;  // Indica si la propuesta ha sido aceptada
let rechazado = false; // Indica si la propuesta ha sido rechazada
let textoNoBoton = "No"; // Texto del botón de rechazo
let ultimoIndiceRechazado = -1; // Último índice de rechazo para evitar repeticiones

// Mensajes para mostrar en caso de rechazo
const textosDeRechazo = [
  "¿Aún no estás segura?",
  "¡Piensa en lo especial que puede ser!",
  "¡No te lo pierdas!",
  "¡Una sorpresa te espera!"
];

// Función para manejar la aceptación de la propuesta
function manejarAceptacion() {
  aceptado = true;
  actualizarInterfaz();
}

// Función para manejar el rechazo de la propuesta
function manejarRechazo() {
  rechazado = true;
  let indiceAleatorio;
  do {
    // Elegir un índice aleatorio para el texto de rechazo
    indiceAleatorio = Math.floor(Math.random() * textosDeRechazo.length);
  } while (indiceAleatorio === ultimoIndiceRechazado);

  // Actualizar el último índice rechazado
  ultimoIndiceRechazado = indiceAleatorio;
  textoNoBoton = textosDeRechazo[indiceAleatorio];
  actualizarInterfaz();
}

// Función para reproducir la música
function reproducirMusica() {
  const audio = document.getElementById('musica');
  audio.play().catch(error => {
    console.log('Error al intentar reproducir el audio:', error);
  });
}

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
  const cuerpoApp = document.querySelector('#app');
  const gifFloroso = 'michicito.gif';  // GIF para la aceptación
  const gifOsoEnfadado = 'amor.gif'; // GIF para el rechazo
  const gifBesos = 'abrazo.gif';        // GIF para el mensaje de éxito

  if (aceptado) {
    // Mostrar mensaje de éxito si la propuesta ha sido aceptada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-exito">
        <img class="Aplicacion-gif" src="${gifBesos}" alt="abrazo" />
        <p class="Aplicacion-texto-exito">
          Eres una persona increible, llena de talento y capacidad. 🎯 !No te rindas! fue una suerte haber conocido a una persona como tu.
        </p>
        <p class="Aplicacion-texto-exito">
          Espero que este dia, esté lleno de alegría y amor para ti, mi querida xime. Que sea un día tan especial como tú.
        </p>
        <p class="Aplicacion-texto-fecha">03/09/2024</p>
      </div>
    `;
  } else if (rechazado) {
    // Mostrar mensaje de espera si la propuesta ha sido rechazada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-cuerpo">
        <h1>Michicito Esperando</h1>
        <img class="Aplicacion-gif" src="${gifOsoEnfadado}" alt="Michicito Esperando" />
        <p class="Aplicacion-texto">Xime, ¿Qué tal si hablamos un poco? Me encantaría contarte por qué. ¿Te gustaría saberlo?</p>
        <button class="Aplicacion-boton aceptar" onclick="manejarAceptacion(); reproducirMusica()">Sí</button>
        <button class="Aplicacion-boton rechazar" onclick="manejarRechazo()">${textoNoBoton}</button>
      </div>
    `;
  } else {
    // Mostrar mensaje inicial si la propuesta no ha sido aceptada ni rechazada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-cuerpo">
        <h1>👋 Hola Xime 🎉</h1>
        <img class="Aplicacion-gif" src="${gifFloroso}" alt="🎉 Hola Xime 🎉" />
        <p class="Aplicacion-texto">Xime, ¿Qué tal si hablamos un poco? Me encantaría contarte por qué. ¿Te gustaría saberlo?</p>
        <button class="Aplicacion-boton aceptar" onclick="manejarAceptacion(); reproducirMusica()">Sí</button>
        <button class="Aplicacion-boton rechazar" onclick="manejarRechazo()">${textoNoBoton}</button>
      </div>
    `;
  }
}

// Función para crear margaritas animadas
/*function crearMargarita() {
  const margarita = document.createElement('div');
  margarita.classList.add('margarita');

  // Posiciona la margarita en un lugar aleatorio dentro del contenedor
  margarita.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Ajusta el rango para no exceder el borde derecho
  margarita.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // Ajusta el rango para no exceder el borde inferior

  document.getElementById('margaritas').appendChild(margarita);
}*/

// Inicializar la interfaz de usuario cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
  actualizarInterfaz();
  // Crea 5 margaritas al cargar la página
  /*for (let i = 0; i < 5; i++) {
    crearMargarita();
  }*/
});
