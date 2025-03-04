sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d17.exercise1705.controller.App", {
      onInit() {},

      onPress: function () {
        var sMsg = this.getView().getModel().getProperty("/input");

        if (!sMsg) sMsg = "메세지를 입력바랍니다.";
        MessageToast.show(sMsg);
      },
    });
  }
);
