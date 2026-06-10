# Tema 1.7: Colecciones Dinámicas y Mutabilidad

En el desarrollo de software real, los datos rara vez son estáticos. Lo más común es iniciar con estructuras vacías (como un carrito de compras o una lista de usuarios conectados) y modificarlas conforme interactúan los usuarios.

Para entender esto, primero debemos comprender dos conceptos clave:
1.  **Mutabilidad:** La capacidad de una estructura de datos de ser modificada en memoria (añadir, editar o borrar elementos) sin necesidad de crear una estructura completamente nueva.
2.  **Tamaño Fijo vs. Tamaño Dinámico:**
    *   **Tamaño Fijo:** La estructura tiene un espacio en memoria predefinido desde su creación (ej. Arrays en C# y Java). No puede crecer ni achicarse.
    *   **Tamaño Dinámico:** La estructura puede expandirse o encogerse automáticamente en tiempo de ejecución (ej. Arrays en JS, Listas en Python, `List` en C#, `ArrayList` en Java).

---

## 1. Arrays y Listas Dinámicas
Permiten almacenar una secuencia ordenada de datos y modificarla sobre la marcha.

### JavaScript (Arrays nativos y dinámicos)
En JavaScript, los arrays son dinámicos por defecto. Pueden cambiar de tamaño y mezclar tipos de datos.

```javascript
// A. Empezar vacío y llenar mediante un proceso
let carrito = []; 
carrito.push("Camisa");    // Agrega al final -> ["Camisa"]
carrito.push("Pantalón");  // ["Camisa", "Pantalón"]
carrito.unshift("Zapatos"); // Agrega al inicio -> ["Zapatos", "Camisa", "Pantalón"]

// B. Empezar con valores y modificar/borrar
let precios = [100, 200, 300];
precios[1] = 250; // Sobreescribe la posición 1 -> [100, 250, 300]

// Eliminar elementos:
precios.pop(); // Elimina el último elemento (300) -> [100, 250]
precios.splice(0, 1); // Elimina 1 elemento en la posición 0 -> [250]
```

### Python (Listas dinámicas y mutables)
En Python, el tipo `list` es nativamente dinámico y equivalente a los arrays de JS.

```python
# A. Empezar vacío y llenar mediante un proceso
carrito = []
carrito.append("Camisa")   # Agrega al final -> ["Camisa"]
carrito.append("Pantalón") # ["Camisa", "Pantalón"]
carrito.insert(0, "Zapatos") # Agrega al inicio -> ["Zapatos", "Camisa", "Pantalón"]

# B. Empezar con valores y modificar/borrar
precios = [100, 200, 300]
precios[1] = 250 # Modifica el índice 1 -> [100, 250, 300]

# Eliminar elementos:
precios.pop() # Elimina el último (300) -> [100, 250]
precios.remove(100) # Elimina por valor (busca el 100 y lo quita) -> [250]
```

### C# (Arrays fijos vs. Listas dinámicas)
*   **Array (`int[]`):** Tiene tamaño fijo. Útil si sabes que la colección nunca cambiará de tamaño.
*   **List (`List<T>`):** Tamaño dinámico. Es la colección recomendada para flujos dinámicos.

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // --- ARRAY FIJO ---
        int[] calificaciones = new int[3]; // Nace con 3 espacios vacíos (en 0)
        calificaciones[0] = 90;
        calificaciones[1] = 85;
        // calificaciones[3] = 100; // ¡ERROR en tiempo de ejecución! Fuera de límites.

        // --- LISTA DINÁMICA ---
        // A. Empezar vacía y llenar
        List<string> carrito = new List<string>();
        carrito.Add("Camisa");
        carrito.Add("Pantalón");

        // B. Modificar y eliminar
        List<int> precios = new List<int> { 100, 200, 300 };
        precios[1] = 250; // Modifica el índice 1 -> [100, 250, 300]
        
        precios.RemoveAt(2); // Elimina por índice (quita el 300)
        precios.Remove(100); // Elimina por valor
    }
}
```

### Java (Arrays fijos vs. ArrayList dinámico)
Similar a C#, Java divide las colecciones entre arrays nativos estáticos y clases de utilidad como `ArrayList`.

```java
import java.util.ArrayList;
import java.util.Arrays;

