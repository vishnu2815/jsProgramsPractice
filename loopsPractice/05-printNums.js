const printNums = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} Even`);
    } else {
      console.log(`${i} Odd`);
    }
  }
};
printNums(20);
