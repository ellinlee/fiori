sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("mentoring0310.controller.View1", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "KRW",
        });
        this.getView().setModel(oViewModel, "view");
      },

      onFilter(oEvent) {
        // build filter array
        const aFilter = []; // 필터 배열 생성

        // 들어오는 값 찾기
        const sQuery = oEvent.getParameter("query");

        // 들어오는 값에 따라 결과 창을 띄울 수 있도록 PUSH
        if (sQuery) {
          aFilter.push(new Filter("product", FilterOperator.Contains, sQuery));
        }

        // 바인딩 필터링
        const oList = this.byId("list1"); // 리스트 요소 가져오기
        const oBinding = oList.getBinding("items"); // 리스트의 바인딩 가져오기
        oBinding.filter(aFilter); // 필터 적용
      },
      async onButton() {
        // create dialog lazily
        this.oDialog ??= await this.loadFragment({
          name: "mentoring0310.view.product",
        });

        this.oDialog.open();
      },
      onCloseDialog() {
        // note: We don't need to chain to the pDialog promise, since this event handler
        // is only called from within the loaded dialog itself.
        this.byId("productDialog").close();
      },
    });
  }
);
