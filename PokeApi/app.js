
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */

/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

/*async function buscarPokemon(){
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
        const img = document.createElement("img");
        img.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`);
        informacion.appendChild(img);
}*/

function buscarPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBusc}`);
    then(response => {
        if(!response.ok){
            throw new Error("No exixte el pokémon");
        }else{
            return response.json();
        }
    })

}
/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemon);



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
