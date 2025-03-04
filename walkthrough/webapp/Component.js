sap.ui.define(
  [
    "sap/ui/core/UIComponent",

    //controller가 했던 데이터 모델 정보 init
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      //   metadata: {
      //     interfaces: ["sap.ui.core.IAsyncContentCreation"],
      //     //루트 위치 알려주기
      //     rootView: {
      //       viewName: "ui5.walkthrough.view.App",
      //       type: "XML",
      //       id: "app",
      //     },
      //   },

      //manifest.js와 연결
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init() {
        // 데이터 모델 초기화
        // 자식 클래스에서 커스텀 로직으로 덮어쓸 때도, 반드시 부모 클래스의 init()을 호출 필수.
        // UIComponent의 init 함수를 오버라이딩 하는 것
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
