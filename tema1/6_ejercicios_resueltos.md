# Tema 1.6: Ejercicios Prácticos Resueltos

En esta sección resolveremos paso a paso los ejercicios planteados al final del archivo `contexto.md` utilizando **JavaScript**, **Python** y **C#**. Analizaremos las diferencias estructurales y sintácticas de cada solución.

---

## Ejercicio 1: Variables y Operadores

### Consigna:
1. Crea una variable con un tipo primitivo numérico entero y otra con un número decimal.
2. Crea una variable con un tipo booleano y otra con una cadena de texto.
3. Utiliza un operador aritmético para multiplicar tus dos números y un operador de asignación (`+=`) para sumarle un valor extra al resultado.

### A. Solución en JavaScript
```javascript
// 1. Declarar variables numéricas primitivas
let entero = 10;            // Tipo primitivo Number (entero)
let decimal = 5.5;          // Tipo primitivo Number (decimal)

// 2. Declarar variable booleana y de texto
let esActivo = true;        // Tipo primitivo Boolean
let saludo = "Hola, Raúl";  // Tipo compuesto String

// 3. Multiplicar números y usar += para sumar un extra
let resultado = entero * decimal; // Operador aritmético * (10 * 5.5 = 55)
resultado += 15;                  // Operador de asignación += (55 + 15 = 70)

// Imprimir resultado en consola
console.log("Resultado final JS:", resultado); // Muestra: 70
```

### B. Solución en Python
```python
# 1. Declarar variables numéricas primitivas
entero = 10                 # Tipo primitivo int
decimal = 5.5               # Tipo primitivo float

# 2. Declarar variable booleana y de texto
es_activo = True            # Tipo primitivo bool (con mayúscula inicial)
saludo = "Hola, Raúl"       # Tipo compuesto str

# 3. Multiplicar números y usar += para sumar un extra
resultado = entero * decimal # Operador aritmético * (10 * 5.5 = 55.0)
resultado += 15.0            # Operador de asignación += (55.0 + 15.0 = 70.0)

# Imprimir resultado en consola
print("Resultado final Python:", resultado) # Muestra: 70.0
```

### C. Solución en C#
```csharp
using System;

class Program
{
    static void Main()
    {
        // 1. Declarar variables numéricas especificando el tipo (tipado estático)
        int entero = 10;           // Tipo primitivo entero int
        double decimalNum = 5.5;   // Tipo primitivo decimal double

        // 2. Declarar variable booleana y de texto
        bool esActivo = true;      // Tipo primitivo bool
        string saludo = "Hola, Raúl"; // Tipo compuesto string

        // 3. Multiplicar números y usar += para sumar un extra
        // Al multiplicar un int por un double, el resultado se promociona automáticamente a double.
        double resultado = entero * decimalNum; // (10 * 5.5 = 55.0)
        resultado += 15.0;                      // Operador de asignación += (55.0 + 15.0 = 70.0)

        // Imprimir resultado en consola
        Console.WriteLine("Resultado final C#: " + resultado); // Muestra: 70
    }
}
```

### D. Solución en Java
```java
public class Ejercicio1 {
    public static void main(String[] args) {
        // 1. Declarar variables numéricas primitivas con tipado estático
        int entero = 10;             // Tipo primitivo entero de 32 bits
        double decimalNum = 5.5;     // Tipo primitivo double de 64 bits

        // 2. Declarar variable booleana y de texto
        boolean esActivo = true;     // Tipo primitivo boolean
        String saludo = "Hola, Raúl"; // Clase String (objeto compuesto)

        // 3. Multiplicar números y usar += para sumar un extra
        // Java realiza la promoción automática del int a double en la multiplicación.
        double resultado = entero * decimalNum; // (10 * 5.5 = 55.0)
        resultado += 15.0;                      // Operador de asignación += (55.0 + 15.0 = 70.0)

        // Imprimir resultado en consola
        System.out.println("Resultado final Java: " + resultado); // Muestra: 70.0
    }
}
```

---

## Ejercicio 2: Estructuras y Flujo

### Consigna:
1. Crea un Array (tipo de dato compuesto) que contenga 6 números aleatorios.
2. Escribe un bucle `for` o `for-each` para iterar (recorrer) sobre esa colección.
3. Dentro de ese bucle, anida un condicional `if/else` que evalúe y sólo imprima en la consola aquellos números que sean mayores a 10.

### A. Solución en JavaScript
```javascript
// 1. Crear un Array con 6 números aleatorios entre 1 y 20
// Math.random() genera un decimal entre 0 y 1. Lo multiplicamos por 20 y redondeamos hacia arriba.
const numeros = [
    Math.ceil(Math.random() * 20),
    Math.ceil(Math.random() * 20),
    Math.ceil(Math.random() * 20),
    Math.ceil(Math.random() * 20),
    Math.ceil(Math.random() * 20),
    Math.ceil(Math.random() * 20)
];

console.log("Array generado en JS:", numeros);

// 2. Usar un bucle for-of (equivalente a for-each) para iterar sobre el Array
for (const numero of numeros) {
    // 3. Condicional if/else para verificar si el número es mayor a 10
    if (numero > 10) {
        console.log(`El número ${numero} es mayor a 10`);
    } else {
        // En caso contrario no hace nada, o podemos poner un log opcional:
        // console.log(`El número ${numero} es menor o igual a 10`);
    }
}
```

