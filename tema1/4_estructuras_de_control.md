# Tema 1.4: Estructuras de Control

Las **Estructuras de Control** determinan qué instrucciones del código deben ejecutarse y cuántas veces, dependiendo de condiciones lógicas. Son el "cerebro" que dirige el flujo de ejecución de tus programas.

---

## 1. Condicionales
Permiten tomar decisiones bifurcando el flujo del programa.

### A. Condicional `if` / `else if` / `else`
Evalúa una o varias condiciones booleanas en secuencia.

#### JavaScript
```javascript
let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace mucho calor");
} else if (temperatura >= 20) {
    console.log("El clima está templado"); // Se ejecuta esta rama
} else {
    console.log("Hace frío");
}
```

#### Python
En Python se usa `elif` en lugar de `else if`, y bloques definidos por indentación.
```python
temperatura = 25

if temperatura > 30:
    print("Hace mucho calor")
elif temperatura >= 20:
    print("El clima está templado") # Se ejecuta esta rama
else:
    print("Hace frío")
```

#### C#
```csharp
int temperatura = 25;

if (temperatura > 30)
{
    Console.WriteLine("Hace mucho calor");
}
else if (temperatura >= 20)
{
    Console.WriteLine("El clima está templado"); // Se ejecuta esta rama
}
else
{
    Console.WriteLine("Hace frío");
}
```

#### Java
```java
public class Condicionales4 {
    public static void main(String[] args) {
        int temperatura = 25;

        if (temperatura > 30) {
            System.out.println("Hace mucho calor");
        } else if (temperatura >= 20) {
            System.out.println("El clima está templado"); // Se ejecuta esta rama
        } else {
            System.out.println("Hace frío");
        }
    }
}
```

### B. Condicional Múltiple: `switch` / `match`
Es una alternativa más limpia al `if-else` encadenado cuando se evalúa una única variable contra muchos valores posibles.

*   **JavaScript:** Usa `switch` y requiere la palabra clave `break` al final de cada caso para evitar que la ejecución continúe al siguiente caso ("fall-through").
*   **Python (desde v3.10+):** Usa la palabra clave `match` (conocida como Structural Pattern Matching), que es más segura y moderna ya que no sufre de fall-through.
*   **C# y Java:** Utilizan `switch`. Obligan a colocar un `break` al final de cada caso para evitar el fall-through accidental (aunque Java 12+ y C# 8+ también soportan expresiones Switch más concisas y modernas).

#### JavaScript
```javascript
let diaSemana = "Martes";

switch (diaSemana) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Martes":
        console.log("Segundo día de semana"); // Se ejecuta
        break;
    default:
        console.log("Otro día");
}
```

#### Python (v3.10+)
```python
dia_semana = "Martes"

match dia_semana:
    case "Lunes":
        print("Inicio de semana")
    case "Martes":
        print("Segundo día de semana") # Se ejecuta
    case _: # Equivalente a 'default'
        print("Otro día")
```

#### C#
```csharp
string diaSemana = "Martes";

switch (diaSemana)
{
    case "Lunes":
        Console.WriteLine("Inicio de semana");
        break;
    case "Martes":
        Console.WriteLine("Segundo día de semana"); // Se ejecuta
        break;
    default:
        Console.WriteLine("Otro día");
        break; // Requerido en C#
}
```

#### Java
```java
public class Switch4 {
    public static void main(String[] args) {
        String diaSemana = "Martes";

        switch (diaSemana) {
            case "Lunes":
                System.out.println("Inicio de semana");
                break;
            case "Martes":
                System.out.println("Segundo día de semana"); // Se ejecuta
                break;
            default:
                System.out.println("Otro día");
                break; // Requerido en Java
        }
    }
}
```

---

## 2. Bucles o Ciclos
Permiten repetir un bloque de código varias veces.

### A. Bucle `for` (Tradicional)
Ideal cuando sabes de antemano el número exacto de iteraciones que quieres realizar.

*   *Nota:* Python no usa el `for` estilo C tradicional `(inicializar; condicion; paso)`. En Python se utiliza la función `range()`.

#### JavaScript
```javascript
// Imprimir números del 1 al 3
for (let i = 1; i <= 3; i++) {
    console.log(i); 
}
```

#### Python
```python
# Imprimir números del 1 al 3 (el límite superior en range no es inclusivo)
for i in range(1, 4):
    print(i)
```

#### C#
```csharp
for (int i = 1; i <= 3; i++)
{
    Console.WriteLine(i);
}
```

#### Java
```java
public class ForLoop4 {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
        }
    }
}
```

### B. Bucle `while`
Se ejecuta indefinidamente mientras una condición se mantenga verdadera. Se utiliza cuando el número de iteraciones es dinámico o desconocido.

