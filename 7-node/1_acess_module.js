const os = require('os');
var toMb = function(f){

  return( Math.round((f/1024/1014)*100)/100)

}

console.log("hostname:" + os.hostname())
console.log("Memoria Livre:" + toMb(os.freemem()))



console.log("Memoria Livre:" + toMb(os.totalmem()))
