using System;
using System.Collections.Generic;

public static class Practica2
{
    public static void Ejecutar()
    {
        Console.WriteLine("--- Practicando Variables y Tipos de Datos ---");

        // 1. Declara variables específicas de C# indicando el tipo (tipado estático):
        // Declara un int 'edad', un double 'precio', un bool 'esActivo' y un string 'mensaje'.
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Descomenta la siguiente sección para verificar que tus variables imprimen correctamente:
        /*
        Console.WriteLine("Edad: " + edad);
        Console.WriteLine("Precio: " + precio);
        Console.WriteLine("Activo: " + esActivo);
        Console.WriteLine("Mensaje: " + mensaje);
        */


        // 2. Colecciones en C#:
        // Declara un Array de string de tamaño 3 llamado 'colores' con 3 colores de tu elección:
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Declara un Dictionary de string y string llamado 'auto' y agrega marca, modelo y año:
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Declara una Tupla llamada 'coordenadas' con dos enteros:
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Descomenta para imprimir tus colecciones:
        /*
        Console.WriteLine("Colores: " + string.Join(", ", colores));
        Console.WriteLine("Auto Marca: " + auto["marca"]);
        Console.WriteLine("Coordenadas: " + coordenadas);
        */


        // 3. Experimento de Tipado Fuerte en C#:
        // Intenta compilar: int resultado = "5" + 5;
        // Notarás que el compilador no lo permite. 
        // Realiza una conversión explícita usando Convert.ToInt32() para que compile y sume 10.
        // ESCRIBE TU CÓDIGO AQUÍ:

    }
}
