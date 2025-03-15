sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("exercise20250314total.controller.table", {
    onInit() { },
    async onPress(oEvent) {
      // 선택된 아이템 가져오기
      var oItem = oEvent.getSource().getParent();

      // 바인딩된 컨텍스트 가져오기
      var oContext = oItem.getBindingContext();

      // 데이터 가져오기
      var oData = oContext.getObject();
      
      //다이얼로그에 데이터 전달
      var oModel = new sap.ui.model.json.JSONModel(oData);

      // 데이터 모델을 뷰에 설정
      this.getView().setModel(oModel,"selectedDataModel");

      // dialog load
      this.oDialog ??= await this.loadFragment({
        name: "exercise20250314total.view.detailDialog",
      });

      // dialog open
      this.oDialog.open();
    },
    onOKDialog(){
      this.byId("detailDialog").close();
    }
  });
});
