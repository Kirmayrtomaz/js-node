var Task = function(name){

    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('complete task:' + this.name)
}

Task.prototype.save = function(){
    console.log('save task:' + this.name)
}

module.exports = Task;