let map = new Map();

map.set('1', 'str'); //Un string como clave
map.set(1, 'num1'); //Un numero como clave
map.set(true, 'bool1'); //Un booleano como clave

console.log( map.get(1)   ); //'num1'
console.log( map.get('1') ); //'str'

console.log(map.size ); //3

//Usar objetos como clave

let john = { name: "John"};

let visitsCountMap = new Map(); 
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));
