/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"exercise_20250312_donut/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});