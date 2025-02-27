let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
