#matriz 3x3 con numeros del 1 al 9

matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matriz:
    print(row)

#recorrer por columnas 

print("Recorrido por columnas:")

for j in range(len(matriz[0])):
    for i in range(len(matriz)):
        print(matriz[i][j], end=" ")
    print()

#suma de todos los elementos

suma_total = 0
for fila in matriz:
    for elemento in fila:
        suma_total += elemento

print(f"La suma de todos los elementos es: {suma_total}")

# Intercambio de la primera fila con la última

print(f"Matriz original: {matriz}")
for row in matriz:
    print(row)

matriz[0], matriz[-1] = matriz[-1], matriz[0]


print(f"Matriz después del intercambio: {matriz}")

for row in matriz:
    print(row)
