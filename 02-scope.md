# Escopo 

Um dos principais problemas com o javascript é relacionado ao seu Escopo, tanto o escopo Global quando ao escopo de bloco geram sempre muita dificuldade para o desenvolvedor entender como o projeto está funcionado.

Para melhorar o entendimento desse estudo, será apresentando uma serie de exemplo tanto com escopo locais quando com escopos globais para facilitar o entendimento.


## Exemplos de escopo

### Exemplo 1




```
var escopo = "Eu sou um escopo global";


function escope(){

escopo = "Eu sou um escopo local"


}

escope();

console.log(escopo);// "Eu sou um escopo local";


```
Nese exemplo acima é apresentando, o variavel que parece ser um escopo local, porém por não ter sido declarada com (let, const ou var) isso pode representar que essa variavel é global caso ela exista;


### Exemplo 2


```
var escopo = "Eu sou um escopo global";

function escope(){

var escopo = "Eu sou um escopo local"


}

escope();

console.log(escopo);// "Eu sou um escopo local";


```




Nese exemplo acima é apresentando, o escopo de bloco cria altera somente aquela variaveis naquela função após isso, o escopo global e retornado;

## Exemplo 3

Outra caractarísca sobre escopo é que os filhos terão acesso as varíaveis dos conjuntos pais, porém os pais não terão acesso as variaveis dos filhos. Mesmo que isso pareça complicado é algo extremamente importante quando se está trabaqlhando com escopo
* Nessa imagem abaixo, a supondo que Q é uma função nesse caso este terá acesso as variaveis da função (R e C)  
* Podemos ter também no exemplo em que Z é uma função. Nese caso esta terá acesso as variaveis de (Q,R,C)

![Imagem de conjunto](http://www.matematiques.com.br/arquivos/q_teoria_conjuntos_1540298081.jpg)


## Exemplo 4 - Tentando acessar uma variavel de escopo em bloco

```
function(){

    var animal = "cachorro";

}

console.log(animal)//undefined


```

## Exemplo 5 - Tentando acessar uma variavel de escopo em bloco de um loop;


```
var contador = 0;


for(var contador = 0; contador < 5; contador++){
//looping

}


console.log(contador) //5

```
Nesse caso isso acontece, pois o escopo utilizando var só funciona para funções, mas uma solução para esse problema seria utilizando em vez de var o let ou chamando uma função



```
var contador = 0;


for(let contador = 0; contador < 5; contador++){
//looping

}


console.log(contador) //0


```
# or




```
var contador = 0;

function loop(){
    
    for(var contador = 0; contador < 5; contador++){
    //looping

    }
}


console.log(contador) //0


```


Exemplo 6 




```

var velocidade = 2;

function animal(patas){

    var velocidade = 5;

    return (function(){

        return patas * velocidade;

    })()


}


cachorro = animal(4);

console.log(cachorro);


```

