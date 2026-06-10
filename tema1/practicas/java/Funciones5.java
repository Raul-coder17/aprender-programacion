/**
 * TEMA 1.5: FUNCIONES - PRÁCTICA
 * 
 * Instrucciones:
 * 1. Completa la declaración de métodos, sobrecarga, lambdas y recursividad.
 * 2. Ejecuta con: java Funciones5.java
 */

import java.util.function.BiFunction;

public class Funciones5 {

    // 1. Método Tradicional y Sobrecarga (Simular parámetros por defecto):
    // Escribe un método estático llamado 'saludarUsuario' que reciba un String 'nombre' 
    // y retorne "Bienvenido, " + nombre.
    // Luego, escribe una sobrecarga de 'saludarUsuario' sin parámetros que retorne
    // el saludo llamando al primer método con "Invitado".
    // ESCRIBE TU CÓDIGO AQUÍ:



    // 3. Paso por referencia helper class
    static class Persona {
        String nombre;
        int edad;
        Persona(String nombre, int edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }

    public static void cumplirAnos(Persona p) {
        p.edad += 1;
    }


    // 4. Recursividad:
    // Escribe un método estático recursivo llamado 'cuentaRegresiva' que reciba un número 'n'
    // e imprima los números desde n hasta 1, y luego imprima "¡Despegue!".
    // Pista: Recuerda colocar el caso base (n <= 0) para detener la recursividad.
    // ESCRIBE TU CÓDIGO AQUÍ:



    public static void main(String[] args) {
        System.out.println("--- Practicando Funciones/Métodos en Java ---");

        // Probando la parte 1 (Descomenta cuando lo implementes):
        /*
        System.out.println(saludarUsuario("Raúl"));
        System.out.println(saludarUsuario());
        */


        // 2. Expresiones Lambda:
        // Usa una BiFunction<Integer, Integer, Integer> para declarar una expresión lambda 
        // de una sola línea llamada 'multiplicar' que multiplique sus dos argumentos.
        // ESCRIBE TU CÓDIGO AQUÍ:
        // BiFunction<Integer, Integer, Integer> multiplicar = ...
        
        // System.out.println("Multiplicación lambda (5 * 4): " + multiplicar.apply(5, 4));


        // 3. Paso por Referencia:
        // Observa qué ocurre al pasar este objeto a un método que modifica su edad.
        Persona persona = new Persona("Ana", 25);
        cumplirAnos(persona);
        System.out.println("Edad después del método (¿cambió el original?): " + persona.edad);


        // Probando la parte 4 (Descomenta cuando lo implementes):
        // cuentaRegresiva(5);
    }
}
