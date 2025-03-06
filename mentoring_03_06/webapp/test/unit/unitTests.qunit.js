/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd17/mentoring_03_06/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});