public class ColeccionesJava {
    public static void main(String[] args) {
        // --- ARRAY FIJO ---
        int[] calificaciones = new int[3]; // Tamaño fijo a 3
        calificaciones[0] = 90;

        // --- LISTA DINÁMICA ---
        // A. Empezar vacía y llenar
        ArrayList<String> carrito = new ArrayList<>();
        carrito.add("Camisa");
        carrito.add("Pantalón");

        // B. Modificar y eliminar
        ArrayList<Integer> precios = new ArrayList<>(Arrays.asList(100, 200, 300));
        precios.set(1, 250); // Modifica el índice 1 -> [100, 250, 300]

        precios.remove(2); // Elimina por índice (posición 2) -> [100, 250]
        precios.remove(Integer.valueOf(100)); // Elimina por valor -> [250]
    }
}
```

---

## 2. Estructuras Clave-Valor (Objetos y Mapas)
Permiten indexar datos mediante nombres o etiquetas de texto en lugar de números.

### JavaScript (Objetos Literales)
Son dinámicos por definición. Se les pueden añadir o quitar propiedades en cualquier momento.

```javascript
// A. Empezar vacío y llenar
let usuario = {};
usuario.nombre = "Raúl";
usuario["edad"] = 28; // Sintaxis de corchetes alternativo

// B. Modificar y eliminar
let configuracion = { volumen: 80, idioma: "es" };
configuracion.volumen = 100; // Modificar
delete configuracion.idioma;  // Eliminar propiedad
```

### Python (Diccionarios)
Los diccionarios (`dict`) se comportan de manera idéntica a los objetos de JavaScript.

```python
# A. Empezar vacío y llenar
usuario = {}
usuario["nombre"] = "Raúl"
usuario["edad"] = 28

# B. Modificar y eliminar
configuracion = {"volumen": 80, "idioma": "es"}
configuracion["volumen"] = 100 # Modificar
del configuracion["idioma"] # Eliminar clave
```

### C# (Dictionary)
Requiere tipar estrictamente el tipo de la llave (key) y del valor (value).

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // A. Empezar vacío y llenar
        Dictionary<string, string> usuario = new Dictionary<string, string>();
        usuario.Add("nombre", "Raúl");
        usuario["edad"] = "28";

        // B. Modificar y eliminar
        Dictionary<string, int> config = new Dictionary<string, int> {
            { "volumen", 80 },
            { "brillo", 50 }
        };
        config["volumen"] = 100; // Modificar
        config.Remove("brillo");  // Eliminar
    }
}
```

### Java (HashMap)
Implementa el mapeo clave-valor usando la estructura de datos `HashMap`.

```java
import java.util.HashMap;

public class MapasJava {
    public static void main(String[] args) {
        // A. Empezar vacío y llenar
        HashMap<String, String> usuario = new HashMap<>();
        usuario.put("nombre", "Raúl");
        usuario.put("edad", "28");

        // B. Modificar y eliminar
        HashMap<String, Integer> config = new HashMap<>();
        config.put("volumen", 80);
        config.put("brillo", 50);

        config.put("volumen", 100); // Sobreescribe/modifica el valor de "volumen"
        config.remove("brillo");    // Elimina la clave "brillo"
    }
}
```

---

## 3. Resumen y Equivalencias

| Concepto | JavaScript | Python | C# | Java |
| :--- | :--- | :--- | :--- | :--- |
| **Lista Dinámica** | `Array` (`[]`) | `list` (`[]`) | `List<T>` | `ArrayList<T>` |
| **Agregar elemento** | `.push(val)` | `.append(val)` | `.Add(val)` | `.add(val)` |
| **Modificar elemento** | `arr[i] = val` | `list[i] = val` | `list[i] = val` | `.set(i, val)` |
| **Eliminar elemento** | `.pop()` / `.splice()` | `.pop()` / `.remove()` | `.RemoveAt()` / `.Remove()` | `.remove(i)` / `.remove(val)` |
| **Clave-Valor** | `Object` (`{}`) | `dict` (`{}`) | `Dictionary<K, V>` | `HashMap<K, V>` |
| **Añadir/Modificar** | `obj.key = val` | `dict[key] = val` | `dict[key] = val` | `.put(key, val)` |
| **Eliminar Clave** | `delete obj.key` | `del dict[key]` | `.Remove(key)` | `.remove(key)` |
