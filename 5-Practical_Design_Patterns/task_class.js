
Class Task {


    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete (){
        console.log('complete task:' + this.name)
    };

    save (){
        console.log('save task:' + this.name)
    };

}
module.exports = Task;