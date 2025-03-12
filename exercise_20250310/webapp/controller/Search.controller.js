sap.ui.define(
  [
    "sap/ui/core/mvc/Controller", // 첫 번째 종속성
  ],
  (Controller) => {
    // 종속성 배열의 순서에 맞게 매개변수로 전달
    "use strict";

    return Controller.extend("exercise20250310.controller.App", {
      onInit() {},

      //버튼 클릭 시 호출될 함수 정의
      onPress() {
        var oModel1 = this.getView().getModel();

        var carrid1 = this.getView().byId("input_carrid").getValue();
        var carrname1 = this.getView().byId("input_carrname").getValue();
        var currcode1 = this.getView().byId("input_currcode").getValue();
        var url1 = this.getView().byId("input_url").getValue();

        var newEntry = {
          Carrid: carrid1,
          Carrname: carrname1,
          Currcode: currcode1,
          Url: url1,
        };

        oModel1.create("/ZCARR_D17Set", newEntry, {
          success: function () {
            sap.m.MessageToast.show(
              "항공사 데이터가 성공적으로 생성되었습니다."
            );
            oModel1.refresh(true); // 데이터 갱신
            this.getView().byId("input_carrid").setValue("");
            this.getView().byId("input_carrname").setValue("");
            this.getView().byId("input_currcode").setValue("");
            this.getView().byId("input_url").setValue("");
          },
          error: function () {
            sap.m.MessageToast.show("데이터 생성 오류");
          },
        });
      },
      onDelete() {
        //만약 한 view에 요소들이 모두 들어가 있다면
        //var OTable = this.getView().byId("테이블명")

        //아래 코드는 전체 app을 가져온 다음 root 뷰에 접근해서 데이터 가져오는 것
        var oTable = this.getOwnerComponent().getRootControl().byId("table1");
        var selectedItem = oTable.getSelectedItem();
        if (!selectedItem) {
          sap.m.MessageToast.show("삭제할 항목을 선택해주세요.");
        } else {
          var context = selectedItem.getBindingContext();
          var path = context.getPath();

          //먼저 OData model을 찾아와야 함
          var oModel2 = this.getView().getModel();

          oModel2.remove(path, {
            success: function () {
              sap.m.MessageToast.show("데이터가 성공적으로 삭제되었습니다.");
              oModel2.refresh(true);
            },
            error: function () {
              sap.m.MessageToast.show("데이터 삭제에 실패했습니다.");
            },
          });
        }
      },
      async onUpdate() {
        var oTable1 = this.getOwnerComponent().getRootControl().byId("table1");
        var selectedItem1 = oTable1.getSelectedItem();

        if (!selectedItem1) {
          sap.m.MessageToast.show("업데이트할 항목을 선택해주세요");
        } else {
          var context = selectedItem1.getBindingContext();
          // 선택된 데이터 가져오기
          var selectedData = context.getObject();
          // Fragment 로드 및 데이터 전달
          this.oDialog ??= await this.loadFragment({
            name: "exercise20250310.view.updateDialog",
            controller: this,
          });

          //fragment 뷰에서 사용할 json 모델 설정 필요
          var oDialogModel = new sap.ui.model.json.JSONModel(selectedData);
          this.oDialog.setModel(oDialogModel, "updateModel");
          this.oDialog.setBindingContext(context);
          this.oDialog.open();
        }
      },
      onCloseDialog() {
        this.byId("updateDialog").close();
      },
      onUpdateDialog() {
        var oModel2 = this.getView().getModel();

        var carrname2 = this.getView().byId("input_carrname_dialog").getValue();
        var url2 = this.getView().byId("input_url_dialog").getValue();

        var newEntry = {
          Carrname: carrname2,
          Url: url2,
        };

        var context = this.oDialog.getBindingContext();
        var path = context.getPath();

        oModel2.update(path, newEntry, {
          success: function () {
            sap.m.MessageToast.show("데이터가 성공적으로 수정되었습니다.");
            oModel2.refresh(true);
            this.byId("updateDialog").close();
          },
          error: function () {
            sap.m.MessageToast.show("데이터 수정에 실패했습니다.");
          },
        });
      },
    });
  }
);
