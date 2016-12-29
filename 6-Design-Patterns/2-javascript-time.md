#Assynchronous Exection

## SetTimeout

## Set interval


# Recap

Utilizar SetTimeout de no minimo 4ms
Funções demoradas bloqueia a UI
Muito utilizados para devices com pouca memoria e browsers antigo

# Recursive SetTimeout

Se essa função for chamada 10x ao logo de cada segundo, ocorrerá um problema relacionado a sincronidade, pois cada chamada será chamada e retornará sem controle nenhum,


nesse exemplo ser chamar a request `1,2,3,4,5`
se retorno poderá ser `1,3,2,5,4` pois da chamada até o retorno da função ajax existem fatores externos que podem influenciar na demora dos dados

```

  setIterval(function(){

      $.get('url',function(data){

          $('body').append(data);

      });

    },1000)


```

Uma solução seria da seguinte forma, a cada retorno da função daí será chamado a nova requisição para que haja assim uma sincronidade dos dados


```

  SetTimeout(function execute(){

      $.get('url',function(data){

          $('body').append(data);
          SetTimeout(execute,1000);
      });

    },1000)


```
