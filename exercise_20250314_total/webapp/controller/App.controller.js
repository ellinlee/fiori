sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (BaseController, JSONModel, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("exercise20250314total.controller.App", {
      onInit() {
        var oDataModel = new sap.ui.model.odata.v2.ODataModel(
          "/sap/opu/odata/sap/ZTEACHER_D17_SRV/"
        );

        this.getView().setModel(oDataModel, "teacher");
      },
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
        this.getView().setModel(oModel, "selectedDataModel");

        // dialog load
        this.oDialog ??= await this.loadFragment({
          name: "exercise20250314total.view.detailDialog",
        });

        // dialog open
        this.oDialog.open();
      },
      onOKDialog() {
        this.byId("detailDialog").close();
      },
      onSearch() {
        // 검색어 가져오기
        var sSearch = this.getView().byId("app_hbox_input").getValue();

        // 선택된 조건 가져오기
        var sSelect = this.getView().byId("select").getSelectedKey();

        var aFilters = [];
        if (sSearch) {
          aFilters.push(
            new sap.ui.model.Filter(
              "Class",
              sap.ui.model.FilterOperator.EQ,
              sSearch
            )
          );
        }
        if (sSelect !== "all") {
          aFilters.push(
            new sap.ui.model.Filter(
              "Gender",
              sap.ui.model.FilterOperator.EQ,
              sSelect
            )
          );
        }

        // 테이블 바인딩에 필터 적용
        var oTable = this.getView().byId("table1"); // Table 찾기
        var oBinding = oTable.getBinding("items");
        // 🔥 필터 적용 및 바인딩 갱신
        var aFilteredData = oBinding.getContexts();
        oBinding.filter(aFilters);
        var aFilteredData2 = oBinding.getContexts();
      },
      async onChart() {
        var oDataModel = this.getView().getModel("teacher");
    
        // 🔥 현재 검색 필드에서 입력된 Class 값 가져오기
        var sSearchClass = this.getView().byId("app_hbox_input").getValue();
    
        // 🔥 필터 생성 (Class 필터)
        var aFilters = [];
        if (sSearchClass) {
            aFilters.push(new Filter("Class", sap.ui.model.FilterOperator.EQ, sSearchClass));
        }
    
        // 🔥 OData에서 Gender 데이터 가져오기 (필터 적용)
        oDataModel.read("/zteacher_d17Set", {
            filters: aFilters, // 🔥 필터 추가
            success: (oData) => {
                // 🔥 Gender별 데이터 그룹화
                var genderCount = {};
    
                oData.results.forEach(item => {
                    var gender = item.Gender;
                    if (!genderCount[gender]) {
                        genderCount[gender] = 0;
                    }
                    genderCount[gender]++;
                });
    
                // 🔥 차트 데이터 변환
                var chartData = Object.keys(genderCount).map(gender => {
                    return { "Gender": gender, "Count": genderCount[gender] };
                });
    
                // 🔥 JSON 모델 생성 및 설정
                var oChartModel = new sap.ui.model.json.JSONModel({ data: chartData });
                this.getView().setModel(oChartModel, "chartDataModel");
    
                // 🔥 차트 다이얼로그 로드 및 오픈
                this.oDialog1 ??= this.loadFragment({
                    name: "exercise20250314total.view.ChartDialog",
                }).then(oDialog => {
                    this.oDialog1 = oDialog;
                    this.oDialog1.open();
                });
            },
            error: (err) => {
                console.error("차트 데이터 로딩 실패:", err);
            }
        });
      },
      onOKDialog1() {
        this.byId("ChartDialog").close();
      },
    });
  }
);
