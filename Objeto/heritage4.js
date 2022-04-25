function MyObject() {}

console.log(MyObject.prototype)

const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.name = 'Anônimo'
MyObject.prototype.say = function() {
    console.log(`Good morning! My name is ${this.name}!`)
}

obj1.say()

obj2.name = 'Rafael'
obj2.say()

const obj3 = {}
obj3.__proto__ = MyObject.prototype

obj3.name = 'OBJ3'
obj3.say()
