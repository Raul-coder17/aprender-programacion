using System;

public static class Practica5
{
    // 1. Escribe la función 'SaludarUsuario' aquí adentro.
    // Debe recibir un string 'nombre' y retornar un string "Bienvenido, [nombre]".
    // Dale un valor por defecto al parámetro nombre de "Invitado".
    // Pista: Recuerda declararla como 'public static string SaludarUsuario(...)'
    // ESCRIBE TU CÓDIGO AQUÍ:



    // 2. Expresión Lambda:
    // Crea una función lambda y almacénala en un delegado Func<int, int, int> llamado 'MultiplicarLambda'.
    // Debe recibir dos enteros y retornar su producto.
    // ESCRIBE TU CÓDIGO AQUÍ:
    // public static Func<int, int, int> MultiplicarLambda = ...


    // 3. Recursividad:
    // Escribe una función recursiva llamada 'CuentaRegresiva' que reciba un número 'n'
    // e imprima los números desde n hasta 1, y luego imprima "¡Despegue!".
    // Pista: Recuerda colocar el caso base.
    // ESCRIBE TU CÓDIGO AQUÍ:
    // public static void CuentaRegresiva(int n) { ... }



    public static void Ejecutar()
    {
        Console.WriteLine("--- Practicando Funciones ---");

        // Pruébala 1:
        // Console.WriteLine(SaludarUsuario("Raúl"));
        // Console.WriteLine(SaludarUsuario());

        // Pruébala 2:
        // Console.WriteLine("Multiplicar Lambda (5 * 4): " + MultiplicarLambda(5, 4));

        // Pruébala 3 (Paso por referencia):
        // Observa qué ocurre al pasar un Array a una función que modifica sus elementos:
        int[] miLista = { 1, 2, 3 };
        DuplicarPrimerElemento(miLista);
        Console.WriteLine("Primer elemento después de la función (¿cambió el original?): " + miLista[0]);

        // Pruébala 4 (Recursión):
        // CuentaRegresiva(5);
    }

    private static void DuplicarPrimerElemento(int[] arr)
    {
        if (arr.Length > 0)
        {
            arr[0] = arr[0] * 2;
        }
    }
}
