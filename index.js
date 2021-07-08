const Cat = require('./cat')
const Mouse = require('./mouse')

let tom = new Cat('tom')
let jerry = new Mouse('jerry')
tom.sayHi()
tom.eat(jerry)
console.log(tom)