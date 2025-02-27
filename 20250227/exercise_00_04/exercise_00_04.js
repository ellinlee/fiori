function calculateArea(length, width) {
  return length * width;
}

function calculate() {
  //1. 화면상에서 입력받은 두 입력값을 메소드를 활용하여 변수에 입력받는다.
  //2. 해당 변수를 면적 계산 함수의 매개변술 활용하여 호출한다.
  //3. 결과를 화면에 출력한다. -> 출력 요소에 넣어준다.(렌더링)

  var userInput1 = document.getElementById("length").value;
  var userInput2 = document.getElementById("width").value;

  // 면적 계산 후 출력ls

  if (userInput1 == "" || userInput2 == "") {
    let message = "없음";
    document.getElementById("area").innerHTML = message; //문장 그냥 여기다 넣으면 오류남.
    return;
  } else {
    var area = calculateArea(userInput1, userInput2);
    let string = `${area} 제곱미터`;
    debugger;
    document.getElementById("area").innerHTML = string;
  }
}
