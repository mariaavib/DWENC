async function showAvatar() {
    //Leer nuestro usuario de GIT
    let response = await fetch('https://api.github.com/users/mariaavib');
    let usu = await response.json();

    //Mostrar el avatar
    let img = document.createElement('img');
    img.src = usu.avatar_url;
    img.className = "avatar Maria";
    document.body.append(img);

}