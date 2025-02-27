var fruit = {
  name: "banana",
  color: "yellow",
  origin: "puerto rico",
  weight: 230,
  size: 17,
};

var aFruit = []; //배열객체선언.

for (var p in fruit) {
  console.log(p + " : " + fruit[p]); //객체의 속성과 값을 출력.
  aFruit.push(fruit[p]); //객체의 속성값을 배열에 추가.
}

console.log(aFruit); //배열의 값 출력.

alert(aFruit[0]); //배열의 첫번째 값 출력.
