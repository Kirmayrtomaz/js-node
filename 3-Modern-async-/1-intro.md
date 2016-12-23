#

Um dos proncipais problemas de se trabalhar com assincronidade é a forma verbosa de como se trabalha.
Esse curso, do pluralsight irá mostra algumas formas de contornar esse problema

Proposta nessa curso é falar sobre:
* Promises
* Generators
* Async


Javascript é 
* Single Threaded -> Executa uma ver por vez
* evento Loop -> Fluxo de controle determinado por eventos as implementações possuem um core central que escuta os eventos e chama seus respectivos callbacks
* Non-Blocking -> Não bloqueia o I/O em que várias chamadas podem ser feitas simitaneamente
* Avoid Bloking -> 
* run to Completion ->
* Cooperative Concurrency
* Little Programs
* Not always Async
* Order queue


# callbacks

Pedaço de código executavel que é passado como parãmetro e é esperado que o método execute o código do argumento em algum momento. Em javascript é muito importante trabalhar com callback por o javascript não espera funções sincronas


Nesse exemplo, a função get e depois entra no callback chamando a  função `showUser()`

```

$.get( "https://api.github.com/users/kirmayrtomaz", function( data ) {
  showUser(data)
});


function showUser(user){

    console.log(user)

}

```

Nesse exemplo, a função get  passa direto pela chamada ajax e chama a função `showUser()`


```
$.get( "https://api.github.com/users/kirmayrtomaz"); 

showUser(data)//undefined 


function showUser(user){

    console.log(user)

}

```


Problemas relacionados ao callback

* Quanto mais função são encadeadas com callback, mais dificil é de compreender o que aquela funcionalidade quer fazer 
* Dificuldade em e


Convenção de callback do node.js


function teste(){


    callback(error,callback);
}




Promises
A promises possui três estados

* Succeeded
* Failed
* Pending