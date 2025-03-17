sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("cl4.exprogramd17.controller.Detail", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter
          .getRoute("RouteDetail")
          .attachPatternMatched(this._onPatternMatched, this);
      },
      // (manifest에 존재하는) pattern이랑 일치할 때마다 해당 이벤트 실행
      _onPatternMatched(oEvent) {
        // 1. URL 에서 전달된 파라미터 가져오기
        var oArgu = oEvent.getParameters().arguments;

        // 2. 새로운 JSON 모델 생성하여 데이터를 저장
        var oModel = new JSONModel(oArgu);

        // 3. 뷰에 "detailModel"로 모델 설정
        this.getView().setModel(oModel, "detailModel");
      },

      onGoBack() {
        this.oRouter.navTo("RouteMain", {}, true);
      },
    });
  }
);
