const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in numb) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${numb[x]}`)
}

for (let y in numb) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${numb[y]}`)
}

externo: for (let a in numb) {      // CUIDADO!!! Não use
  for (let b in numb) {
    if(a == 2 && b == 3) break externo
    console.log(`Par = ${a},${b}`)
  }
}