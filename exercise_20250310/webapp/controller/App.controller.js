sap.ui.define(
  [
    "sap/ui/core/mvc/Controller", // 첫 번째 종속성
    "sap/ui/model/odata/v2/ODataModel", // 두 번째 종속성
  ],
  (Controller, ODataModel) => {
    // 종속성 배열의 순서에 맞게 매개변수로 전달
    "use strict";

    return Controller.extend("exercise20250310.controller.App", {
      /**
       * Initializes the controller.
       *
       * This method is called when the controller is instantiated. It sets up the OData model
       * and assigns it to the view.
       *
       * @function
       * @name onInit
       * @memberof App.controller
       */
      onInit() {
        // OData 모델 생성 및 설정
        var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D17_SRV/");
        // 뷰에 모델 설정
        this.getView().setModel(oModel);
      },
    });
  }
);
