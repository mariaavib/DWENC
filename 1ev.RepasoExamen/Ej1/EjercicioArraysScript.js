/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *

 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

/*     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   */

function filtrarJugadores(){
    document.write("Los jugadores con mas de 20 goles son: <br>");
    for(let i=0;i<futbolistas.length;i++){
        if(futbolistas[i].goles>20){
            //console.log(futbolistas[i].nombre);
            document.write(futbolistas[i].nombre+'<br>');
        }
    }
}
filtrarJugadores();

/*     - ACT 2 - Obtener el total de goles de todos los jugadores                             */
function totalGoles(){
    document.write("<br>El total de goles de todos los jugadores es: <br>");
    let total =0;
    for(let i=0;i<futbolistas.length;i++){
        total += futbolistas[i].goles;
    }
    document.write(total+'<br>');
}
totalGoles();

/*     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              */
function ordenar(){
    document.write("<br>Ordenar los jugadores por asistencias (de mayor a menor): <br><br>");
    futbolistas.sort((a,b) => (b.asistencias - a.asistencias));
    for(let i=0;i<futbolistas.length;i++){
        document.write("Nombre: " + futbolistas[i].nombre + " Asistencias: " + futbolistas[i].asistencias + '<br>')
    }
        
}
ordenar();

/*     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 */
function contar(){
    let tarjetas = {}; //Creo un objeto
    for(let i=0;i<futbolistas.length;i++){
        let equipo = futbolistas[i].equipo; //Guardo en una variable los equipos

        if(!tarjetas[equipo]){
            tarjetas[equipo]= {rojas: 0, amarillas: 0};
        }

        tarjetas[equipo].rojas += futbolistas[i].tarjetaRoja;
        tarjetas[equipo].amarillas += futbolistas[i].tarjetaAmarilla;
    }
    for (const equipo in tarjetas) {
        document.write("Equipo: " + equipo+ "<br>Tarjetas Rojas: " + tarjetas[equipo].rojas + "<br>Tarjetas amarillas: "+tarjetas[equipo].amarillas + "<br>");
    }
}
contar();
/*     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   */
function promedio(){
    let md = 0;
    for(let i=0;i<futbolistas.length;i++){
        md = futbolistas[i].goles/futbolistas[i].partidosJugados;
        document.write("Jugador: " + futbolistas[i].nombre + "<br>Promedio de goles: " + md + "<br><br>");
    }
}
promedio();
/*     - ACT 6 - Encontrar el jugador con más asistencias                                     */
function asistencias(){
    let futbolista;
    futbolistas.sort((a,b) => b.asistencias - a.asistencias);

    futbolista = futbolistas[0];

    document.write("El futbolista con más asistencias es: " + futbolista.nombre + " con " + futbolista.asistencias + " asistencias.<br>");
    
}
asistencias();
/*     - ACT 7 - Listar los nombres de los jugadores por posición                             */
function listar(){
    let posiciones = {};
    for(let i=0;i<futbolistas.length;i++){
        let posicion = futbolistas[i].posicion;
        if(!posiciones[posicion]){
            posiciones[posicion] = [];
        }
        posiciones[posicion].push(futbolistas[i].nombre);
    }

    for (const posicion in posiciones) {
            const elemento = posiciones[posicion];
            document.write("Posicion: "+posicion+" Nombre: "+posiciones[posicion]+"<br>");
    }
}
listar();