async function showAvatar() {
    //Leer nuestro usuario de GIT
    let response = await fetch('https://github.com/mariaavib');
    let user = await response.json();

    //Mostrar el avatar
    let img = document.createElement('img');
    img.src = user.avatar_url;
    img.className = "promise-example-avatar";
    document.body.append(img);
}