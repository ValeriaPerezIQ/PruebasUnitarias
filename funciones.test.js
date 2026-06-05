const funciones = require("./funciones.js"); // importamos las funciones

// Pruebas de Descuento $
test("El costo final de aplicar 20% a 1000 es 800", () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800); 
});

test("150 es un porcentaje no es inválido",
    () => {
        expect(funciones.calcularDescuento(100,150)).toBe("EL PORCENTAJE ES INVALIDO");
    });

test("Aplicando un descuento de 100%, pagamos 0",
    () => {
        expect(funciones.calcularDescuento(100,100)).toBe(0);
    });

    test("Aplicando un descuento de 0% en 100, pagamos los 100",
    () => {
        expect(funciones.calcularDescuento(100,0)).toBe(100);
    });

    // Pruebas de Contraseña ******
 test("abc12345 es una contraseña válida",
    () => {
        expect(funciones.validarPassword("abc12345")).toBeTruthy();
    });

    test("abc debe arrojar false",
    () => {
        expect(funciones.validarPassword("abc")).toBe(false); 
    });

      test("clara900 debe arrojar true",
    () => {
        expect(funciones.validarPassword("clara900")).toBe(true); 
    });

      test("129887900 debe arrojar true",
    () => {
        expect(funciones.validarPassword("129887900")).toBe(true); 
    });
    

     // Pruebas de Conversión de Temperatura °C a °F

        
 test("-273.15°C son -459.67°F", () => {
    expect(funciones.celsiusAFahrenheit(-273.15)).toBe(-459.67); 
});

 test("15.56°C son 60°F", () => {
    expect(funciones.celsiusAFahrenheit(15.56)).toBe(60.01); 
});

 test("0°C son 32°F", () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32); 
});

// Prueba de Mayor de Edad
 test("18 años es mayor de edad", () => {
    expect(funciones.esMayorEdad(18)).toBe(true); 
});

 test("120 años  es mayor de edad", () => {
    expect(funciones.esMayorEdad(120)).toBe(true); 
});



 test("-4 años es mayor de edad", () => {
    expect(funciones.esMayorEdad(-4)).toBe(false);
});

// Pruebas de nombre

test("Jo March es el nombre valido", () => {
    expect(funciones.generarNombreCompleto("Jo" , "March")).toBeTruthy();
});


test("Mariana es invalido", () => {
    expect(funciones.generarNombreCompleto("Mariana")).toBe("Mariana undefined");

})

test("12345 es un nombre invalido", () => {
    expect(funciones.generarNombreCompleto("12345", "lópez")).toBe(false);

})

test("2345@ y 2345# es un nombre invalido", () => {
    expect(funciones.generarNombreCompleto("2345@", "2345#")).toBe(false);

})