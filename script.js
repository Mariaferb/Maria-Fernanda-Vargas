var lista = [];
const tareaInput = document.getElementById('demoTareaInput');
const agregarBtn = document.getElementById('demoAgregarBtn');
const listaTareas = document.getElementById('demoListaTareas');

agregarBtn.addEventListener('click', function () {
    const nuevaTareaTexto = tareaInput.value.trim();
    if (nuevaTareaTexto === '') return;

    const nuevaTareaLi = document.createElement('li');

    const textoTarea = document.createElement('span');
    textoTarea.textContent = nuevaTareaTexto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.style.marginLeft = '10px';

    botonEliminar.addEventListener('click', function () {
        listaTareas.removeChild(nuevaTareaLi);
    });
    nuevaTareaLi.appendChild(textoTarea);
    nuevaTareaLi.appendChild(botonEliminar);

    listaTareas.appendChild(nuevaTareaLi);

    tareaInput.value = '';
});
