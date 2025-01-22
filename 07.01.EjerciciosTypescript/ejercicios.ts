/**Ejercicio 1 */
console.log("Ejercicio 1");
let nombre: string = 'Miguel'
let edad: string = '30'
const personaje = {
    nombre: nombre,
    edad: edad
};
console.log(personaje);

/**Ejercicio 2 */
console.log("Ejercicio 2 ");
interface Superheroes {
    nombre: string;
    poderes: string[];
}

let spiderman: Superheroes = {
    nombre: 'Peter Parker',  
    poderes: ['trepar', 'fuerza', 'agilidad', 'telas de araña']
};

console.log(spiderman);

/**Ejercicio 3 */
console.log("Ejercicio 3");

class Rombo {
    DiagonalVertical: number;
    DiagonalHorizontal: number;

    constructor(DiagonalVertical: number, DiagonalHorizontal: number) {
        this.DiagonalHorizontal = DiagonalHorizontal;
        this.DiagonalVertical = DiagonalVertical;
    }

    calcularArea(): number {
        return (this.DiagonalVertical * this.DiagonalHorizontal) / 2;
    }
}

const rombo = new Rombo(10, 8);
console.log(`El área del rombo es ${rombo.calcularArea()}`);

/**Ejercicio 4 */
console.log("Ejercicio 4");

 //Funcion normal
function suma(a:number, b:number): number {
    return a+b
}

 //Funcion tipo flecha
const suma1 = (a:number, b:number): number =>{
    return a+b
}

console.log(`La suma de dos numeros es ${suma1(1,2)}`);
