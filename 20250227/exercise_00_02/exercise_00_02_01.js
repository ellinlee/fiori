function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = " ".repeat(rows - i);
    let str2 = "*".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}

printPyramid(5);
