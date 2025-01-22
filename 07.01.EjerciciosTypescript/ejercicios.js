/**Ejercicio 1 */
console.log("Ejercicio 1");
var nombre = 'Miguel';
var edad = '30';
var personaje = {
    nombre: nombre,
    edad: edad
};
console.log(personaje);
/**Ejercicio 2 */
console.log("Ejercicio 2 ");
var spiderman = {
    nombre: 'Peter Parker',
    poderes: ['trepar', 'fuerza', 'agilidad', 'telas de araña']
};
console.log(spiderman);
/**Ejercicio 3 */
console.log("Ejercicio 3");
var Rombo = /** @class */ (function () {
    function Rombo(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalHorizontal = DiagonalHorizontal;
        this.DiagonalVertical = DiagonalVertical;
    }
    Rombo.prototype.calcularArea = function () {
        return (this.DiagonalVertical * this.DiagonalHorizontal) / 2;
    };
    return Rombo;
}());
var rombo = new Rombo(10, 8);
console.log("El \u00E1rea del rombo es ".concat(rombo.calcularArea()));
/**Ejercicio 4 */
console.log("Ejercicio 4");
//Funcion normal
function suma(a, b) {
    return a + b;
}
//Funcion tipo flecha
var suma1 = function (a, b) {
    return a + b;
};
console.log("La suma de dos numeros es ".concat(suma1(1, 2)));
