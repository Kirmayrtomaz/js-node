

var Calculadora = (function () {

  var total = 0;
  var incrementa = function()
  {
    var arg = Array.prototype.slice.call(arguments,0);

    for(let i=0; i < arg.length;i++)
    {

      total += arg[i];
    }//endfor


    return this;
  }//endsoma()


  var decrementa = function()
  {
    var arg = Array.prototype.slice.call(arguments,0);

    for(let i=0; i < arg.length;i++)
    {

      total -= arg[i];
    }//endfor


    return this;
  }//endsoma()

  var show = function()
  {
    console.log(total);
    return this;
  }//endshow()

  return{
    show,
    incrementa,
    decrementa

  }

});

 var calc = new Calculadora();
 calc.incrementa(5).incrementa(5).show().decrementa(7).show() ;
