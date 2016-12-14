var animal = {};

animal.name= "cachorro";

animal.tagline = "Yippeee!";
animal.noises = [];



for (var index in animal){

  if(index === "name"){
  
    console.log('username :' + animal[index])
  
  }
}