### B. Solución en Python
```python
import random # Importamos el módulo de generación aleatoria

# 1. Crear una Lista con 6 números aleatorios entre 1 y 20
# Usamos una lista de comprensión para generar 6 enteros aleatorios con randint
numeros = [random.randint(1, 20) for _ in range(6)]

print("Lista generada en Python:", numeros)

# 2. Bucle for para recorrer la colección
for numero in numeros:
    # 3. Condicional if/else
    if numero > 10:
        print(f"El número {numero} es mayor a 10")
    else:
        # pass es una palabra reservada en Python para indicar que no haga nada
        pass 
```

### C. Solución en C#
```csharp
using System;

class Program
{
    static void Main()
    {
        // Crear instancia del generador de números aleatorios
        Random random = new Random();

        // 1. Declarar un Array de tamaño fijo 6 y llenarlo con números del 1 al 20
        int[] numeros = new int[6];
        for (int i = 0; i < 6; i++)
        {
            numeros[i] = random.Next(1, 21); // Next(1, 21) da enteros del 1 al 20
        }

        Console.WriteLine("Array generado en C#: [" + string.Join(", ", numeros) + "]");

        // 2. Bucle foreach para recorrer la colección
        foreach (int numero in numeros)
        {
            // 3. Condicional if-else
            if (numero > 10)
            {
                Console.WriteLine("El número " + numero + " es mayor a 10");
            }
            else
            {
                // Código opcional si es menor o igual a 10
            }
        }
    }
}
```

### D. Solución en Java
```java
import java.util.Arrays;
import java.util.Random;

public class Ejercicio2 {
    public static void main(String[] args) {
        // Instancia del generador pseudoaleatorio en Java
        Random random = new Random();

        // 1. Crear un Array de tamaño fijo 6
        int[] numeros = new int[6];
        for (int i = 0; i < 6; i++) {
            // nextInt(20) genera de 0 a 19. Sumamos 1 para que sea de 1 a 20.
            numeros[i] = random.nextInt(20) + 1;
        }

        // Mostrar array generado
        System.out.println("Array generado en Java: " + Arrays.toString(numeros));

        // 2. Bucle for-each (bucle for mejorado) para recorrer la colección
        for (int numero : numeros) {
            // 3. Condicional if/else
            if (numero > 10) {
                System.out.println("El número " + numero + " es mayor a 10");
            } else {
                // Opcional: no hacer nada
            }
        }
    }
}
```

---

## Ejercicio 3: Funciones

### Consigna:
1. Declara una función que tenga un nombre descriptivo y reciba dos parámetros.
2. Usa una estructura de control interna (como un `if/else`) para verificar cuál de los dos parámetros es mayor.
3. Utiliza el comando de flujo `return` para devolver el parámetro ganador. Luego ejecuta la función, pásale los datos y evalúa el resultado.

### A. Solución en JavaScript
```javascript
// 1. Declarar función con nombre descriptivo y dos parámetros
function obtenerNumeroMayor(numeroA, numeroB) {
    // 2. Condicional para evaluar cuál es mayor
    if (numeroA > numeroB) {
        // 3. Usar return para devolver el mayor
        return numeroA; 
    } else if (numeroB > numeroA) {
        return numeroB;
    } else {
        // Si son iguales, devolvemos cualquiera o un mensaje
        return numeroA; 
    }
}

// Ejecutar la función pasándole valores de prueba
let resultadoMayor = obtenerNumeroMayor(15, 27);

// Evaluar e imprimir el resultado
console.log("El número mayor en JS es:", resultadoMayor); // Muestra: 27
```

### B. Solución en Python
```python
# 1. Declarar la función
def obtener_numero_mayor(numero_a, numero_b):
    # 2. Evaluar condiciones
    if numero_a > numero_b:
        # 3. Retornar el ganador
        return numero_a
    else:
        # Si b es mayor o son iguales, retorna b
        return numero_b

# Ejecutar pasándole datos
resultado_mayor = obtener_numero_mayor(15, 27)

# Evaluar e imprimir
print("El número mayor en Python es:", resultado_mayor) # Muestra: 27
```

### C. Solución en C#
```csharp
using System;

class Program
{
    // 1. Declarar la función estática (porque Main es estático) indicando tipos de datos
    static int ObtenerNumeroMayor(int numeroA, int numeroB)
    {
        // 2. Condicional interno
        if (numeroA > numeroB)
        {
            // 3. Retorno del flujo
            return numeroA;
        }
        else
        {
            return numeroB;
        }
    }

    static void Main()
    {
        // Ejecutar pasándole datos
        int resultadoMayor = ObtenerNumeroMayor(15, 27);

        // Evaluar e imprimir
        Console.WriteLine("El número mayor en C# es: " + resultadoMayor); // Muestra: 27
    }
}
```

### D. Solución en Java
```java
public class Ejercicio3 {
    // 1. Declarar método estático indicando tipos de datos
    public static int obtenerNumeroMayor(int numeroA, int numeroB) {
        // 2. Condicional interno
        if (numeroA > numeroB) {
            // 3. Retorno de valor
            return numeroA;
        } else {
            return numeroB;
        }
    }

    public static void main(String[] args) {
        // Ejecutar pasándole datos
        int resultadoMayor = obtenerNumeroMayor(15, 27);

        // Evaluar e imprimir
        System.out.println("El número mayor en Java es: " + resultadoMayor); // Muestra: 27
    }
}
```
