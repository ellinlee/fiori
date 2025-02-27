let array = [];

while (true) {
  let input = prompt("1. 할 일 추가 2. 할 일 삭제 3. 종료");

  if (input == "1") {
    let todo = prompt("추가할 할 일을 입력하세요.");
    array.push(todo);
    console.log(`할 일 목록: ${array}`);
  } else if (input == "2") {
    let dlt = prompt(`삭제할 할 일의 번호를 입력하세요 (0부터 시작) ${array}`);
    dlt = parseInt(dlt);
    if (-1 < dlt < array.length) {
      array.splice(array[dlt], 1);
    } else {
      alert("잘못된 번호 입력입니다.");
    }
  } else if (input == "3") {
    for (let i = 0; i < array.length; i++) {
      console.log(`할 일 목록 ${i}번째: ${array[i]}`);
    }
    break;
  } else {
    alert("잘못된 입력입니다.");
  }
}
