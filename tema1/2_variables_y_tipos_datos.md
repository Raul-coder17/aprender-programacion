# Tema 1.2: Variables y Tipos de Datos

Los datos son la materia prima de cualquier programa. Para poder trabajar con ellos, los lenguajes los clasifican en diferentes categorías o **tipos de datos**.

---

## 1. Tipos Primitivos
Representan los valores más básicos y simples que no pueden dividirse en partes más pequeñas.

### A. Números Enteros y Decimales
*   **Enteros (Integers):** Valores numéricos sin decimales (ej. `42`, `-7`).
*   **Decimales (Floats/Doubles):** Números con punto decimal (ej. `3.1416`, `-0.5`). Tienen precisión limitada en la memoria del computador.

### B. Booleanos (Booleans)
Valores lógicos binarios. Solo pueden ser:
*   `true` / `True` (Verdadero)
*   `false` / `False` (Falso)

### C. Caracteres (Characters)
Un único símbolo de texto (ej. `'a'`, `'B'`, `'9'`, `'$'`). 
*   *Nota:* JavaScript y Python no tienen un tipo de dato "carácter" dedicado; tratan a los caracteres individuales como cadenas de texto (strings) de longitud 1. C# sí tiene el tipo `char`.

### D. Valores Nulos / Vacíos
Representan la ausencia intencional de valor.
*   **JavaScript:** Tiene `null` (ausencia de valor asignada a propósito) y `undefined` (variable declarada pero que aún no tiene valor asignado).
*   **Python:** Utiliza `None`.
*   **C#:** Utiliza `null` (para tipos por referencia) y variables de tipo *nullable* (como `int?`).

---

## 2. Ejemplos Prácticos de Tipos Primitivos

### JavaScript
```javascript
// Declaramos enteros y decimales usando 'let' o 'const'
const entero = 42;             // Tipo: Number
const decimal = 3.1416;         // Tipo: Number (JS no distingue enteros de decimales internamente; ambos son Number)

const esMayor = true;          // Tipo: Boolean
const caracter = 'A';          // Tipo: String (longitud 1)

let valorNulo = null;          // Representa vacío absoluto intencional (Tipo: Object - comportamiento histórico de JS)
let valorIndefinido;           // Variable declarada pero sin valor (Tipo: undefined)

console.log(typeof entero);    // Muestra "number"
console.log(typeof decimal);   // Muestra "number"
```

### Python
```python
# Declaración directa
entero = 42                    # Tipo: int
decimal = 3.1416               # Tipo: float

es_mayor = True                # Tipo: bool (Ojo: inicial con mayúscula)
caracter = 'A'                 # Tipo: str (Python no tiene tipo 'char')

valor_nulo = None              # Tipo: NoneType (Ojo: inicial con mayúscula)

print(type(entero))            # Muestra <class 'int'>
print(type(decimal))           # Muestra <class 'float'>
```

### C#
```csharp
using System;

class Program
{
    static void Main()
    {
        // Declaración explícita del tipo
        int entero = 42;               // Tipo: int (entero de 32 bits)
        double decimalGrande = 3.1416; // Tipo: double (punto flotante de doble precisión)
        float decimalPequeno = 2.5f;   // Tipo: float (requiere sufijo 'f' para diferenciar de double)
        
        bool esMayor = true;           // Tipo: bool
        char caracter = 'A';           // Tipo: char (se escribe con comillas simples obligatoriamente)
        
        string texto = null;           // Las cadenas pueden ser null
        int? enteroVacio = null;       // El signo '?' permite que un tipo de valor (int) sea nulo
        
        Console.WriteLine(entero.GetType()); // Muestra System.Int32
    }
}
```

### Java
```java
public class Variables2 {
    public static void main(String[] args) {
        // Declaración explícita del tipo
        int entero = 42;               // Tipo: int (entero de 32 bits)
        double decimalGrande = 3.1416; // Tipo: double (punto flotante de 64 bits)
        float decimalPequeno = 2.5f;   // Tipo: float (requiere sufijo 'f')
        
        boolean esMayor = true;        // Tipo: boolean (palabra completa)
        char caracter = 'A';           // Tipo: char (se escribe con comillas simples)
        
        String texto = null;           // Los objetos de la clase String pueden ser null
        Integer enteroVacio = null;    // Los tipos envoltorio (Wrappers) como Integer permiten valores nulos
        
        System.out.println(((Object)entero).getClass().getSimpleName()); // Muestra Integer (gracias al Autoboxing)
    }
}
```

---

## 3. Tipos Compuestos
Agrupaciones y estructuras más complejas formadas por múltiples tipos primitivos.

### A. Cadenas de Texto (Strings)
Secuencias de caracteres encerradas en comillas (ej. `"Hola Mundo"`, `'Raúl'`).

### B. Arrays o Listas (Lists)
Colecciones ordenadas de elementos que pueden ser accedidos por su índice de posición (comenzando desde `0`).

### C. Objetos o Diccionarios (Objects/Dictionaries)
Agrupaciones de datos relacionados que se organizan en pares de **clave: valor**.

### D. Tuplas (Tuples)
Colecciones ordenadas e **inmutables** (no se pueden modificar una vez creadas) y con un tamaño fijo.
*   *Nota:* JavaScript y Java no tienen tuplas de forma nativa. Python y C# sí las tienen de forma nativa.

---

## 4. Ejemplos Prácticos de Tipos Compuestos

