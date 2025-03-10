/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"mentoring_0310/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});