using System;

public static class Practica3
{
    public static void Ejecutar()
    {
        Console.WriteLine("--- Practicando Operadores ---");

        int a = 15;
        int b = 4;

        // 1. Operadores Aritméticos y División:
        // Divide a entre b. Como ambos son 'int', el resultado se truncará.
        // Escribe un cálculo que convierta uno de los operandos a double para obtener el decimal completo (3.75).
        // Pista: usa (double)a o a / 4.0
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Usa Math.Pow() para elevar a a la potencia de b.
        // ESCRIBE TU CÓDIGO AQUÍ:


        // 2. Operadores de Comparación:
        // C# no tiene operador === porque no mezcla tipos en comparaciones. 
        // Compara si la variable entera 'num' es igual a 15.
        int num = 15;
        // ESCRIBE TU CÓDIGO AQUÍ (Usa Console.WriteLine):


        // 3. Operadores Lógicos:
        // Evalúa si una persona puede entrar a un local. Debe ser mayor de edad (>= 18) Y tener invitación.
        int edadPersona = 20;
        bool tieneInvitacion = true;

        // ESCRIBE TU CÓDIGO AQUÍ (Usa &&, ||, !):
        bool puedeEntrar = false;
        Console.WriteLine("¿Puede entrar?: " + puedeEntrar);


        // 4. Operador Ternario:
        // Usa el operador ternario para guardar en 'estadoPaso' el texto "Aprobado" si la nota es mayor o igual a 6.0, o "Reprobado" en caso contrario.
        double nota = 7.5;

        // ESCRIBE TU CÓDIGO AQUÍ:
        string estadoPaso = "";
        Console.WriteLine("Estado de la materia: " + estadoPaso);
    }
}
