function shop(work1, work2) {
  const buyMilkShake = work1 || work2;
  const buyTv50 = work1 && work2;
  const buyTv32 = work1 != work2;
  const health = !buyMilkShake;

  return { buyMilkShake, buyTv50, buyTv32, health };
}

console.log(shop(true, true))
console.log(shop(true, false))
console.log(shop(false, false))
console.log(shop(false, true))