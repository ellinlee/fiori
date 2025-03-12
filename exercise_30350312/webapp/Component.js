sap.ui.define([
    "sap/ui/core/UIComponent",
    "exercise30350312/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("exercise30350312.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});