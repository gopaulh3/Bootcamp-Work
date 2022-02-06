"use strict";
exports.__esModule = true;
exports.Scooter = void 0;
var GPSCoordinates_1 = require("./GPSCoordinates");
var Scooter = /** @class */ (function () {
    function Scooter() {
        this.batteryLife = 99;
        this.speedInMPH = 20;
        this.scooterGPSPosition = new GPSCoordinates_1.GPSCoordinates();
        this.QRCode = Math.floor(Math.random() * 10000000);
    }
    Scooter.prototype.isFullyCharged = function () {
        return this.batteryLife >= 99;
    };
    return Scooter;
}());
exports.Scooter = Scooter;
