sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sync/d17/exercise1705/model/models",
  ],
  (UIComponent, JSONModel, ResourceModel, models) => {
    "use strict";

    return UIComponent.extend("sync.d17.exercise1705.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        const oModel = new JSONModel({ input: "" });
        this.setModel(oModel);

        const i18nModel = new ResourceModel({
          bundleName: "sync/d17/exercise1705/i18n/i18n",
        });
        this.setModel(i18nModel, "i18n");

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
