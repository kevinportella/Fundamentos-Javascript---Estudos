require('./global')

console.log(MyApp.salutation())

MyApp.name = 'Ops!' // Para não mudar é só utilizar o método freeze

console.log(MyApp.name)
