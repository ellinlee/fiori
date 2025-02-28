sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  //controller 확장
  return Controller.extend("ui5.walkthrough.controller.App", {
    onShowHello() {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
});
