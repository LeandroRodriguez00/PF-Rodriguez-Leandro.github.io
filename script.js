document.addEventListener("DOMContentLoaded", function() {
    const restaurante = {
      nombre: "Lado V",
      mesasTotales: 20,
      mesasDisponibles: 20,
    };
  
    function verificarDisponibilidad() {
      let mensaje = restaurante.nombre + "\n";
      mensaje += "Mesas totales: " + restaurante.mesasTotales + "\n";
      mensaje += "Mesas disponibles: " + restaurante.mesasDisponibles + "\n";
  
      if (restaurante.mesasDisponibles > 0) {
        mensaje += "Tenemos mesas disponibles, podes realizar una reserva";
      } else {
        mensaje += "No tenemos mesas disponibles para reservar, pero podes venir sin reserva y anotarte en lista de espera";
      }
     console.log(mensaje)
      alert(mensaje);
    }
  
    function simularReservas() {
      while (restaurante.mesasDisponibles > 0) {
        restaurante.mesasDisponibles--;
        console.log("Mesa reservada. Mesas disponibles: " + restaurante.mesasDisponibles);
      }
    }
  
    const verificarButton = document.getElementById("verificarButton");
    verificarButton.addEventListener("click", function () {
      verificarDisponibilidad();
      simularReservas();
      alert("Ha pasado tiempo. Vuelve a verificar la disponibilidad.");
      console.log ("Ha pasado tiempo. Vuelve a verificar la disponibilidad.");
    });
  });
  