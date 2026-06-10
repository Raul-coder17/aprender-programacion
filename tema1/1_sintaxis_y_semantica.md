# Tema 1.1: Sintaxis y Semántica

Antes de comenzar a programar en cualquier lenguaje, es fundamental entender la diferencia entre dos conceptos clave que rigen todo el desarrollo de software: la **Sintaxis** y la **Semántica**.

---

## 1. Definiciones Básicas

### ¿Qué es la Sintaxis?
La **Sintaxis** es el conjunto de reglas gramaticales y ortográficas de un lenguaje de programación. Define cómo deben estructurarse e interactuar los símbolos, palabras clave, signos de puntuación y operadores para que el compilador o intérprete los reconozca como instrucciones válidas.
*   **Si la sintaxis es incorrecta:** El programa no se puede ejecutar o compilar. La computadora detendrá el proceso de inmediato arrojando un **SyntaxError** (en lenguajes interpretados como JavaScript/Python) o un **Compiler Error** (en lenguajes compilados como C#).
*   **Analogía en lenguaje humano:** En español, escribir *"El perro corre rápido"* es sintácticamente correcto. Escribir *"perro El corre rápido"* es incorrecto.

### ¿Qué es la Semántica?
La **Semántica** es el significado real de esas instrucciones; es decir, lo que el código hace cuando se ejecuta. Define la lógica y el comportamiento esperado del programa.
*   **Si la semántica es incorrecta:** El programa compila y corre, pero hace algo diferente a lo que el programador quería. Esto se conoce comúnmente como un **bug** o **error lógico**.
*   **Analogía en lenguaje humano:** La frase *"El coche vuela al espacio para comprar manzanas"* es sintácticamente perfecta (sigue las reglas gramaticales del español), pero no tiene sentido semántico en el mundo real.

---

## 2. Ejemplos Prácticos en JavaScript, Python y C#

Vamos a analizar cómo se declara una variable en los tres lenguajes para ver cómo varía la sintaxis para lograr la **misma semántica**: *guardar el número 20 en un espacio de memoria llamado "edad"*.

### A. JavaScript
JavaScript es de tipado dinámico y usa palabras clave como `let`, `const` o `var` para declarar variables. Se suelen utilizar punto y coma `;` al final de cada instrucción (aunque en JS moderno son opcionales, es buena práctica usarlos).

```javascript
// SINTAXIS CORRECTA
let edad = 20; // Semántica: Crea una caja llamada 'edad' en memoria y guarda el número 20.

// ERROR DE SINTAXIS (SyntaxError)
// let edad = ; 
// Explicación: Falta el valor después del signo de asignación '='. El intérprete no sabe qué asignar.

// ERROR DE SEMÁNTICA (Bug)
let edadActual = 20;
let edadEnCincoAnos = edadActual - 5; 
// Explicación: La sintaxis es 100% correcta, pero semánticamente está mal.
// Si quiero calcular la edad en 5 años, debí usar '+' en lugar de '-'. El programa correrá, pero dará 15 en vez de 25.
```

### B. Python
Python es conocido por su sintaxis limpia y legible. No utiliza palabras clave para declarar variables, no usa punto y coma al final, y depende de la **indentación** (espaciado al inicio de la línea) para definir bloques de código.

```python
# SINTAXIS CORRECTA
edad = 20  # Semántica: Asigna el valor 20 a la variable 'edad'. No requiere let ni var.

# ERROR DE SINTAXIS (SyntaxError)
# edad == 20
# Explicación: Aunque sintácticamente puede ser una comparación válida en otro contexto,
# si intentamos usarlo para declarar/asignar una variable por primera vez, fallará o no cumplirá la función.
# Otro ejemplo clásico de sintaxis inválida en Python:
# if edad > 18
#     print("Es mayor de edad")
# Explicación: Falta colocar los dos puntos ':' al final de la condición del 'if'.

# ERROR DE SEMÁNTICA (Bug)
edad = 20
nombre = "Raúl"
# Intentar sumar el nombre y la edad:
# resultado = nombre + edad
# Explicación: Python es tipado fuerte, por lo que no permite sumar texto y números directamente.
# Aunque escribamos la sintaxis de la suma (+), semánticamente la computadora no sabe cómo "sumar" un texto y un número.
```

### C. C#
C# es un lenguaje de tipado estático y fuertemente tipado. Requiere definir explícitamente el tipo de dato de la variable (o usar `var` si el compilador puede inferirlo) y requiere estrictamente el punto y coma `;` al final de cada línea. Todo el código debe vivir dentro de una clase y un método.

```csharp
using System;

class Program
{
    static void Main()
    {
        // SINTAXIS CORRECTA
        int edad = 20; // Semántica: Asigna el valor entero 20 a una variable de tipo entero 'int'.
        
        // ERROR DE SINTAXIS (Compiler Error)
        // int edad = "veinte";
        // Explicación: C# es tipado estático. No puedes meter texto (string) en una variable declarada como 'int'.
        
        // ERROR DE SINTAXIS (Falta de puntuación)
        // int edad = 20
        // Explicación: Error del compilador CS1002; se esperaba un punto y coma ';'.
        
        // ERROR DE SEMÁNTICA (Bug)
        int baseRectangulo = 5;
        int alturaRectangulo = 10;
        // Queremos calcular el área del rectángulo (Base * Altura)
        int area = baseRectangulo + alturaRectangulo;
        // Explicación: La sintaxis es correcta (suma de dos enteros), pero la semántica está mal.
        // Debió ser multiplicación (*). El área calculada será 15 en lugar de 50.
        Console.WriteLine(area); 
    }
}
```

### D. Java
Java, de manera similar a C#, es un lenguaje compilado de tipado estático y fuertemente tipado. Requiere declarar el tipo de dato exacto (o `var` a partir de Java 10), utiliza obligatoriamente el punto y coma `;` al final de cada línea y exige estructurar todo dentro de una clase con su respectivo método principal `main`.

```java
public class Sintaxis1 {
    public static void main(String[] args) {
        // SINTAXIS CORRECTA
        int edad = 20; // Semántica: Guarda el número 20 en la variable de tipo entero 'edad'.
        
        // ERROR DE SINTAXIS (Compiler Error)
        // int edad = "veinte";
        // Explicación: No se permite meter un String (texto) en una variable reservada para enteros.
        
        // ERROR DE SINTAXIS (Falta de punto y coma)
        // int edad = 20
        // Explicación: El compilador arrojará un error indicando que se esperaba un ';'.
        
        // ERROR DE SEMÁNTICA (Bug)
        int baseRectangulo = 5;
        int alturaRectangulo = 10;
        // Queremos calcular el área del rectángulo (Base * Altura)
        int area = baseRectangulo + alturaRectangulo;
        // Explicación: Sintaxis correcta, pero el resultado lógico será incorrecto (15 en lugar de 50).
        System.out.println(area); 
    }
}
```

---

## 3. Resumen de Diferencias y Buenas Prácticas

| Característica | JavaScript | Python | C# | Java |
| :--- | :--- | :--- | :--- | :--- |
| **Declaración** | Requiere palabra clave (`let`, `const`) | Directa (`nombre = valor`) | Requiere tipo (`int`, `string`) o `var` | Requiere tipo (`int`, `String`) o `var` |
| **Fin de Línea** | Punto y coma `;` (opcional/recomendado) | Salto de línea | Punto y coma `;` (obligatorio) | Punto y coma `;` (obligatorio) |
| **Bloques de código**| Delimitados por llaves `{ }` | Delimitados por indentación (4 espacios) | Delimitados por llaves `{ }` | Delimitados por llaves `{ }` |

### Consejo para depurar (Debuggear):
1. **Primero revisa la Sintaxis:** Si el editor o consola te muestra una línea roja o un error al ejecutar, lee detalladamente el mensaje de error. Por lo general te dirá el archivo, la línea y el símbolo que falta o que sobra.
2. **Luego revisa la Semántica:** Si el programa corre pero los resultados son extraños o incorrectos, no busques errores de ortografía. Sigue el flujo del código paso a paso (usando `console.log`, `print`, `Console.WriteLine`, `System.out.println` o el depurador paso a paso del editor) para verificar qué valores contienen las variables en cada momento y corregir la lógica matemática o de control.

