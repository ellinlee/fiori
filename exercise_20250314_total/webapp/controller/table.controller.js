sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("exercise20250314total.controller.table", {
    onInit() {},
    onPress() {
      var oTable = this.byId("yourTableId"); // Replace 'yourTableId' with the actual ID of your table
      var oSelectedItem = oTable.getSelectedItem();
      if (oSelectedItem) {
        var selectedData = oSelectedItem.getBindingContext().getObject();
        console.log(selectedData);
      } else {
        console.log("No item selected");
      }
    },
  });
});
