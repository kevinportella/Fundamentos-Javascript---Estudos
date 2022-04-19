// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação:

const x = 'Global'

function out() {
    const x = 'Local'

    function inside() {
        return x
    }

    return inside
}

const myFunction = out()
console.log(myFunction())

// ela chama o 'Local' pois a ela foi declarada dentro do escopo da função q foi chamada
