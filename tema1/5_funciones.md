# Tema 1.5: Funciones

Las **Funciones** son bloques de código autónomos diseñados para realizar una tarea específica. Son la herramienta principal para la reutilización de código y la abstracción.

---

## 1. Declaración, Parámetros y Retorno
Una función se compone de:
1.  **Nombre descriptivo:** Indica claramente qué hace la función (ej. `calcularPrecioTotal`).
2.  **Parámetros:** Variables temporales que recibe la función como entrada.
3.  **Cuerpo:** Bloque de instrucciones a ejecutar.
4.  **Valor de retorno:** El resultado final que la función devuelve hacia el exterior.

### JavaScript
```javascript
// Declaración de función
function saludar(nombre) {
    return "Hola, " + nombre + "!"; // Retorna una cadena de texto
}

// Ejecución/Llamada de la función
let saludo = saludar("Raúl"); 
console.log(saludo); // "Hola, Raúl!"
```

### Python
Python utiliza la palabra reservada `def` para definir funciones.
```python
# Declaración de función
def saludar(nombre):
    return f"Hola, {nombre}!" # Utiliza f-strings para formatear texto

# Llamada
saludo = saludar("Raúl")
print(saludo) # "Hola, Raúl!"
```

#### C#
```csharp
using System;

class Program
{
    // Declaración dentro de una clase
    static string Saludar(string nombre)
    {
        return "Hola, " + nombre + "!";
    }

    static void Main()
    {
        // Llamada
        string saludo = Saludar("Raúl");
        Console.WriteLine(saludo); // "Hola, Raúl!"
    }
}
```

### Java
C# y Java son muy similares en la declaración de funciones (llamados métodos en estos lenguajes). También se debe declarar el tipo de retorno y el tipo de cada parámetro.
```java
public class Funciones5 {
    // Declaración del método
    public static String saludar(String nombre) {
        return "Hola, " + nombre + "!";
    }

    public static void main(String[] args) {
        // Llamada
        String saludo = saludar("Raúl");
        System.out.println(saludo); // "Hola, Raúl!"
    }
}
```

---

## 2. Paso de Parámetros y Valores por Defecto

### A. Parámetros por Defecto
Permiten inicializar parámetros con un valor por si no se proveen al llamar la función.

```javascript
// JavaScript
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}
console.log(saludar()); // "Hola, Invitado"
```

```python
# Python
def saludar(nombre="Invitado"):
    return f"Hola, {nombre}"
print(saludar()) # "Hola, Invitado"
```

```csharp
// C#
static string Saludar(string nombre = "Invitado")
{
    return "Hola, " + nombre;
}
```

#### Java (Sobrecarga de Métodos)
Java **no** soporta parámetros por defecto nativamente. Para lograr el mismo comportamiento, se utiliza la **sobrecarga de métodos** (crear múltiples métodos con el mismo nombre pero con diferentes parámetros).
```java
public class Sobrecarga5 {
    // Método principal
    public static String saludar(String nombre) {
        return "Hola, " + nombre;
    }

    // Sobrecarga: Si no se pasa nombre, llama al método anterior con "Invitado"
    public static String saludar() {
        return saludar("Invitado"); 
    }
}
```

### B. Paso por Valor vs. Paso por Referencia
*   **Paso por Valor:** Ocurre con los **Tipos Primitivos** (números, booleanos). Se pasa una *copia* del valor a la función. Si modificas el parámetro dentro de la función, la variable original fuera de ella **no cambia**.
*   **Paso por Referencia:** Ocurre con los **Tipos Compuestos** (objetos, arrays, listas). Se pasa la *dirección de memoria* donde está guardado el objeto. Si modificas los elementos del parámetro dentro de la función, la variable original **sí cambia**.

#### Ejemplo Práctico (Paso por Valor):
```javascript
let numero = 10;

function duplicarPorValor(x) {
    x = x * 2; // Se multiplica la copia
}

duplicarPorValor(numero);
console.log(numero); // Sigue valiendo 10 (No cambió)
```

