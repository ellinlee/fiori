// //data-sap-ui-on-init='module:ui5/walkthrough/index': 모듈정읠르 index.js에서 하겠다.

// //초기화.
// sap.ui.define(["sap/m/Text"], (Text) => {
//   "use strict";

//   //위에서 넘겨준 text 를 정의
//   //생성자 메소드로부터 객체 생성 - sap/m/text로 부터
//   new Text({
//     text: "Hello World",
//   }).placeAt("content");
//   /*placeat : sap-ui-core에 상속받은 컨트롤들이 사용 가능한 메소드
//         기능: html 파일의 해당 요소에 삽입하라. 위치시켜라.
//         dom에 직접 랜더링하지 않고 컨트롤에게 삽입하여 랜더링. */
// });

//비동기 처리
sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  //뷰와 컨트롤러 연결
  XMLView.create({
    viewName: "ui5.walkthrough.view.App",
  }).then((oView) => oView.placeAt("content"));
  //xml 뷰 생성 성공 시 place at 처리 (.then의 의미 -)
});
