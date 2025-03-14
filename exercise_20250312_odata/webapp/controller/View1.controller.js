sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exercise20250312odata.controller.View1", {
      onInit() {
        var oDataModel = new sap.ui.model.odata.v2.ODataModel(
          "/v2/northwind/northwind.svc/"
        );

        oDataModel.read("/Products", {
          success: function (oData) {
            var aProducts = oData.results;
            var aTop5Products = aProducts
              .sort((a, b) => b.UnitsInStock - a.UnitsInStock)
              .slice(0, 5);

            aTop5Products.forEach((element) => {
              element.ProductInfo =
                element.ProductID + " " + element.ProductName;
            });

            var oChartModel = new JSONModel({ data: aTop5Products });

            this.getView().setModel(oChartModel, "chart");
          }.bind(this),
          error: function (oError) {
            console.error("ODataModel 읽기 실패", oError);
          },
        });
      },
    });
  }
);
