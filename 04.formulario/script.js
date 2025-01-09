document.getElementById('formulario').addEventListener('submit', async function (event){
  event.preventDefault(); //Desactivar el envio al php directamente

  const usuario = document.getElementById('usuario').value;
  const contrasenia = document.getElementById('contrasenia').value;

  //Crear un objeto con los datos del fomulario
  const datosForm = new FormData();
  datosForm.append('usuario', usuario);
  datosForm.append('contrasenia', contrasenia);

  try{
    const response = await fetch('formulario.php', {
      method: 'POST',
      body: datosForm,
    });
    //Verifica si la respuesta del servidor es correcta
    if(response.ok){
      const result = await response.text();
      document.getElementById('resultado').innerText = `Respuesta del servidor: ${result}`;
    }else{
      document.getElementById('resultado').innerText = `Error al enviar los datos`;
    }
  }catch(error){
    console.log('Error', error);
    document.getElementById('resultado').innerText = 'Error de conexion';
  }
})
  
    
  