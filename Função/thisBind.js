const person = {
    salutation: 'Good morning!',
    say() {
        console.log(this.salutation)
    }
}
person.say()

const say = person.say
say() // conflito entre paradigmas: funcional e 00

const talkAboutPerson = person.say.bind(person) // o "bind" ele amarra o objeto a ser o dono da execução sempre q o método for chamado
talkAboutPerson()

const say2 = person.say.bind(person)
say2()
