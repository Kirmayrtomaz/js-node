Comparação de Bracket notation e dot notation

* Notação de bracket ou cochetes
```
[]
```

* notação de ponto
```
.
```


## Exemplos como podem ser chamado o dot notation

```
objeto.123 = "teste" //throw

objeto.filho = "teste" //pass

objeto.guarda-chuva "teste" //throw

teste."cachorro" = "teste" //throw


objeto = {};

objeto.filho = "teste"

objeto.objeto = "objeto"

filhos = "objeto";

objeto.filhos //undefined



```


## Exemplos como podem ser chamados o brackets notation
 

```
objeto.["123"]= "teste" //pass

objeto.["filho"] = "teste" //pass

objeto.["guarda-chuva"] = "teste" //pass

objeto = {};

objeto.["filho"] = "teste"

objeto.["objeto"] = "cachorro"
ends today. If you want a hefty discount on a 1-year egghead membership, click here.
filhos = "objeto";

objeto.[filhos] //cachorro



```

https://api.github.com/orgs/facebook/repos

https://api.github.com/repos/facebook/codemod

https://api.github.com/repos/facebook/codemod/forks