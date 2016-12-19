function revoclable(func){

  return {
  
    invoke : function(){
    
    
      return func.apply(this,arguments)
    
    },
    revoke : function (){
      func = false;
      return func;
    
    }
  
  
  }

}

var teste = revoclable(function(){

  console.log("teste");

});


teste.invoke();

teste.revoke();

teste.invoke();

