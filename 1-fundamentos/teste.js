var cachorro = function(x){
    return function(y){

        return x+y
    }
};


var teste =cachorro(3)(4);

//console.log(teste)





grita = function (nome,local){

    console.log(nome+"tá frio "+local)
}

animal = function(grita){

    return function(x){

        return function(y){

            grita(x,y)
        }
    }

}


var gato = animal(grita)('caos')('São Paulo');



var demethodize = function(func){
    return function(x,y){

        return func.call(x,y)
    }
}

var soma = demethodize(Number.prototype.add)(3,4);

console.log(soma);
