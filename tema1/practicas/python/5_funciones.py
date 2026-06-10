# TEMA 1.5: FUNCIONES - PRÁCTICA
#
# Instrucciones:
# 1. Completa la declaración de funciones tradicionales, lambdas y recursivas.
# 2. Ejecuta con: python 5_funciones.py

print("--- Practicando Funciones ---")

# 1. Función Tradicional:
# Escribe una función llamada 'saludar_usuario' que reciba 'nombre' y retorne "Bienvenido, [nombre]".
# Dale un valor por defecto al parámetro nombre de "Invitado".
# ESCRIBE TU CÓDIGO AQUÍ:


# Pruébala:
# print(saludar_usuario("Raúl"))
# print(saludar_usuario())


# 2. Función Lambda:
# Crea una función lambda llamada 'multiplicar_lambda' que reciba dos argumentos (a y b) y los multiplique.
# ESCRIBE TU CÓDIGO AQUÍ:
# multiplicar_lambda = ...


# 3. Paso por referencia vs valor:
# Observa cómo se comportan las variables al pasarse a una función en Python:
lista_original = [1, 2, 3]

def modificar_lista(lst):
    lst.append(4) # Agrega un elemento al final de la lista original

modificar_lista(lista_original)
print("Lista después de la función (¿cambió la original?):", lista_original)


# 4. Recursividad:
# Escribe una función recursiva llamada 'cuenta_regresiva' que reciba un número 'n'
# e imprima los números desde n hasta 1, y luego imprima "¡Despegue!".
# Pista: Recuerda colocar el caso base.
# ESCRIBE TU CÓDIGO AQUÍ:

# Pruébala con: cuenta_regresiva(5)
