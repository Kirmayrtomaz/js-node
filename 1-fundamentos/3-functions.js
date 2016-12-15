var teste =  function(){

console.log(arguments);

console.log(Array.prototype.slice.call(arguments,0));


}

var cachorro = {cao : "gato"}
teste(1,2,3,cachorro)



var test_ = function(){

  
  return {
    a:1,
    b:2
  
  }

}
console.log(test_.length)


var teste3 = ['teste','cachorr','gato'];

var cs = (cachorro) => {

  return {
    
    cachorro
  
  }

};

const teste4 = cs('caos')
//console.log(teste4)

var cs1 = function () {
  
  var param = Array.prototype.slice.call(arguments,0);
  
  return {
  
    frinds:param
  }
 // console.log(arguments)/
 //
}

var testandoParam = cs1('cachorro','gato','chita');

console.log(testandoParam);
