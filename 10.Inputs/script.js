document.getElementById('añadir').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'nombAmbito[]';

    document.getElementById('contenedor').appendChild(input);
});
