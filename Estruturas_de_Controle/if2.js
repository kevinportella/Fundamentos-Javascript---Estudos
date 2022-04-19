function test1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}

// test1(6)
// test1(8)

function test2(num) {
    if (num > 7); // ele não esta fazendo nada // não usar ";" nas estruturas de controle
    {
        console.log(num) // esta sendo executado sem filtro
    }
}

test2(6)
test2(8)
