# Pruebas Unitarias con Jest

## Descripción del Proyecto

Este proyecto implementa cinco funciones básicas en JavaScript y valida su correcto funcionamiento mediante pruebas unitarias utilizando **Jest**.

El objetivo es verificar que cada función produzca los resultados esperados ante entradas válidas e inválidas.
---

## Tecnologías Utilizadas

- JavaScript
- Node.js
- Jest


# Funciones Implementadas y Pruebas Unitarias

---

## 1. calcularDescuento(precio, porcentaje)

### Propósito

Calcula el precio final de un producto después de aplicar un porcentaje de descuento.

### ¿Cómo funciona?

La función recibe:

- Precio original del producto.
- Porcentaje de descuento.

Si el porcentaje se encuentra entre 0 y 100, calcula el descuento y devuelve el precio final.

Si el porcentaje es inválido, devuelve el mensaje:

```text
EL PORCENTAJE ES INVALIDO
```

### Ejemplo

```javascript
calcularDescuento(1000,20);
```

Resultado:

```text
800
```

### Pruebas Unitarias

| Caso de prueba | Resultado esperado |
|---------------|-------------------|
| Precio 1000, descuento 20% | 800 |
| Precio 100, descuento 100% | 0 |
| Precio 100, descuento 0% | 100 |
| Precio 100, descuento 150% | EL PORCENTAJE ES INVALIDO |

### Resultado esperado

La función debe calcular correctamente el precio final y rechazar porcentajes fuera del rango permitido.

---

## 2. validarPassword(password)

### Propósito

Determina si una contraseña cumple las reglas mínimas de seguridad.

### ¿Cómo funciona?

La contraseña debe:

- Tener al menos 8 caracteres.
- Contener únicamente letras y números.

La función devuelve:

```text
true
```

si la contraseña es válida, o

```text
false
```

si no cumple las condiciones.

### Ejemplo

```javascript
validarPassword("abc12345");
```

Resultado:

```text
true
```

### Pruebas Unitarias

| Caso de prueba | Resultado esperado |
|---------------|-------------------|
| abc12345 | true |
| clara900 | true |
| 129887900 | true |
| abc | false |

### Resultado esperado

La función debe aceptar contraseñas válidas y rechazar aquellas con menos de 8 caracteres.

---

## 3. celsiusAFahrenheit(celsius)

### Propósito

Convierte temperaturas de grados Celsius a grados Fahrenheit.

### ¿Cómo funciona?

Utiliza la fórmula:

```text
°F = (°C × 9/5) + 32
```

### Ejemplo

```javascript
celsiusAFahrenheit(0);
```

Resultado:

```text
32
```

### Pruebas Unitarias

| Caso de prueba | Resultado esperado |
|---------------|-------------------|
| -273.15°C | -459.67°F |
| 15.56°C | 60.01°F |
| 0°C | 32°F |

### Resultado esperado

La función debe realizar correctamente la conversión y devolver resultados con dos decimales cuando sea necesario.

---

## 4. esMayorEdad(edad)

### Propósito

Determina si una persona es mayor de edad.

### ¿Cómo funciona?

La función evalúa si la edad es mayor o igual a 18.

Devuelve:

```text
true
```

si la persona es mayor de edad.

Devuelve:

```text
false
```

si es menor de edad o el valor es inválido.

### Ejemplo

```javascript
esMayorEdad(20);
```

Resultado:

```text
true
```

### Pruebas Unitarias

| Caso de prueba | Resultado esperado |
|---------------|-------------------|
| 18 años | true |
| 120 años | true |
| -4 años | false |

### Resultado esperado

La función debe identificar correctamente edades válidas e inválidas.

---

## 5. generarNombreCompleto(nombre, apellido)

### Propósito

Genera un nombre completo validando que nombre y apellido contengan únicamente letras.

### ¿Cómo funciona?

La función:

1. Verifica que los parámetros contengan únicamente letras.
2. Concatena nombre y apellido.
3. Devuelve el nombre completo.

Si alguno de los valores es inválido, devuelve:

```text
false
```

### Ejemplo

```javascript
generarNombreCompleto("Jo","March");
```

Resultado:

```text
Jo March
```

### Pruebas Unitarias

| Caso de prueba | Resultado esperado |
|---------------|-------------------|
| ("Jo","March") | "Jo March" |
| ("Mariana") | "Mariana undefined" |
| ("12345","López") | false |
| ("2345@","2345#") | false |

### Resultado esperado

La función debe construir correctamente el nombre completo y rechazar entradas inválidas.

---

# Casos  Evaluados

## Descuentos

- 0% de descuento.
- 100% de descuento.
- Porcentajes superiores a 100%.

## Contraseñas

- Menos de 8 caracteres.
- Solo números.
- Combinación de letras y números.

## Temperaturas

- Cero absoluto (-273.15°C).
- Punto de congelación del agua (0°C).

## Edad

- Edad mínima legal (18 años).
- Valores negativos.

## Nombres

- Nombres válidos.
- Valores numéricos.
- Caracteres especiales.

---

#  Durante el Desarrollo

## 1. Validación de porcentajes

Fue necesario controlar porcentajes fuera del rango permitido para evitar cálculos incorrectos.

## 2. Uso de expresiones regulares

Se utilizaron expresiones regulares para validar:

- Contraseñas.
- Nombres y apellidos.

## 3. Precisión decimal

Durante la conversión de temperaturas se observó una gran cantidad de decimales.

Se utilizó:

```javascript
toFixed(2);
```

para limitar la salida a dos decimales.




# Resultados Obtenidos

Ejecución realizada con Jest:

```text
Test Suites: 1 passed, 1 total
Tests: 18 passed, 18 total
Snapshots: 0 total
```

Todos los casos de prueba fueron ejecutados exitosamente.

---


---

# Conclusión

La implementación de pruebas unitarias con Jest permitió verificar automáticamente el correcto funcionamiento de todas las funciones desarrolladas.

Las pruebas cubren escenarios normales, entradas inválidas y casos límite.