// sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
//   "use strict";

//   //controller 확장
//   return Controller.extend("ui5.walkthrough.controller.App", {
//     onShowHello() {
//       // show a native JavaScript alert
//       alert("Hello World");
//     },
//   });
// });

// sap.ui.define(
//   ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
//   (Controller, MessageToast) => {
//     "use strict";

//     return Controller.extend("ui5.walkthrough.controller.App", {
//       onShowHello() {
//         MessageToast.show("Hello World");
//       },
//     });
//   }
// );

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    // "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      // onInit() {
      //   // 생명주기 함수 -> local model, 최초의 한번만 데이터 생성하면 됨.
      //   // 뷰에 json 데이터 모델 설정
      //   const oData = {
      //     recipient: {
      //       name: "World", // recipient 객체에 name 속성 설정
      //     },
      //   };
      //   const oModel = new JSONModel(oData); // JSONModel 인스턴스 생성
      //   this.getView().setModel(oModel); // 뷰에 모델 연결
      //   //this.getView().setModel(oModel, "myModel")  //모델명 추가 -> input에 요소 선언 필요
      //   // oModel과 oData를 따로 두는 이유는 ?
      //   // 이렇게 설정해야 함수를 사용할 수 있는 것인가?
      //   // 이러면 오류 발생 -> json 모델 만들어야 함
      //   // set i18n model on view
      //   // 초기 리소스 데이터 셋팅 (최초 한번만)
      //   // 타겟 데이터 경로를 매개변수로 설정.
      //   // 2. 리소스 모델 설정
      //   const i18nModel = new ResourceModel({
      //     bundleName: "ui5.walkthrough.i18n.i18n",
      //   });
      //   //활용할 해당 뷰에게 모델 셋팅
      //   //모델 이름 지정 필요
      //   this.getView().setModel(i18nModel, "i18n");
      // },
      // onShowHello() {
      //   // read msg from i18n model
      //   // 아래 3줄 리소스 번들
      //   const oBundle = this.getView().getModel("i18n").getResourceBundle();
      //   //번들 넣기(파일) - 1. 리소스 대상 찾기기
      //   //리소스 모델 데이터 가져옴 (i18n)
      //   const sRecipient = this.getView()
      //     .getModel()
      //     .getProperty("/recipient/name");
      //   //모델 객체에 properties 넣기, json 모델에서 갖고오기 - world
      //   //recipient/name
      //   //2. 데이터 가져오기
      //   const sMsg = oBundle.getText("helloMsg", [sRecipient]);
      //   //번들의 텍스트 가져오기 hello를 sRecipient 에 넣기
      //   // 3. 대상 찾기
      //   // i18n모델에서 선택된 리소스 번들의 값(텍스트)과 기본 모델에서의 name 값 조합합
      //   // show message
      //   MessageToast.show(sMsg);
      // },
    });
  }
);
