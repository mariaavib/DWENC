async function getAutorImg() {
    let response = await fetch('https://api.escuelajs.co/api/v1/products');
    let data = await response.json();
    
    const btn = document.getElementById('prueba');
    let p = document.createElement('p');
    p.textContent = data[0].title,
    btn.appendChild(p);
    
    const btn2 = document.getElementById('imagen');
    let img = document.createElement('img');
    img.src = data[0].images[0];
    btn2.appendChild(img);
}
document.getElementById('prueba').addEventListener('click', getAutorImg);
document.getElementById('imagen').addEventListener('click', getAutorImg);