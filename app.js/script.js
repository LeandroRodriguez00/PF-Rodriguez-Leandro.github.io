document.addEventListener("DOMContentLoaded", function() {
  let nombreCliente;
let cantidadPersonas;
const capacidadMaximaRestaurante = 50;
const porcentajeMaximo = 80;

const reservas = [];

function Reserva(nombre, cantidadPersonas) {
  this.nombre = nombre;
  this.cantidadPersonas = cantidadPersonas;
}

function obtenerDatosReserva() {
  nombreCliente = prompt("Ingrese su nombre:");
  cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas para la reserva:"));

  if (isNaN(cantidadPersonas)) {
    mostrarMensaje("Ingrese un número válido para la cantidad de personas.");
    obtenerDatosReserva();
  } else {
    verificarDisponibilidad();
  }
}

function mostrarMensaje(mensaje) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = mensaje;
}

function verificarDisponibilidad() {
  if (cantidadPersonas <= capacidadMaximaRestaurante * (porcentajeMaximo / 100)) {
    const nuevaReserva = new Reserva(nombreCliente, cantidadPersonas);
    reservas.push(nuevaReserva);
    alert(`Reserva confirmada para ${nombreCliente} para ${cantidadPersonas} personas.`);
    mostrarMensaje(`Reserva confirmada para ${nombreCliente} para ${cantidadPersonas} personas.`);
  } else if (cantidadPersonas > capacidadMaximaRestaurante) {
    alert("La cantidad de personas excede la capacidad máxima del restaurante.");
  } else {
    alert("No hay espacio disponible para su reserva.");
  }
}

function simularReservaRestaurante() {
  const simuladorBtn = document.getElementById("simuladorBtn");

  simuladorBtn.addEventListener("click", function() {
    obtenerDatosReserva();

    if (reservas.length > 0) {
      const nombreBuscado = prompt("Ingrese el nombre para buscar una reserva:");

      const reservaEncontrada = buscarReservaPorNombre(nombreBuscado);

      if (reservaEncontrada) {
        mostrarMensaje(`Reserva encontrada para ${reservaEncontrada.nombre} (${reservaEncontrada.cantidadPersonas} personas).`);
      } else {
        mostrarMensaje("No se encontró ninguna reserva con ese nombre.");
      }
    } else {
      mostrarMensaje("No se pudo confirmar ninguna reserva.");
    }
  });
}

function buscarReservaPorNombre(nombre) {
  const reservaEncontrada = reservas.find((reserva) => reserva.nombre === nombre);
  return reservaEncontrada;
}

simularReservaRestaurante();
});