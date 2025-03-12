sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exercise30350312.controller.Chart", {
      onInit() {
        var oData = {
          salesData: [
            { Month: "2023-01", Sales: 12000 },
            { Month: "2023-02", Sales: 14000 },
            { Month: "2023-03", Sales: 15000 },
            { Month: "2023-04", Sales: 13000 },
            { Month: "2023-05", Sales: 16000 },
            { Month: "2023-06", Sales: 17000 },
          ],
        };

        var OModel = new JSONModel(oData);
        this.getView().setModel(OModel, "chart");

        // 데이터가 바인딩된 후 차트를 업데이트
        var oVizFrame = this.getView().byId("idLineChart");

        // oVizFrame.setVizProperties({
        //   title: {
        //     visible: true, // 제목 표시 여부
        //     text: "Monthly Sales Trend", // 차트 제목
        //     alignment: "center", // 제목 정렬 (left, center, right 가능)
        //   },
        // });

        var oData1 = {
          data: [
            { category: "A등급", value: 50 },
            { category: "B등급", value: 65 },
            { category: "C등급", value: 75 },
            { category: "D등급", value: 40 },
          ],
        };

        var OModel1 = new JSONModel(oData1);
        this.getView().setModel(OModel1, "donut");

        var oVizFrame1 = this.getView().byId("idDonutChart");

        oVizFrame1.setVizProperties({
          title: {
            visible: true, // 제목 표시 여부
            text: "Performance Grade Distribution", // 차트 제목
            alignment: "center", // 제목 정렬 (left, center, right 가능)
          },
        });
      },
    });
  }
);
