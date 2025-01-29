var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Ejercicio1 */
console.log("Ejercicio 1");
var Ejercicio2 = /** @class */ (function () {
    function Ejercicio2(cadena, numero, boolean, any, array) {
        this.cadena = cadena;
        this.numero = numero;
        this.boolean = boolean;
        this.any = any;
        this.array = array;
    }
    return Ejercicio2;
}());
var objEjercicio2 = new Ejercicio2('Hola', 2, true, { nombre: "Objeto" }, ['uno', 'dos', 'tres']);
console.log(objEjercicio2);
/**Ejercicio 2 */
console.log("Ejercicio 2");
var Rectangulo = /** @class */ (function () {
    function Rectangulo(Base, Altura) {
        this.Base = Base;
        this.Altura = Altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return (this.Base * this.Altura);
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(10, 8);
console.log("El \u00E1rea del rectangulo es ".concat(rectangulo.calcularArea()));
/**Ejercicio 3 */
console.log("Ejercicio 3");
var Figura = /** @class */ (function () {
    function Figura(Base, Altura) {
        this.Base = Base;
        this.Altura = Altura;
    }
    return Figura;
}());
var Rectangulo2 = /** @class */ (function (_super) {
    __extends(Rectangulo2, _super);
    function Rectangulo2(Base, Altura) {
        return _super.call(this, Base, Altura) || this;
    }
    Rectangulo2.prototype.calcularArea = function () {
        return this.Base * this.Altura;
    };
    return Rectangulo2;
}(Figura));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(Base, Altura) {
        return _super.call(this, Base, Altura) || this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.Base * this.Altura) / 2;
    };
    return Triangulo;
}(Figura));
var triangulo = new Triangulo(2, 5);
console.log("El area del triangulo es ".concat(triangulo.calcularArea()));
var rectangulo2 = new Rectangulo(2, 5);
console.log("El area del rectangulo es ".concat(rectangulo2.calcularArea()));
/**Ejercicio 4 */
console.log("Ejercicio 4");
function getVillano(nombre, edad, arma) {
    if (arma === void 0) { arma = 'Pistola'; }
    var mensaje;
    if (edad != undefined) {
        mensaje = "".concat(nombre, " tiene una edad de: ").concat(edad, " y arma ").concat(arma);
    }
    else {
        mensaje = "".concat(nombre, " tiene una ").concat(edad);
    }
    console.log(mensaje);
}
getVillano('maria', 20);
/**Ejercicio 5 */
console.log("Ejercicio 5");
var obtenerDoble = function (a, b) { return (a + b) * 2; };
var obtenerTriple = function (a, b, c) { return (a + b + c) * 3; };
console.log(obtenerDoble(1, 2));
console.log(obtenerTriple(1, 2, 4));
/**Ejercicio 6 */
console.log("Ejercicio 6");
var camaleon = {
    tipo: "Reptil",
    peculariedad: "camuflarse"
};
console.log(camaleon.tipo);
console.log(camaleon.peculariedad);
