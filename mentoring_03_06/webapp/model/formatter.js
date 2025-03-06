sap.ui.define([], function () {
  "use strict";

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    // Add more currency symbols as needed
  };

  return {
    formatPrice(oPrice, oCurrency) {
      let tempValue = oPrice + oCurrency;

      return tempValue;
    },

    formatStock: function (oStock, oUnit) {
      let totalValue;
      let transUnit;

      switch (oUnit) {
        case "unit":
          transUnit = "개";
          break;
        case "piece":
          transUnit = "대";
          break;
        case "set":
          transUnit = "세트";
          break;
        case "box":
          transUnit = "박스";
          break;
      }
      totalValue = oStock + " " + transUnit;

      return totalValue;
    },
  };
});
