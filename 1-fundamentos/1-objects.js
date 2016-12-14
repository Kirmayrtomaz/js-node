//conceitos de objetos
//
//
// 

var object = {};

var animal = "cachorro";

var array = [animal]; //["cachorro"]
//pode declarar objetos e funções dentro de um array 
var func = ()=> "cachorro";

var novoArray = [func()]; //["cachorro"]

console.log(animal,array,novoArray)

novoArray['animal'] //undefined


