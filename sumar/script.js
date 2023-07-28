// Consigna:
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos.
//Ejemplo:
// sumarNumeros([5, 7, 10, 12, 24]) // 58

const numeros = [5, 7, 10, 12, 24];

const sumar = (numeros) => {
    const suma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    return suma;
}
console.log(sumar(numeros))