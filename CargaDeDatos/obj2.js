//Funcion para carhar datos con fetch
let empleado = [];
function cargarDatosConFetch(){
    fetch('./empleados2DAW.txt') //Ruta del archivo
        .then(response => {
            if(!response.ok) {
                throw new Error('Error al cargar el archivo');
            }
            return response.text(); //Leemos el archivo como texto
        })
        .then(data => {
            //Convertimos los datos a objetos
            cargarDatos(empleado,data); 
            //Mostramos los empleados cargados
            mostrarEmpleados(empleado);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

function cargarDatos(empleado,data){
    let personas = data.split('\n');
    /*console.log(personas);*/

    let datosPersona = new Array();

    for(i=0;i < personas.length;i++)
        datosPersona[i] = personas[i].split(',');

    /*console.log(datosPersona);*/

    for(i=0;i<datosPersona.length;i++){
        let datosEmpleado = {
            id: datosPersona[i][0],
            nombre: datosPersona[i][1],
            edad: datosPersona[i][2],
            sexo: datosPersona[i][3],
            puesto: datosPersona[i][4],
        };
        empleado.push(datosEmpleado);
    }
}
/* Mostrar datos */
function mostrarEmpleados(empleados) {
    console.log("Empleados:");
    empleados.forEach(empleado => {
        console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Sexo: ${empleado.sexo}, Puesto: ${empleado.puesto}`);
    });
}

cargarDatosConFetch();