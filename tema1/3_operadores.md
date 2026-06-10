# Tema 1.3: Operadores

Los **Operadores** son los símbolos y palabras reservadas que nos permiten manipular, comparar y procesar los valores de nuestras variables.

---

## 1. Operadores Aritméticos
Se utilizan para realizar cálculos matemáticos estándar.

| Operación | Operador | JS | Python | C# | Java |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Suma** | `+` | `a + b` | `a + b` | `a + b` | `a + b` |
| **Resta** | `-` | `a - b` | `a - b` | `a - b` | `a - b` |
| **Multiplicación** | `*` | `a * b` | `a * b` | `a * b` | `a * b` |
| **División** | `/` | `a / b` | `a / b` | `a / b` | `a / b` |
| **Módulo** (Residuo de div.) | `%` | `a % b` | `a % b` | `a % b` | `a % b` |
| **Potencia** | `**` (o equivalente) | `a ** b` | `a ** b` | `Math.Pow(a, b)` | `Math.pow(a, b)` |

### Diferencia Importante en la División y Potencia:
*   En **JavaScript** y **Python**, `/` realiza una división decimal completa (ej. `5 / 2 = 2.5`).
*   En **C#** y **Java**, si divides dos números enteros, el resultado será un entero truncado (ej. `5 / 2 = 2`). Si quieres un decimal, al menos uno de los números debe ser decimal (ej. `5.0 / 2 = 2.5`).
*   En **C#** y **Java**, el operador `**` no existe para la potencia; se utiliza `Math.Pow(a, b)` (C#) y `Math.pow(a, b)` (Java).

### Ejemplos Prácticos:

#### JavaScript
```javascript
let suma = 5 + 3;       // 8
let division = 5 / 2;   // 2.5
let modulo = 5 % 2;     // 1 (el residuo de dividir 5 entre 2)
let potencia = 2 ** 3;   // 8 (2 elevado a la 3)
```

#### Python
```python
suma = 5 + 3            # 8
division = 5 / 2        # 2.5
division_entera = 5 // 2 # 2 (Python tiene un operador específico para truncar la división: //)
modulo = 5 % 2          # 1
potencia = 2 ** 3       # 8
```

#### C#
```csharp
using System;

class Program
{
    static void Main()
    {
        int suma = 5 + 3;            // 8
        int divisionEntera = 5 / 2;  // 2 (Truncado porque ambos operandos son int)
        double divisionReal = 5.0 / 2; // 2.5 (Uno de los operandos es double)
        int modulo = 5 % 2;          // 1
        double potencia = Math.Pow(2, 3); // 8 (Devuelve un double)
    }
}
```

#### Java
```java
public class Operadores3 {
    public static void main(String[] args) {
        int suma = 5 + 3;            // 8
        int divisionEntera = 5 / 2;  // 2 (Truncado)
        double divisionReal = 5.0 / 2; // 2.5
        int modulo = 5 % 2;          // 1
        double potencia = Math.pow(2, 3); // 8.0 (Devuelve un double)
    }
}
```

---

## 2. Operadores de Comparación
Se utilizan para comparar dos valores y siempre devuelven un valor booleano (`true`/`false`).

| Comparación | Operador | JS | Python | C# | Java |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Igualdad de valor** | `==` | `a == b` | `a == b` | `a == b` | `a == b` (primitivos) |
| **Igualdad estricta (valor y tipo)** | `===` | `a === b` | N/A | N/A | N/A |
| **Desigualdad** | `!=` | `a != b` | `a != b` | `a != b` | `a != b` |
| **Desigualdad estricta** | `!==` | `a !== b` | N/A | N/A | N/A |
| **Mayor que / Menor que** | `>` / `<` | `a > b` | `a > b` | `a > b` | `a > b` |
| **Mayor o igual / Menor o igual** | `>=` / `<=` | `a >= b` | `a >= b` | `a >= b` | `a >= b` |

### El caso especial de JavaScript: `==` vs `===`
En JavaScript, `==` realiza una conversión automática antes de comparar (tipado débil). El operador `===` (igualdad estricta) compara tanto el **valor** como el **tipo de dato** sin hacer conversiones.
*   `"5" == 5` es `true` (JS convierte el texto en número).
*   `"5" === 5` es `false` (Uno es String y el otro es Number).
En Python, C# y Java, `==` compara directamente sin hacer coerciones locas entre textos y números, por lo que `"5" == 5` dará un error de compilación (C#/Java) o dará `False` (Python).

*Nota sobre Java:* Para comparar la igualdad de contenidos en objetos (como cadenas de texto `String`), en Java se debe utilizar el método `.equals()` en lugar de `==` (ya que `==` en objetos compara la dirección de memoria). Ej: `texto1.equals(texto2)`.

---

## 3. Operadores Lógicos y de Asignación

### A. Operadores Lógicos
Sirven para combinar múltiples condiciones.

*   **AND (Y lógico):** Da verdadero únicamente si **ambas** condiciones son verdaderas.
    *   JS / C# / Java: `&&`
    *   Python: `and`
*   **OR (O lógico):** Da verdadero si **al menos una** de las condiciones es verdadera.
    *   JS / C# / Java: `||`
    *   Python: `or`
*   **NOT (NO lógico / Negación):** Invierte el valor booleano.
    *   JS / C# / Java: `!`
    *   Python: `not`

#### Ejemplos Prácticos:
```javascript
// JavaScript
let tieneLlave = true;
let conoceClave = false;
let puedeEntrar = tieneLlave && conoceClave; // false (Ambos deben ser true)
let puedeEntrarOR = tieneLlave || conoceClave; // true (Basta con que uno sea true)
let denegado = !tieneLlave; // false (Invierte true)
```

```python
# Python
tiene_llave = True
conoce_clave = False
puede_entrar = tiene_llave and conoce_clave # False
puede_entrar_or = tiene_llave or conoce_clave # True
denegado = not tiene_llave # False
```

```java
// Java
boolean tieneLlave = true;
boolean conoceClave = false;
boolean puedeEntrar = tieneLlave && conoceClave; // false
```

### B. Operadores de Asignación Combinada
Permiten aplicar un operador aritmético a una variable y guardar el resultado directamente en ella.

*   `=` : Asignación simple.
*   `+=` : Suma y asigna (ej. `x += 5` equivale a `x = x + 5`).
*   `-=` : Resta y asigna.
*   `*=` : Multiplica y asigna.
*   `/=` : Divide y asigna.

```javascript
let x = 10;
x += 5; // x vale 15
x *= 2; // x vale 30
```

---

## 4. Operador Ternario
Es una forma compacta de escribir un condicional `if-else` simple en una sola línea.

### Estructura:
`condicion ? valor_si_verdadero : valor_si_falso`

### Ejemplos Prácticos:

#### JavaScript
```javascript
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Imprime: "Eres mayor de edad"
```

#### C#
```csharp
int edad = 20;
string mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
Console.WriteLine(mensaje);
```

#### Java
```java
int edad = 20;
String mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
System.out.println(mensaje);
```

#### Python (Sintaxis Diferente)
Python no utiliza los símbolos `?` y `:`. En su lugar, usa palabras clave en un orden particular:
`valor_si_verdadero if condicion else valor_si_falso`

```python
edad = 20
mensaje = "Eres mayor de edad" if edad >= 18 else "Eres menor de edad"
print(mensaje) # Imprime: "Eres mayor de edad"
```
