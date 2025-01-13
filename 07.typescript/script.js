var interMiami = 11;
var fcDallas = 11;
var celia = 1;
var juegaCelia = true;
var palabras = "Me emocioné al ver a Celia";
function jugar(equipo1, equipo2, juegaCelia) {
    var motivo = '';
    if (juegaCelia) {
        equipo1 += celia;
        motivo = ' por que juega Celia';
    }
    if (equipo1 > equipo2)
        console.log("Gana Inter Miami".concat(motivo));
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaCelia);