### JavaScript
```javascript
// Cadenas de texto
const nombre = "Raúl";

// Arrays o Listas (pueden mezclar tipos de datos en JS)
const frutas = ["manzana", "plátano", "naranja"];
console.log(frutas[0]); // Muestra "manzana" (índice 0)

// Objetos (pares clave: valor)
const persona = {
    nombre: "Raúl",
    edad: 28,
    esEstudiante: true
};
console.log(persona.nombre); // Acceso con punto. Muestra "Raúl"
console.log(persona["edad"]); // Acceso con corchete. Muestra 28

// En JS no existen tuplas nativas, pero se puede simular congelando un array:
const tuplaSimulada = Object.freeze([1, "segundo", true]);
// tuplaSimulada[0] = 10; // Daría error en modo estricto o se ignoraría.
```

### Python
```python
# Cadenas de texto
nombre = "Raúl"

# Listas (mutables, pueden cambiar de tamaño y elementos)
frutas = ["manzana", "plátano", "naranja"]
frutas.append("uva") # Agrega un elemento al final

# Diccionarios (equivalente a objetos en JS)
persona = {
    "nombre": "Raúl",
    "edad": 28,
    "es_estudiante": True
}
print(persona["nombre"]) # Acceso con corchetes. Muestra "Raúl"

# Tuplas (inmutables, definidas con paréntesis)
coordenadas = (10, 20, 30)
# coordenadas[0] = 50 # ERROR: TypeError: 'tuple' object does not support item assignment
```

### C#
```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Cadena de texto
        string nombre = "Raúl";
        
        // Arrays (tamaño fijo y de un único tipo de dato)
        string[] frutas = { "manzana", "plátano", "naranja" };
        
        // Listas (tamaño dinámico en C#)
        List<string> listaFrutas = new List<string> { "manzana" };
        listaFrutas.Add("uva");
        
        // Diccionario (equivalente a Objetos en JS)
        Dictionary<string, string> persona = new Dictionary<string, string>();
        persona.Add("nombre", "Raúl");
        persona.Add("edad", "28"); // C# requiere tipos consistentes en diccionarios
        
        // Tupla (inmutable en tamaño y tipos fijos)
        var coordenadas = (X: 10, Y: 20);
        Console.WriteLine(coordenadas.X); // Muestra 10
    }
}
```

### Java
```java
import java.util.ArrayList;
import java.util.HashMap;

public class VariablesCompuestas {
    public static void main(String[] args) {
        // Cadena de texto
        String nombre = "Raúl";
        
        // Arrays (tamaño fijo y tipo de dato homogéneo)
        String[] frutas = { "manzana", "plátano", "naranja" };
        System.out.println(frutas[0]); // Muestra "manzana"
        
        // Listas dinámicas (ArrayList)
        ArrayList<String> listaFrutas = new ArrayList<>();
        listaFrutas.add("uva");
        
        // Diccionario (HashMap en Java)
        HashMap<String, String> persona = new HashMap<>();
        persona.put("nombre", "Raúl");
        persona.put("edad", "28"); // Requiere llaves y valores tipo String en este caso
        System.out.println(persona.get("nombre")); // Muestra "Raúl"
        
        // Java no cuenta con Tuplas nativas. 
        // Para emularlas se suelen definir Records (desde Java 14) o clases sencillas.
    }
}
```

---

## 5. Sistemas de Tipos
¿Cómo se comportan las variables con respecto a sus tipos de datos?

### A. Tipado Estático vs. Tipado Dinámico (¿Cuándo se verifica el tipo?)
*   **Tipado Estático (C#, Java):** El tipo de dato de una variable se define al escribir el código y se verifica en **tiempo de compilación**. Una vez declarada una variable como `int`, no puede almacenar un `string`.
*   **Tipado Dinámico (JavaScript, Python):** Los tipos de datos se asocian a los valores, no a las variables. Se verifican durante la **ejecución**. Una variable puede almacenar un número y luego un texto sin problemas.

```javascript
// DINÁMICO (JavaScript)
let variable = 10;   // Ahora es un número
variable = "Hola";   // Ahora es un string (Válido en JS)
```

```csharp
// ESTÁTICO (C#)
int variable = 10;
// variable = "Hola"; // ERROR DE COMPILACIÓN. No compilará.
```

```java
// ESTÁTICO (Java)
int variable = 10;
// variable = "Hola"; // ERROR DE COMPILACIÓN. No compilará.
```

### B. Tipado Fuerte vs. Tipado Débil (¿Cómo se hacen las conversiones?)
*   **Tipado Débil (JavaScript):** El lenguaje hace conversiones implícitas o automáticas entre tipos de datos si es necesario (coerción de tipos). Esto puede llevar a resultados inesperados.
*   **Tipado Fuerte (Python, C#, Java):** No se permiten operaciones entre tipos incompatibles a menos que se haga una conversión explícita (*casting*).

```javascript
// DÉBIL (JavaScript)
console.log("5" + 5); // Muestra "55" (convierte el número a string y los concatena)
console.log("5" - 2); // Muestra 3 (convierte el string a número y los resta)
```

```python
# FUERTE (Python)
# print("5" + 5) # ERROR: TypeError: can only concatenate str (not "int") to str
# Para solucionarlo debemos hacer conversión explícita:
print(int("5") + 5) # Muestra 10
```

```csharp
// FUERTE (C#)
// int resultado = "5" + 5; // ERROR DE COMPILACIÓN: no se puede convertir implícitamente string en int
int resultado = Convert.ToInt32("5") + 5; // Muestra 10 (conversión explícita)
```

```java
// FUERTE (Java)
// int resultado = "5" + 5; // ERROR DE COMPILACIÓN: tipos incompatibles (String a int)
int resultado = Integer.parseInt("5") + 5; // Muestra 10 (conversión explícita)
```

