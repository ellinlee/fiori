sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exerciserouting.controller.Main", {
      //컨트롤러가 로드될때 한번만 실행 -> 모델 생성성
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter
          .getRoute("RouteMain")
          .attachPatternMatched(this._onPatternMatched, this);
      },

      //pattern이 일치할 때 마다 실행되는 이벤트
      _onPatternMatched(oEvent) {
        //초기화, 셋팅, 매개변수 찾기
        //특정한 parameter 가져올 때
      },

      onPress() {
        var oTable = this.getView().byId("table1");
        var selectedItem = oTable.getSelectedItem();

        var oContext = selectedItem.getBindingContext("student");
        var oSelectedData = oContext.getObject();

        this.oRouter.navTo(
          "RouteDetail",
          {
            key1: oSelectedData.no,
            key2: oSelectedData.name,
            key3: oSelectedData.gender,
            key4: oSelectedData.birthdate,
          },
          true
        );
      },
    });
  }
);
