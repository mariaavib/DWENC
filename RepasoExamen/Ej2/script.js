'use strict'

const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { nombre: "Sara", edad: 22, ciudad: "Sevilla" },
    { nombre: "Miguel", edad: 28, ciudad: "Valencia" },
    { nombre: "Lucía", edad: 35, ciudad: "Bilbao" }
];


/**
 *  1. Obtener un array con todos los nombres
 */
function obtenerNombres(){
    let nombres = [];
    for(let i=0;i<personas.length;i++){
        nombres.push(personas[i].nombre);
    }
    document.write(nombres);
    console.log(nombres.join);
}
obtenerNombres();

/**
 *  2. Encontrar a la persona con nombre "Sara" y mostrar su nombre y edad
 */
function buscar(){
    for(let i=0;i<personas.length;i++){
        if(personas[i].nombre === "Sara"){
            document.write('<br><br>'+personas[i].nombre + personas[i].edad);
        }
    }
}
buscar();

/**
 *  3. Almacenar en un array nuevo llamado "mayoresDe25" todas las personas que sean mayores de 25 y mostrarlos por pantalla
 */
function almacenar() {
    let mayoresDe25 = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > 25) {
            mayoresDe25.push(personas[i].nombre);
        }
    }
    document.write('<br><br>Personas mayores de 25:<br>');
    document.write(mayoresDe25.join(", "));
}
almacenar();

/**
 *  4. Calcular la edad promedio de todas las personas
 */
function promedio(){
    let md = 0;
    let s = 0;
    for(let i=0;i<personas.length;i++){
        s+=personas[i].edad
    }
    md=s/personas.length;
    document.write("<br><br>Promedio de edad de todas las personas"+md);
}
promedio();
/**
 *  5. Agregar una nueva propiedad (atributo) a cada persona, por ejemplo, un valor booleano que se llame "activoEnTrabajo"
 */
function agregar(){
    for(let i=0;i<personas.length;i++){
        personas[i].activoEnTrabajo=false;
    }
    console.log(personas);
}
agregar(); 
/**
 *  6. Listar todas las ciudades sin duplicar
 */
function listar(){
    let ciudades={};
    for(let i=0;i<personas.length;i++){
        let ciudad=personas[i].ciudad;
        if(!ciudades[ciudad]){
            ciudades[ciudad]=[];
        }
        ciudades[ciudad].push(ciudad);
    }
    console.log(ciudades);
}
listar();

/**
 *  7. Ordenar el array por edad (de menor a mayor)
 */
function ordenar() {
    personas.sort((a, b) => a.edad - b.edad);
    for (let i = 0; i < personas.length; i++) {
        document.write("<br><br>Nombre: " + personas[i].nombre + " edad: " + personas[i].edad + '<br>');
    }
}
ordenar();
/**
 *  8. Contar el número de personas por ciudad.
 */
function contar(){
    let ciudades ={};
    for(let i=0;i<personas.length;i++){
        let ciudad=personas[i].ciudad;
        if(!ciudades[ciudad]){
            ciudades[ciudad] = 0;
        }
        ciudades[ciudad]++;
    }
    for (const ciudad in ciudades) {
      document.write("Ciudad: " + ciudad + ", Número de personas: " + ciudades[ciudad] + "<br>");
    }
    console.log(ciudades);
}
contar();

/**
 *  9. Obtener el objeto de persona con mayor edad y mostrar su nombre, edad y ciudad
 */
function mayor(){
    personas.sort((a,b)=> b.edad-a.edad);
    let mayor = personas[0];
    document.write("<br>Nombre: "+mayor.nombre);
    document.write("Edad: "+mayor.edad);
    document.write("Ciudad: "+mayor.ciudad);
}
mayor();
/**
 * 10. Comprobar si todas las personas son mayores de 20 años y mostrar un mensaje por pantalla ("Son mayores de 20") en caso de que sea cierto.
 */
function mayores(){
    let men=0;
    for(let i=0;i<personas.length;i++){
        if(personas[i].edad<20){
            men++;
        }
    }
    if(men===0){
        console.log("Todas las personas son mayores de 20");
    }else{
        console.log("No todas las personas son mayores a 20");
    }

}
mayores();