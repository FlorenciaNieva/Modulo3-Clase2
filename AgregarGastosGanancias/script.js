// Consigna:
// Crear un programa que muestre:
// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.
// Para actualizar la lista se debe:
// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.

const egresos = document.getElementById('inputNumberGastos');
const ingresos = document.getElementById('inputNumberGanancias');
const buttonGastos = document.getElementById('button-gastos');
const buttonGanancias = document.getElementById('button-ganancias');
const list = document.getElementById('list');
const total = document.getElementById('total');

const listaGastos = [];
const listaGanancias = [];

const agregar = () => {
    const valorEgresos = egresos.value;
    const valorIngresos = ingresos.value;
    if (valorEgresos !== '') {
        listaGastos.push(valorEgresos);
    }
    if (valorIngresos !== '') {
        listaGanancias.push(valorIngresos);
    }
    list.innerHTML = '';
    for (let indice of listaGastos) {
            const liGastos = document.createElement('li');
            liGastos.innerText = indice + '(Gasto)';
            list.appendChild(liGastos);
            egresos.value = '';
    } 
    for (let indice of listaGanancias) {
            const liGanancias = document.createElement('li');
            liGanancias.innerText = indice + '(Ganancia)';
            list.appendChild(liGanancias);
            ingresos.value = '';
    }
    totalActualizado();
}

const totalActualizado = () => {
    const totalGastos = listaGastos.reduce((acc, gasto) => acc + gasto, 0);
    const totalGanancias = listaGanancias.reduce((acc, ganancia) => acc + ganancia, 0);
    const saldoFinal = totalGanancias - totalGastos;
    total.innerText = saldoFinal;
}

buttonGastos.addEventListener('click', () => agregar());
buttonGanancias.addEventListener('click', () => agregar());