// Consigna:
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos.
// Ejemplo:
// obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2

const numeros = [5, 7, 99, 34, 54, 2, 12];
const obtenerMenor = (arrayNumero) => {
    const arrayOrdenado = arrayNumero.sort((a, b) => {
            return a - b;
        });
    const numeroMenor = arrayOrdenado[0];
    return numeroMenor;
}
console.log(obtenerMenor(numeros));