function Class(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const class1 = new Class('Welcome', 123)
const class2 = new Class('See you later', 456)

console.log(class1, class2)

// simulando o New:
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = novo(Class, 'Welcome', 123)
const class4 = novo(Class, 'See you later', 456)

console.log(class3, class4)
