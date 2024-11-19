
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */

/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon(){
        let pokemonBusc = document.getElementById('pokemon-input').value;
        console.log(pokemonBusc);
        let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`);
        let pok = await response.json();
        console.log(pok.name,pok.id,pok.sprites);
        //console.log(pok);
    
        const informacion = document.getElementById("pokemon-data");
        const id = document.createElement("p");
        const nombre = document.createElement("p");
        id.innerText= "ID: "+pok.id;
        informacion.appendChild(id);
        nombre.innerText = "Nombre: "+pok.nombre;
        informacion.appendChild(nombre);
        const img = document.createElement("img");
        img.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`);
        informacion.appendChild(img);
}

function buscarPokemonV2(){
    let pokemonBusc = document.getElementById('pokemon-input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`)
    .then(response => {
        if(!response.ok){
            throw new Error("No exixte el pokémon");
        }
        return response.json();
    })
    .then (pokemon =>{
        const informacion = document.getElementById("pokemon-data");
        const id = document.createElement("p");
        const nombre = document.createElement("p");
        id.innerText= "ID: "+pokemon.id;
        informacion.appendChild(id);
        nombre.innerText = "Nombre: "+pokemon.name;
        informacion.appendChild(nombre);
        const img = document.createElement("img");
        img.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
        informacion.appendChild(img);
    })
    .catch(error =>{
        alert(error);
    })
}
/**
 *  Descomentar para hacer uso de la función.
 */
/*document.getElementById('search-btn').addEventListener('click',buscarPokemonV2);*/

/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    let pokemonBusc = document.getElementById('pokemon-input').value;
    $.ajax({
        type: "GET",
        url:  `https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`,
        success: function(pokemon){
            const informacion = document.getElementById("pokemon-data");
            const id = document.createElement("p");
            const nombre = document.createElement("p");
            id.innerText= "ID: "+pokemon.id;
            informacion.appendChild(id);
            nombre.innerText = "Nombre: "+pokemon.name;
            informacion.appendChild(nombre);
            const img = document.createElement("img");
            img.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
            informacion.appendChild(img);
        },
        error: function() {
            alert("No exixte el pokémon");
        }
    })
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/
/*
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/
/**
 * Ejercicio 4: 
 */

function agregar(){
    let pokemonBusc = document.getElementById('pokemon-input').value;
    let capturados = [];

    $.ajax({
        type: "GET",
        url:  `https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`,
        success: function(pokemon){
            const informacion = $("#pokemon-data");
            const id = document.createElement("p");
            const nombre = document.createElement("p");
            id.innerText= "ID: "+pokemon.id;
            informacion.append(id);
            nombre.innerText = "Nombre: "+pokemon.name;
            informacion.append(nombre);
            const img = document.createElement("img");
            img.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
            informacion.append(img);
            const boton = $('<button>').text("Agregar");
            boton.attr("id", "agregar");
            informacion.append(boton);
        },
        error: function() {
            alert("No exixte el pokémon");
        }
    })
}

$(document).ready(function(){
    $('#search-btn').on('click', agregar);
}); 


