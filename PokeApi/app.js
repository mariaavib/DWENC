
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
async function informacion(){
    let pokemonBusc = document.getElementById('pokemon-input').value;
    console.log(pokemonBusc);
    let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`);
    let pok = await response.json();
    console.log(pok.name,pok.id,pok.sprites);
    //console.log(pok);

    const informacion = document.getElementById("pokemon-data");
    const id = document.createElement("p");
    id.innerText= "ID: "+pok.id;
    informacion.appendChild(id);



    for(let i=0;i<pok.sprites;i++){
        const pokemon = pok.sprites[i];
        const img = document.createElement("img");
        img.src=pokemon.image;
        informacion.appendChild(img);
    }

}
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon(){
    /**
     * Tu código aquí.
     */



}

/**
 *  Descomentar para hacer uso de la función.
 */
//document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    /**
     * Tu código aquí.
     */
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/
/**
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/
