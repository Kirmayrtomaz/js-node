function add(a,b){

  return a + b
}

function once(func){
  return function(){
    var f = func;
    func=null;
    return  f.apply(
      this,
      arguments
    )
    
  }

}


once_add = once(add);
teste = once_add(1,2);
console.log(teste);

teste = once_add(1,2);
