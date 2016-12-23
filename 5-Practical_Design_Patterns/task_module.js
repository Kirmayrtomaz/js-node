var Task = function (name) {

    this.name = name;
    this.completed = false;

    var complete = function () {

        console.log('complete task:' + this.name)
    };

    var save = function () {

        console.log('save task:' + this.name)
    }


    return {
        complete,
        save

    }
}

module.exports = Task();