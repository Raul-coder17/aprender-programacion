/**
 * TEMA 1.1: SINTAXIS Y SEMÁNTICA - PRÁCTICA
 * 
 * Instrucciones:
 * 1. Corrige los errores de sintaxis comentados para que el archivo pueda ejecutarse.
 * 2. Corrige el error de semántica (lógico) para que el resultado sea el correcto.
 * 3. Ejecuta este archivo usando: node 1_sintaxis.js
 */

console.log("--- Practicando Sintaxis y Semántica ---");

// --- 1. CORRECCIÓN DE SINTAXIS ---
// Descomenta las siguientes líneas y corrige el error de sintaxis para que sea válido:
// let nombre = ;
// console.log("Nombre:", nombre);

let nombre = "Tu Nombre"; // Corrección sugerida (puedes cambiarla)
console.log("Nombre corregido:", nombre);


// --- 2. CORRECCIÓN DE SEMÁNTICA (BUG) ---
// El siguiente código quiere calcular el precio con descuento.
// Si un producto cuesta 100 y tiene 20 de descuento, debería costar 80.
// Corrige la línea del cálculo para que la semántica sea la correcta.

let precioOriginal = 100;
let descuento = 20;

// ERROR SEMÁNTICO: Modifica el operador para que reste el descuento en lugar de sumarlo.
let precioFinal = precioOriginal + descuento; 

console.log("Precio Final calculado (debería ser 80):", precioFinal);

// --- 3. TU TURNO ---
// Escribe tu propia variable aquí abajo, imprímela en pantalla y experimenta:
// (Escribe tu código abajo de esta línea)

