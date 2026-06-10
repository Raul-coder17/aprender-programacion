/**
 * TEMA 1.3: OPERADORES - PRÁCTICA
 * 
 * Instrucciones:
 * 1. Completa las operaciones descritas en los comentarios.
 * 2. Compara el comportamiento de la división entera y flotante.
 * 3. Ejecuta con: java Operadores3.java
 */

public class Operadores3 {
    public static void main(String[] args) {
        System.out.println("--- Practicando Operadores en Java ---");

        int a = 15;
        int b = 4;

        // 1. Operadores Aritméticos:
        // Calcula la división entera de a entre b, luego la división real (decimal), 
        // y por último eleva 2 a la potencia de 3 usando Math.pow().
        // ESCRIBE TU CÓDIGO AQUÍ:


        // Descomenta para ver tus resultados:
        /*
        System.out.println("División Entera (15 / 4): " + divEntera);
        System.out.println("División Real (15.0 / 4): " + divReal);
        System.out.println("Potencia (2^3): " + potencia);
        */


        // 2. Operadores de Comparación:
        // En Java, para comparar objetos como Strings se usa .equals() en lugar de ==.
        // Compara las dos cadenas de texto de abajo usando ambos métodos y observa qué pasa.
        String str1 = new String("Hola");
        String str2 = new String("Hola");

        // ESCRIBE TU CÓDIGO AQUÍ (Usa System.out.println para ver str1 == str2 y str1.equals(str2)):


        // 3. Operadores Lógicos:
        // Evalúa si una persona puede entrar a un local. Debe ser mayor de edad (>= 18) Y tener invitación.
        int edadPersona = 20;
        boolean tieneInvitacion = true;

        // ESCRIBE TU CÓDIGO AQUÍ:
        // boolean puedeEntrar = ...
        // System.out.println("¿Puede entrar?: " + puedeEntrar);


        // 4. Operador Ternario:
        // Usa el operador ternario para guardar en la variable 'estadoPaso' el texto "Aprobado" 
        // si la nota es mayor o igual a 6.0, o "Reprobado" en caso contrario.
        double nota = 7.5;

        // ESCRIBE TU CÓDIGO AQUÍ:
        // String estadoPaso = ...
        // System.out.println("Estado de la materia: " + estadoPaso);
    }
}
