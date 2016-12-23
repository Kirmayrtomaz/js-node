## Modulo de Async e await


Principais bibliotecas que existem para trabalhar com generators é o [co](https://github.com/tj/co) e o [BlueBird Promise.coroutine]()


### Frameworks node

* No express pode se usar o `co-express` para utilizar a funçção assincrona

```

var express = require('co-express')(require('express'));

var app = express();

app.get('/user/:id', function* (req, res) {
  var user = yield User.findById(req.params.id)
  res.send(user);
});

app.listen(8000);

```



* KOA já usa generators por padrão


```
var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});


```



## Async e await



```

go()

 async function(){

  const promessa = defer('url');


  const paralelo = await promessa;


 }



```


### Trabalhando com paralelismo e Async e await
```

me()

async function me (){
  console.log("loading...");

  const weatherRequest = fetch(weather).then(r => r.json());
  const weatherRequest = fetch(weather).then(r => r.json());

  const [weather, fiveDay] = await Promise.all([weatherRequest,fiveDayRequest])

  console.log(weather)
  console.log(fiveDay)

}

```
