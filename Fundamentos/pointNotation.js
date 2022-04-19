console.log(Math.ceil(6.1)); // .ceil arredonda o número para cima

const obj1 = {};
obj1.name = 'ball';

console.log(obj1.name);

function Obj(name) {
    this.name = name
}

const obj2 = new Obj('chair')
const obj3 = new Obj('table')

console.log(obj2.name);
console.log(obj3.name);
