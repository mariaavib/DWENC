//Función usando fetch con promesas
function getDogWithPromise() {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el fichero");
            } else {
                return response.json();
            }
        })
        .then(data => {
            mostrarPerros(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function mostrarPerros(data) {
    const btn = document.getElementById('fetch');
    for (let i = 0; i < data.length; i++) {
        const perro = data[i]; 
        const img = document.createElement("img");
        img.src = perro.url;
        btn.appendChild(img);
    }
}

//Función usando async/await
async function getDogWithAsyncAwait() {
    
    let response = await fetch('https://api.thedogapi.com/v1/images/search');
    let data = await response.json();
    const btn2 = document.getElementById('async-await');
    let img2 = document.createElement('img');
    img2.src = data[0].url;
    btn2.appendChild(img2);
}

document.getElementById('fetch').addEventListener('click', getDogWithPromise);
document.getElementById('async-await').addEventListener('click', getDogWithAsyncAwait);
