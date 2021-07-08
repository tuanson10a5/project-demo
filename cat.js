function Cat(name) {
    this.stomach = []
    this.name = name
}

const chalk = require('chalk')
Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse)
}
Cat.prototype.sayHi = function () {
    console.log(`hello my name's ${chalk.red(this.name)}`)
}

module.exports = Cat