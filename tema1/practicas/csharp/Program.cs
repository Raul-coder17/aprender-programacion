using System;

class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine();
            Console.WriteLine("==================================================");
            Console.WriteLine("    TEMA 1: PRÁCTICA Y EXPERIMENTACIÓN EN C#      ");
            Console.WriteLine("==================================================");
            Console.WriteLine("Selecciona la lección que deseas ejecutar/probar:");
            Console.WriteLine("1. Sintaxis y Semántica (Practica1)");
            Console.WriteLine("2. Variables y Tipos de Datos (Practica2)");
            Console.WriteLine("3. Operadores (Practica3)");
            Console.WriteLine("4. Estructuras de Control (Practica4)");
            Console.WriteLine("5. Funciones (Practica5)");
            Console.WriteLine("6. Ejercicios Prácticos (Practica6)");
            Console.WriteLine("0. Salir");
            Console.WriteLine("==================================================");
            Console.Write("Opción: ");
            
            string opcion = Console.ReadLine();
            Console.WriteLine();

            switch (opcion)
            {
                case "1":
                    Practica1.Ejecutar();
                    break;
                case "2":
                    Practica2.Ejecutar();
                    break;
                case "3":
                    Practica3.Ejecutar();
                    break;
                case "4":
                    Practica4.Ejecutar();
                    break;
                case "5":
                    Practica5.Ejecutar();
                    break;
                case "6":
                    Practica6.Ejecutar();
                    break;
                case "0":
                    Console.WriteLine("¡Hasta luego!");
                    return;
                default:
                    Console.WriteLine("Opción no válida.");
                    break;
            }

            Console.WriteLine("\nPresiona Enter para continuar...");
            Console.ReadLine();
        }
    }
}
