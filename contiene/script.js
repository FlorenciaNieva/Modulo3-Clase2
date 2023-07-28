// Consigna:
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros.
// Ejemplo:
// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

const contiene = (numero, numeros) => {
    const contieneNumero = numeros.includes(numero);
    return contieneNumero;
}
console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]));
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));