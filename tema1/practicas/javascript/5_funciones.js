/**
 * TEMA 1.5: FUNCIONES - PRÁCTICA
 * 
 * Instrucciones:
 * 1. Completa la declaración de funciones tradicionales, flecha (arrow) y recursivas.
 * 2. Ejecuta con: node 5_funciones.js
 */

console.log("--- Practicando Funciones ---");

// 1. Función Tradicional:
// Escribe una función llamada 'saludarUsuario' que reciba 'nombre' y retorne "Bienvenido, [nombre]".
// Dale un valor por defecto al parámetro nombre de "Invitado".
// ESCRIBE TU CÓDIGO AQUÍ:


// Pruébala:
// console.log(saludarUsuario("Raúl"));
// console.log(saludarUsuario());


// 2. Función Flecha (Arrow Function):
// Convierte la siguiente función tradicional a formato de función flecha en una sola línea:
/*
function multiplicar(a, b) {
    return a * b;
}
*/

// ESCRIBE TU CÓDIGO AQUÍ:
// const multiplicarArrow = ...


// 3. Paso por referencia:
// Observa qué ocurre al pasar este objeto a una función que modifica sus propiedades.
let persona = { nombre: "Ana", edad: 25 };

function cumplirAnos(p) {
    p.edad += 1;
}

cumplirAnos(persona);
console.log("Edad después de la función (¿cambió el original?):", persona.edad);


// 4. Recursividad:
// Escribe una función recursiva llamada 'cuentaRegresiva' que reciba un número 'n'
// e imprima los números desde n hasta 1, y luego imprima "¡Despegue!".
// Pista: Recuerda colocar el caso base para no causar un bucle infinito.
// ESCRIBE TU CÓDIGO AQUÍ:

// Pruébala con: cuentaRegresiva(5);