#### JavaScript
```javascript
let contador = 1;
while (contador <= 3) {
    console.log(contador);
    contador++; // Si no incrementamos, el bucle será infinito
}
```

#### Python
```python
contador = 1
while contador <= 3:
    print(contador)
    contador += 1 # Python no tiene el operador '++'
```

#### C#
```csharp
int contador = 1;
while (contador <= 3)
{
    Console.WriteLine(contador);
    contador++;
}
```

#### Java
```java
public class WhileLoop4 {
    public static void main(String[] args) {
        int contador = 1;
        while (contador <= 3) {
            System.out.println(contador);
            contador++;
        }
    }
}
```

### C. Bucle Especial: `for-each` / `for-in` / `for-of`
Diseñado específicamente para recorrer colecciones (como listas o arrays) de manera sencilla y segura, sin lidiar con índices manuales.

*   **JavaScript:** Usa `for...of` para recorrer los *valores* de un array, y `for...in` para recorrer las *claves/propiedades* de un objeto.
*   **Python:** El bucle `for element in lista` es un foreach por definición.
*   **C# y Java:** Tienen soporte para recorrer colecciones directamente. C# usa la palabra reservada `foreach`, y Java utiliza el bucle `for` mejorado (*enhanced for loop*) con una sintaxis de dos puntos `:`.

#### JavaScript
```javascript
const nombres = ["Ana", "Raúl", "Luis"];

// Recorrer valores
for (const nombre of nombres) {
    console.log(nombre); // Imprime "Ana", luego "Raúl", luego "Luis"
}
```

#### Python
```python
nombres = ["Ana", "Raúl", "Luis"]

for nombre in nombres:
    print(nombre)
```

#### C#
```csharp
string[] nombres = { "Ana", "Raúl", "Luis" };

foreach (string nombre in nombres)
{
    Console.WriteLine(nombre);
}
```

#### Java
```java
public class ForEach4 {
    public static void main(String[] args) {
        String[] nombres = { "Ana", "Raúl", "Luis" };

        for (String nombre : nombres) { // Usa ':' para simular "en" o "foreach"
            System.out.println(nombre);
        }
    }
}
```

### D. Bucle `do-while`
Garantiza que el bloque de código se ejecute **al menos una vez** antes de evaluar si la condición es verdadera para continuar.

*   *Nota:* Python **no** tiene un bucle `do-while` de forma nativa. Se debe simular usando un bucle `while True` con un condicional de parada `break` al final.

#### JavaScript
```javascript
let contador = 5;
do {
    console.log("Se ejecuta al menos una vez"); // Se imprime una vez
    contador++;
} while (contador < 5); // La condición es falsa (5 < 5 es false), el bucle se detiene
```

#### Python (Simulación)
```python
contador = 5
while True:
    print("Se ejecuta al menos una vez") # Se imprime una vez
    contador += 1
    if not (contador < 5): # Condición inversa para detener el ciclo
        break
```

#### C#
```csharp
int contador = 5;
do
{
    Console.WriteLine("Se ejecuta al menos una vez");
    contador++;
} while (contador < 5);
```

#### Java
```java
public class DoWhile4 {
    public static void main(String[] args) {
        int contador = 5;
        do {
            System.out.println("Se ejecuta al menos una vez");
            contador++;
        } while (contador < 5);
    }
}
```

---

## 3. Control de Flujo Interno (Comandos Especiales)

Permiten modificar el comportamiento natural de los bucles y funciones desde adentro.

*   `break`: Rompe y sale completamente del bucle actual de manera inmediata.
*   `continue`: Se salta el resto del código en la iteración actual y pasa directamente a evaluar la siguiente iteración del bucle.
*   `return`: Termina de inmediato la ejecución de la función actual y (opcionalmente) devuelve un valor.

### Ejemplo de `break` y `continue` en bucle:

#### JavaScript
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue; // Se salta el 2. El código de abajo no se ejecuta en esta vuelta.
    }
    if (i === 4) {
        break; // Rompe el bucle por completo al llegar a 4.
    }
    console.log(i); // Imprimirá solo 1 y 3.
}
```

#### Python
```python
for i in range(1, 6):
    if i == 2:
        continue # Se salta el 2
    if i == 4:
        break # Detiene el bucle al llegar a 4
    print(i) # Imprimirá solo 1 y 3
```

#### C#
```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 2)
    {
        continue; // Se salta el 2
    }
    if (i == 4)
    {
        break; // Termina el ciclo
    }
    Console.WriteLine(i); // Imprimirá solo 1 y 3
}
```

#### Java
```java
public class BreakContinue4 {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 2) {
                continue; // Se salta el 2
            }
            if (i == 4) {
                break; // Rompe el bucle
            }
            System.out.println(i); // Imprime 1 y 3
        }
    }
}
```
