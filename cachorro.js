

const execute_basic = function (){
  let param = Array.prototype.slice.call(arguments,0)
  console.log(param)//[ 'dog', 'cat', 'fish' ]
}

execute_basic('dog','cat','fish');


const execute_arrow = ()=>{
  let param = Array.prototype.slice.call(arguments,0)
  console.log(param)//[ { [Function: require] ...
}

execute_arrow('dog','cat','fish');
