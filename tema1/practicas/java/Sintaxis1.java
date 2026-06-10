/**
 * TEMA 1.1: SINTAXIS Y SEMÁNTICA - PRÁCTICA
 * 
 * Instrucciones:
 * 1. Corrige los errores de sintaxis comentados (si decides probarlos) para que el archivo compile.
 * 2. Corrige el error de semántica (lógico) para que el resultado sea el correcto.
 * 3. Ejecuta este archivo usando: java Sintaxis1.java
 */

public class Sintaxis1 {
    public static void main(String[] args) {
        System.out.println("--- Practicando Sintaxis y Semántica en Java ---");

        // --- 1. CORRECCIÓN DE SINTAXIS ---
        // Si descomentas la siguiente línea, verás un error de sintaxis al ejecutar (falta valor).
        // int edad = ;
        
        int edad = 25; // Corrección sugerida
        System.out.println("Edad: " + edad);


        // --- 2. CORRECCIÓN DE SEMÁNTICA (BUG) ---
        // El siguiente código quiere calcular el precio con descuento.
        // Si un producto cuesta 100 y tiene 20 de descuento, debería costar 80.
        // Corrige el operador en el cálculo para que la semántica sea correcta.

        int precioOriginal = 100;
        int descuento = 20;

        // ERROR SEMÁNTICO: Modifica el operador '+' por el correspondiente para restar el descuento.
        int precioFinal = precioOriginal + descuento; 

        System.out.println("Precio Final calculado (debería ser 80): " + precioFinal);


        // --- 3. TU TURNO ---
        // Declara tu propia variable aquí abajo, imprímela en pantalla y experimenta:
        // (Escribe tu código abajo de esta línea)

    }
}
