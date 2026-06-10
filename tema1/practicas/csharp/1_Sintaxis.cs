using System;

public static class Practica1
{
    public static void Ejecutar()
    {
        Console.WriteLine("--- Practicando Sintaxis y Semántica ---");

        // --- 1. CORRECCIÓN DE SINTAXIS ---
        // Descomenta las siguientes líneas y corrige el error de compilación (falta el punto y coma ';'):
        // int numero = 42
        // Console.WriteLine("Número: " + numero);

        int numero = 42;
        Console.WriteLine("Número corregido: " + numero);


        // --- 2. CORRECCIÓN DE SEMÁNTICA (BUG) ---
        // El siguiente código quiere calcular el precio con descuento.
        // Si un producto cuesta 100 y tiene 20 de descuento, debería costar 80.
        // Corrige la línea del cálculo para que la semántica sea la correcta.

        int precioOriginal = 100;
        int descuento = 20;

        // ERROR SEMÁNTICO: Modifica el operador para que reste el descuento en lugar de sumarlo.
        int precioFinal = precioOriginal + descuento; 

        Console.WriteLine("Precio Final calculado (debería ser 80): " + precioFinal);

        // --- 3. TU TURNO ---
        // Escribe tu propia variable aquí abajo, imprímela en pantalla y experimenta:
        // (Escribe tu código abajo de esta línea)

    }
}
