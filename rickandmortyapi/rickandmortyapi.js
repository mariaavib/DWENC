fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if(!response.ok){
            throw new Error("Error al cargar el fichero");
        }else{
            return response.json();
        }
    })
    .then(data =>{
        mostrarPersonajes(data);
    })
    .catch(error => {
        console.log(error);
    })

    function mostrarPersonajes(data){
        const contenedor = document.getElementById("contenedor");
        for (let i = 0; i < data.results.length; i++) {
            const personaje = data.results[i];
            const img = document.createElement("img");
            img.src=personaje.image;
            img.style.width = "20%";
            contenedor.appendChild(img);
        }
    }