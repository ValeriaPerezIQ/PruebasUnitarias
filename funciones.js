//Ejercicio 1

function calcularDescuento(precio, porcentaje) {
  let precioFinal;

  if (porcentaje >= 0 && porcentaje <= 100) {
    return precioFinal = (precio - (precio * porcentaje * 0.01));
  } else { return 'EL PORCENTAJE ES INVALIDO'; }

}


// Ejercicio 2
function validarPassword(password) {
  const regex = /^[a-zA-Z0-9]{8,}$/;

  if (regex.test(password)) {
    return true;
  } else {
    return false;

  }
}
  //ejercicio 3

 function celsiusAFahrenheit(celsius)
 { const operacion = ((celsius * (9/5)) + 32) ;

 return  Number (operacion.toFixed(2))
 }


//ejercicio 4

function esMayorEdad (edad) {

  if (edad >= 18 ){
    return true;
  } else {
    return false;
  }
}


// Ejercicio 5
function generarNombreCompleto(nombre, apellido) {
  const patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;

    if ((patron.test(nombre)) &&  (patron.test(apellido))) {
    return (nombre + " " + apellido);
  } else {
    return false;

}
}

console.log(generarNombreCompleto("Mariana", "lopez"));



module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorEdad = esMayorEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;
