sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (BaseController, JSONModel) => {
    "use strict";

    return BaseController.extend("exercise20250314total.controller.App", {
      onInit() {
        var oDataModel = new sap.ui.model.odata.v2.ODataModel(
          "/sap/opu/odata/sap/ZTEACHER_D17_SRV/"
        );

        this.getView().setModel(oDataModel, "teacher");
      },
      onSearch(){
        // 검색어 가져오기
        // var sSearch = this.getView().byId("app_hbox_input").getValue();
      
      },
      onChart(){
        
      }
    });

  }
);
