/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"exercise_20250314_total/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
