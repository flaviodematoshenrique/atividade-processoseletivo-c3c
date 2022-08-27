function resultadoArray(num) {
   let arrResult = [];

  for (let i = 1; i <= num;i++) {
    if (i % 5 === 0 && i % 9 === 0) {
      arrResult.push('LuidyMoura');
    } else if (i % 9 == 0 &&  i % 5 != 0) {
      arrResult.push('Moura');
    } else if (i % 5 == 0 && i % 9 != 0) {
      arrResult.push('Luidy');
    } else {
      arrResult.push('Não é divisível!');
    }
  }
  return arrResult;
}

console.log(resultadoArray(45));