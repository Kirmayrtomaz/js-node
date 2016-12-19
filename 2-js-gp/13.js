var teste = function(value){
  

  return {
  
    
    increment: function(){
    
      return value++;
    
    },
    decrement : function(){
    
      return value--;
    }
  
  
  }
  
}


var valor = teste(10);

console.log(valor.increment())

console.log(valor.increment())
console.log(valor.decrement())
console.log(valor.decrement())
