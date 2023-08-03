// Consigna:
// Crear un programa que muestre:
// un input de texto
// un botón que diga Agregar tarea
// una lista ul
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.
// Para actualizar la lista se debe:
// borrar todo lo que contenga
// recorrer el array y por cada ítem insertar un ítem de lista li con el valor del ítem del array

const inputText = document.getElementById('inputText');
const button = document.getElementById('button');
const list = document.getElementById('list');

const elementos = [];

const agregar = (elementos) => {
    const indice = inputText.value;
    if (indice !== '') {
        elementos.push(indice);
        const li = document.createElement('li');
        li.innerText = indice;
        list.appendChild(li);
        inputText.value = '';
    }
}

inputText.addEventListener('input', () => agregar());
button.addEventListener('click', () => agregar(elementos));