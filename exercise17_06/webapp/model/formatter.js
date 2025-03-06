sap.ui.define([], () => {
  "use strict";

  return {
    formatDate(oDate) {
      if (!oDate) {
        return "";
      }
      const oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
        pattern: "yyyy/MM/dd",
      });
      return oDateFormat.format(new Date(oDate));
    },

    isFutureMonth(oDate) {
      if (!oDate) {
        return "";
      }

      let tempString = oDate.toString().split("-");
      let dateMonth = parseInt(tempString[1], 10);
      let currentMonth = new Date().getMonth() + 1;

      if (dateMonth <= currentMonth) return "Flagged";
      else return "Favorite";
    },
  };
});
