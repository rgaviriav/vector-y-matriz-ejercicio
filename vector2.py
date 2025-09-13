import random

#declarar lista de 10 enteros

vectorEnteros = [0] * 10

#inicializar con valores aleatorios del 1 al 100
print("vector de enteros aleatorios")


for i in range(len(vectorEnteros)):
    vectorEnteros[i] = random.randint(1, 100)

    print(vectorEnteros)

#metodo for-each

vectorEnteros = [random.randint(1, 100) for _ in range(10)]

print(f"vector generado: {vectorEnteros}")

#cambiar los valores impares por ceros

for i in range(len(vectorEnteros)):
    if vectorEnteros[i] % 2 != 0:
        vectorEnteros[i]= 0

        print(f"el vector con impares cambiados a ceros es: {vectorEnteros}")

#bucle para multiplicar cada valor por su indice

for i in range(len(vectorEnteros)):
    vectorEnteros[i]= vectorEnteros * i

print(f" el vector con numeros multiplicados por su indice es: {vectorEnteros}")