#### Ejemplo Práctico (Paso por Referencia):
```javascript
let listaOriginal = [1, 2, 3];

function agregarElemento(lista) {
    lista.push(4); // Modifica la lista directamente en la dirección de memoria
}

agregarElemento(listaOriginal);
console.log(listaOriginal); // Imprime [1, 2, 3, 4] (La lista original SÍ cambió)
```
*(Este comportamiento es idéntico en JavaScript, Python, C# y Java).*

---

## 3. Scope o Ámbito de las Variables
El **Scope** define la visibilidad y accesibilidad de una variable en diferentes partes del código.

*   **Ámbito Global:** Variables declaradas fuera de cualquier función. Son accesibles desde cualquier lugar del programa.
*   **Ámbito Local:** Variables declaradas dentro de una función o bloque `{ }`. Solo existen dentro de esa función y se destruyen al finalizar su ejecución.

```javascript
let variableGlobal = "Soy global"; // Visible en todo el archivo

function miFuncion() {
    let variableLocal = "Soy local"; // Solo visible dentro de miFuncion
    console.log(variableGlobal); // Imprime: "Soy global"
    console.log(variableLocal);  // Imprime: "Soy local"
}

miFuncion();
// console.log(variableLocal); // ERROR: variableLocal is not defined
```

---

## 4. Funciones Anónimas y Lambdas
Son funciones que no tienen un nombre asociado y suelen usarse como argumentos de otras funciones o para tareas rápidas de una sola línea.

### JavaScript (Arrow Functions)
```javascript
// Función tradicional
function sumar(a, b) { return a + b; }

// Función flecha (Arrow function) anónima guardada en una constante
const sumarArrow = (a, b) => a + b; 

console.log(sumarArrow(5, 5)); // 10
```

### Python (Lambda Functions)
```python
# Función lambda anónima
sumar_lambda = lambda a, b: a + b

print(sumar_lambda(5, 5)) # 10
```

### C# (Lambda Expressions)
```csharp
// C# utiliza delegados (como Func) para almacenar funciones lambda
Func<int, int, int> sumarLambda = (a, b) => a + b;

Console.WriteLine(sumarLambda(5, 5)); // 10
```

### Java (Lambda Expressions)
Java utiliza interfaces funcionales (como `BiFunction` del paquete `java.util.function`) para almacenar y pasar expresiones lambda.
```java
import java.util.function.BiFunction;

public class Lambda5 {
    public static void main(String[] args) {
        // Lambda que recibe dos enteros y retorna un entero
        BiFunction<Integer, Integer, Integer> sumarLambda = (a, b) -> a + b;
        
        System.out.println(sumarLambda.apply(5, 5)); // 10
    }
}
```

---

## 5. Recursividad
La **Recursividad** ocurre cuando una función se llama a sí misma para resolver un problema. Toda función recursiva debe cumplir con dos partes esenciales:
1.  **Caso Base:** La condición de parada que evita que la función se llame infinitamente (causando un desbordamiento de pila o *StackOverflowError*).
2.  **Caso Recursivo:** La llamada a sí misma con un argumento reducido que se acerca al caso base.

### Ejemplo Clásico: Calcular el Factorial de un número ($n!$)
El factorial de 5 ($5!$) es $5 \times 4 \times 3 \times 2 \times 1 = 120$.

#### JavaScript
```javascript
function factorial(n) {
    // 1. Caso Base: El factorial de 1 (o 0) es 1
    if (n <= 1) {
        return 1;
    }
    // 2. Caso Recursivo: n * factorial(n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Imprime 120
/* 
Flujo de ejecución:
factorial(5) -> retorna 5 * factorial(4)
factorial(4) -> retorna 4 * factorial(3)
factorial(3) -> retorna 3 * factorial(2)
factorial(2) -> retorna 2 * factorial(1)
factorial(1) -> retorna 1 (Caso Base alcanzado)
Ahora se resuelven las operaciones en reversa:
2 * 1 = 2
3 * 2 = 6
4 * 6 = 24
5 * 24 = 120
*/
```

#### Python
```python
def factorial(n):
    # Caso Base
    if n <= 1:
        return 1
    # Caso Recursivo
    return n * factorial(n - 1)

print(factorial(5)) # 120
```

#### C#
```csharp
using System;

class Program
{
    static int Factorial(int n)
    {
        // Caso Base
        if (n <= 1)
        {
            return 1;
        }
        // Caso Recursivo
        return n * Factorial(n - 1);
    }

    static void Main()
    {
        Console.WriteLine(Factorial(5)); // 120
    }
}
```

#### Java
```java
public class Recursion5 {
    public static int factorial(int n) {
        // Caso Base
        if (n <= 1) {
            return 1;
        }
        // Caso Recursivo
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
    }
}
```
