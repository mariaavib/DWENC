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
function act1(){
    for(let i=0;i<futbolistas.length;i++){
        if(futbolistas[i].goles > 20){
            console.log(futbolistas[i]);
        }
    }
}

//act1();

/*     - ACT 2 - Obtener el total de goles de todos los jugadores                             */

function act2(){
    let t=0;
    for(let i=0;i<futbolistas.length;i++){
        t=t+futbolistas[i].goles;
    }
    console.log(t);
}

//act2();

/*     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              */

function act3(){
    futbolistas.sort((a,b) => b.asistencias - a.asistencias);

    for(let i=0;i<futbolistas.length;i++){
        console.log('Nombre: ' + futbolistas[i].nombre +'Asistencias: ' + futbolistas[i].asistencias);
    }
}

//act3();

/*     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 */

function act4(){
    let tarjetas = {};

    for(let i=0;i<futbolistas.length;i++){
        console.log('Equipo: ' + futbolistas[i].equipo + 'Tarejtas rojas: ' + futbolistas[i].tarjetaRoja + ' Tarjetas amarillas: ' + futbolistas[i].tarjetaAmarilla);
    }
}
//act4();

/*     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   */

function act5(){
    let md;

    for(let i=0;i<futbolistas.length;i++){
        md= futbolistas[i].goles / futbolistas[i].partidosJugados;
        console.log('Jugador: ' + futbolistas[i].nombre + ' Promedio de goles: '+md);
    }

}
//act5();

/*     - ACT 6 - Encontrar el jugador con más asistencias                                     */
function act6(){
    let my = futbolistas[0].asistencias;
    for(let i=0;i<futbolistas.length;i++){
        if(my<futbolistas[i].asistencias){
            my = futbolistas[i].asistencias;
            console.log('EL futbolista con mas asistencias es: ' + futbolistas[i].nombre + 'tiene ' + my + ' asistencias');
        }
    }
}
act6();


/*     - ACT 7 - Listar los nombres de los jugadores por posición                             */

function act7(){
    for(let i=0;i<futbolistas.length;i++){
        if(futbolistas[i].posicion===futbolistas[i].posicion){
            
        }
    }
}
