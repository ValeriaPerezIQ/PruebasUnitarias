# 🧪 Pruebas Unitarias Básicas con Jest

## 📌 Descripción

Este proyecto contiene una serie de funciones desarrolladas en JavaScript junto con sus pruebas unitarias implementadas con **Jest**.

El objetivo principal es practicar conceptos fundamentales de testing, validación de datos y manejo de casos límite en funciones comunes.

---

## ⚙️ Funciones implementadas

### 1. 💸 Calcular descuento

**Descripción:**  
Calcula el precio final de un producto después de aplicar un porcentaje de descuento.

**Ejemplo:**
- Precio: $1000  
- Descuento: 20%  
- Resultado: $800  

---

### 2. 🔐 Validar contraseña

**Descripción:**  
Verifica si una contraseña cumple con requisitos mínimos de seguridad.

**Uso típico:**  
Validación de credenciales antes de permitir acceso.

---

### 3. 🌡️ Conversión Celsius a Fahrenheit

**Descripción:**  
Convierte una temperatura de grados Celsius a Fahrenheit.

**Fórmula base:**  
°F = (°C × 9/5) + 32

---

### 4. 🎟️ Mayor de edad

**Descripción:**  
Determina si una persona tiene al menos 18 años.

**Uso típico:**  
Control de acceso por edad.

---

### 5. 🪪 Generar nombre completo

**Descripción:**  
Concatena nombre y apellido, validando que ambos contengan únicamente letras.

---

## 🧪 Casos de prueba

### 💸 Descuentos

| Caso               | Resultado esperado              |
|--------------------|--------------------------------|
| 20% sobre 1000     | 800                            |
| 100% sobre 100     | 0                              |
| 0% sobre 100       | 100                            |
| 150% sobre 100     | "EL PORCENTAJE ES INVALIDO"    |

---

### 🔐 Contraseñas

| Caso       | Resultado esperado |
|------------|-------------------|
| abc12345   | true              |
| clara900   | true              |
| abc        | false             |

---

### 🌡️ Temperaturas

| Caso      | Resultado esperado |
|----------|-------------------|
| -273.15°C | -459.67°F        |
| 15.56°C   | 60.01°F          |
| 0°C       | 32°F             |

---

### 🎟️ Mayor de edad

| Caso     | Resultado esperado |
|----------|-------------------|
| 18 años  | true              |
| 120 años | true              |
| -4 años  | false             |

---

### 🪪 Nombre completo

| Caso                 | Resultado esperado |
|----------------------|-------------------|
| Jo March             | válido            |
| Mariana sin apellido | undefined         |
| 12345 López          | false             |
| 2345@ 2345#          | false             |

---

## 📊 Resultados de pruebas

| Métrica             | Resultado  |
|---------------------|-----------|
| Test Suites         | 1 passed  |
| Tests               | 18 passed |
| Snapshots           | 0         |
| Tiempo de ejecución | 1.409 s   |

---

## ⚠️ Problemas encontrados

### 🔄 Comparación de tipos
Se detectaron errores por diferencias entre valores numéricos y cadenas al comparar resultados en Jest.

### ⚖️ Truthy / Falsy
Fue necesario comprender el comportamiento de valores:
- truthy
- falsy
- comparación estricta (===)

### 🧩 Casos límite
Se evaluaron escenarios como:
- 0% y 100% de descuento
- temperaturas negativas extremas
- edades inválidas
- entradas con caracteres no válidos

---

## ✅ Conclusión

Este proyecto permitió reforzar conocimientos en **pruebas unitarias con Jest**, validación de datos, manejo de errores y análisis de casos límite, logrando una suite de pruebas completamente exitosa.