var Task = require('./task');

var task = new Task('create a demo for construct')
var task1 = new Task('create a demo for cachorro')
var task2 = new Task('create a demo for singleton')
var task3 = new Task('create a demo for  Prototype')

task.complete() //cachorro
task1.save()//'save task:create a demo for  cachorro'
