sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices(oEvent) {
        // build filter array
        const aFilter = []; // 필터 배열 생성

        // 들어오는 값 찾기
        const sQuery = oEvent.getParameter("query");

        // 들어오는 값에 따라 결과 창을 띄울 수 있도록 PUSH
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery) // 필터 조건 추가
          );
        }

        // 바인딩 필터링
        const oList = this.byId("invoiceList"); // 리스트 요소 가져오기
        const oBinding = oList.getBinding("items"); // 리스트의 바인딩 가져오기
        oBinding.filter(aFilter); // 필터 적용
      },
    });
  }
);
