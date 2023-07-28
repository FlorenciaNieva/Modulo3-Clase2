// Consigna:
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. 
// Ejemplo:
// filtrarPorLongitudMayorA(4, [
//   'dia',
//   'remolacha',
//   'azul',
//   'sorpresa',
//   'te',
//   'verde',
// ]) // ['remolacha', 'sorpresa', 'verde']

const filtrarPorLongitud = (longitud, palabras) => {
    const palabrasFiltradas = [];

    if (palabras[0].length > longitud) {
        palabrasFiltradas.push(palabras[0]);
    }
    if (palabras[1].length > longitud) {
        palabrasFiltradas.push(palabras[1]);
    } 
    if (palabras[2].length > longitud) {
        palabrasFiltradas.push(palabras[2]);
    } 
    if (palabras[3].length > longitud) {
        palabrasFiltradas.push(palabras[3]);
    } 
    if (palabras[4].length > longitud) {
        palabrasFiltradas.push(palabras[4]);
    } 
    if (palabras[5].length > longitud) {
        palabrasFiltradas.push(palabras[5]);
    } 
    return palabrasFiltradas;
}

console.log(filtrarPorLongitud(4, ['dia', 'remolacha',    'azul', 'sorpresa', 'te', 'verde']));