/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"exercise_30350312/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});