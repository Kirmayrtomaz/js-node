
## Callback x Events


### Callbacks

```
getThen(param,function(){
  //checkerror
  //operate on array of items


})
```
* Request/Reply
* No results until all results
* Either error or results

### Events


```
var results = getThen(param)

results.on('item',function(){
  //do something with this one item

})

results.on('done',function(){
  //no Mote Iten

})

results.on('error',function(){
  //show error

})

```

* Publish/subscribe
* Act on results as they arrive
* Partial results before error





## Node EventEmitter Class

Publish a Event

emitter.emit(event,[args]) ->

subscribe a Event

emitter.on(event,listener)

* Os `eventos` podem ser uma string
* Os eventos podem emetir zero ou mais argumentos

* Padrões comuns
  * o valor de retorno chama uma  funçao
  * Objetos extends to EventEmmitter para emetir eventos para eles mesmo
