
## O que é Closure


> Uma closure ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior.


# Exemplo de Closure

```

function add(a,b){

    var c = a + b;

    return {

        inc :function(){

                return ++c;
        }
    }
}

var teste = add(3,8); 
teste.inc() //incrementa

console.log(teste.inc());



```
Nesse exemplo acima estamos vendo um exemplo de cloususe, em que ao chamar a função add, a soma foi realizada e é como se criasse uma subfunção que pode pegar os dados dessa soma. De forma que se acessar a função `.inc()` o valor daquela soma será incrementado +1



Um dos erros comuns que acontece normalmente é quando se tenta usar clousure em determinadas situações que não podem ocorrer


