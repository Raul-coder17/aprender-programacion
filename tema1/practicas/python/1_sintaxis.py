# TEMA 1.1: SINTAXIS Y SEMÁNTICA - PRÁCTICA
#
# Instrucciones:
# 1. Corrige los errores de sintaxis comentados para que el archivo pueda ejecutarse.
# 2. Corrige el error de semántica (lógico) para que el resultado sea el correcto.
# 3. Ejecuta este archivo usando: python 1_sintaxis.py

print("--- Practicando Sintaxis y Semántica ---")

# --- 1. CORRECCIÓN DE SINTAXIS ---
# Descomenta las siguientes líneas y corrige el error de sintaxis (falta colocar los dos puntos ':' al final del if):
# edad = 20
# if edad >= 18
#     print("Eres mayor de edad")

edad = 20
if edad >= 18:
    print("Edad correcta: eres mayor de edad")


# --- 2. CORRECCIÓN DE SEMÁNTICA (BUG) ---
# El siguiente código quiere calcular el precio con descuento.
# Si un producto cuesta 100 y tiene 20 de descuento, debería costar 80.
# Corrige la línea del cálculo para que la semántica sea la correcta.

precio_original = 100
descuento = 20

# ERROR SEMÁNTICO: Modifica el operador para que reste el descuento en lugar de sumarlo.
precio_final = precio_original + descuento

print("Precio Final calculado (debería ser 80):", precio_final)

# --- 3. TU TURNO ---
# Escribe tu propia variable aquí abajo, imprímela en pantalla y experimenta:
# (Escribe tu código abajo de esta línea)

