let interMiami: number = 11
let fcDallas: number = 11
let celia: number = 1
let juegaCelia: boolean = true


let palabras: string = "Me emocioné al ver a Celia"

function jugar(equipo1: number, equipo2: number, juegaCelia: boolean): void{
    let motivo:string = ''
    if(juegaCelia){
      equipo1+= celia  
      motivo = ' por que juega Celia'
    } 
    if(equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
    if(equipo1 == equipo2) console.log("Empatan")
    if(equipo1 < equipo2) console.log("Gana FC Dallas")
}

jugar(interMiami,fcDallas,juegaCelia);