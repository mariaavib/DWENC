/**Ejercicio1 */
console.log("Ejercicio 1");

class Ejercicio2 {
    public cadena: string;
    public numero: number;
    public boolean: boolean;
    public any: any;
    public array: string[];


    constructor(cadena: string, numero: number, boolean: boolean, any: any, array: string[]) {
        this.cadena = cadena
        this.numero = numero
        this.boolean = boolean
        this.any = any
        this.array = array
    }
}

const objEjercicio2 = new Ejercicio2('Hola', 2, true,{nombre: `Objeto`}, ['uno', 'dos', 'tres'] );
console.log(objEjercicio2);

/**Ejercicio 2 */
console.log("Ejercicio 2");


class Rectangulo {
    Base: number;
    Altura: number;

    constructor(Base: number, Altura: number) {
        this.Base = Base;
        this.Altura = Altura;
    }

    calcularArea(): number {
        return (this.Base * this.Altura);
    }
}

const rectangulo = new Rectangulo(10, 8);
console.log(`El área del rectangulo es ${rectangulo.calcularArea()}`);

/**Ejercicio 3 */
console.log("Ejercicio 3");

class Figura{
    Base: number;
    Altura: number;

    constructor(Base: number, Altura: number){
        this.Base = Base;
        this.Altura =  Altura;
    }

}

class Rectangulo2 extends Figura {
    constructor(Base: number, Altura: number) {
        super(Base,Altura)
    }

    calcularArea(): number {
        return this.Base * this.Altura;
    }
}

class Triangulo extends Figura {
    constructor(Base: number, Altura: number) {
        super(Base,Altura)
    }

    calcularArea(): number {
        return (this.Base * this.Altura)/2;
    }
}
const triangulo = new Triangulo(2,5);
console.log(`El area del triangulo es ${triangulo.calcularArea()}`);
const rectangulo2 = new Rectangulo(2,5);
console.log(`El area del rectangulo es ${rectangulo2.calcularArea()}`);

/**Ejercicio 4 */
function getVillano(nombre:string, edad?:number, arma:string = 'Pistola') {
    
}
