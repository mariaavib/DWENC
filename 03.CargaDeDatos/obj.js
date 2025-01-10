/*Número de documento (un valor numérico único)
● Nombre (cadena de texto)
● Edad (número entero)
● Sexo (Masculino/Femenino)
● Puesto (cadena de texto)

trim --> espacios out
split --> separar ','
*/

let empleado = [];

let dataEmpleados = `12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora`;

let personas = dataEmpleados.split('\n');
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

console.log(empleado);

/*let numDoc = prompt("Introduce numero de documento a buscar: ");*/
function buscar(numDoc,empleado){
    for(let i=0;i<empleado.length;i++){
        if(numDoc===empleado[i].id){
            return empleado[i];
        }
    }
    return false;
}
/*console.log(buscar(numDoc,empleado));*/

function añadir(empleado){
    let nuevoEmpleado = {
        id: prompt("ID: "),
        nombre: prompt("Nombre: "), 
        edad: prompt("Edad: "),
        sexo: prompt("Sexo: "),
        puesto: prompt("Puesto: "),
    };
    empleado.push(nuevoEmpleado); /*Añade el objeto entero al array*/
}
/*añadir(empleado);*/
/*console.log(empleado);*/

let empleadoBorrar = prompt("Introduce id a borrar: ");
function borrar(empleado,empleadoBorrar){
    for(let i=0;i<empleado.length;i++){
        if(empleadoBorrar===empleado[i].id){
            empleado.splice(i,1); //SPLICE --> (indiceIni,numElemtaBorrar)
        }
    }
}

borrar(empleado,empleadoBorrar);
console.log(empleado);