sap.ui.define(
  [
    "sap/ui/core/mvc/Controller", // 첫 번째 종속성
    "sap/ui/model/odata/v2/ODataModel", // 두 번째 종속성
  ],
  (Controller, ODataModel) => {
    // 종속성 배열의 순서에 맞게 매개변수로 전달
    "use strict";

    return Controller.extend("cl4.exprogramd17.controller.Main", {
      //페이지 로드시 실행되는 메서드
      onInit() {
        // OData model 생성.
        var oModel = new ODataModel("/sap/opu/odata/sap/ZEXAM_MEMBER_D17_SRV/");

        //Main 뷰의 모델로 설정.
        this.getView().setModel(oModel, "student");

        //라우터 로드
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      //회원등록버튼 클릭 시 다이얼로그 창 띄워주는 메서드
      async onEnrollPress() {
        this.oDialog ??= await this.loadFragment({
          name: "cl4.exprogramd17.view.enrollmentDialog",
        });

        this.oDialog.open();
      },

      //회원 정보 저장 함수
      onSaveDialog() {
        //뷰 모델 가져오기
        var oMolel1 = this.getView().getModel();

        //dialog 창에서 입력한 데이터 가져오기
        var name1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("name_input_enroll_dialog")
          .getValue();
        var bDate1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("DP_enroll_dialog")
          .getValue();
        var gender1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("gender_input_enroll_dialog")
          .getValue();
        var city1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("city_input_enroll_dialog")
          .getValue();
        var country1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("country_input_enroll_dialog")
          .getValue();
        var pNum1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("pnum_input_enroll_dialog")
          .getValue();
        var email1 = this.getView("cl4.exprogramd17.view.enrollmentDialog")
          .byId("email_input_enroll_dialog")
          .getValue();

        //필수값 입력하지 않았을 경우 메세지 띄우기
        if (
          name1 == "" ||
          bDate1 == "" ||
          gender1 == "" ||
          city1 == "" ||
          country1 == "" ||
          pNum1 == "" ||
          email1 == ""
        ) {
          sap.m.MessageToast.show("필수 값을 모두 입력해주세요.");
          return;
        }

        //날짜 형식 변환
        if (bDate1 != "") {
          var bdate2 = new Date(bDate1);
          var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
            pattern: "yyyy-MM-ddTHH:mm:ss",
          });
          var bDate3 = dateFormat.format(bdate2);
        }

        //입력한 데이터를 기반으로 array 만들기 -> 이후 create 메서드 사용을 위해
        var newEntry = {
          Name: name1,
          Bdate: bDate3,
          Gender: gender1,
          City: city1,
          Country: country1,
          Telephone: pNum1,
          Email: email1,
        };

        //모델에 데이터 추가
        var sPath = "/MemberSet";
        oMolel1.create(sPath, newEntry, {
          success: function () {
            //성공 시 회원 등록 창 나오기
            this.byId("enrollmentDialog").close();

            //성공 메시지 띄우기
            sap.m.MessageToast.show("회원 정보가 저장되었습니다.");

            // 데이터 갱신
            oMolel1.refresh(true);
          }.bind(this),
          error: function () {
            //실패 시 회원 등록 창 나오기기
            this.byId("enrollmentDialog").close();

            //실패 메시지 띄우기
            sap.m.MessageToast.show("회원 정보 저장 실패");
          },
        });
      },

      //다이얼로그 창 닫는 메서드
      onCloseDialog() {
        this.byId("enrollmentDialog").close();
      },

      //row 클릭 시 상세 조회 화면으로 전환하는 메서드
      onPress() {
        //table 갖고오기
        var oTable = this.getView().byId("table1_main");
        //table중 선택된 아이템 가져오기
        var selectedItem = oTable.getSelectedItem();

        //바인딩된 text가져오기
        var oContext = selectedItem.getBindingContext();
        //선택된 아이템의 데이터 가져오기
        var oSelectedData = oContext.getObject();

        //날짜 형식 맞춰주기
        var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
          pattern: "yyyy-MM-dd",
        });
        var bDateCon = dateFormat.format(oSelectedData.Bdate);

        //detail 창으로 이동 - 선택된 데이터도 함께 라우팅
        this.oRouter.navTo(
          "RouteDetail",
          {
            key1: oSelectedData.Id,
            key2: oSelectedData.Name,
            key3: bDateCon,
            key4: oSelectedData.Gender,
            key5: oSelectedData.City,
            key6: oSelectedData.Country,
            key7: oSelectedData.Telephone,
            key8: oSelectedData.Email,
          },
          true
        );
      },
      onGoBack() {
        this.oRouter.navTo("RouteMain", {}, true);
      },
    });
  }
);
