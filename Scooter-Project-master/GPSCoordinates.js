"use strict";
exports.__esModule = true;
exports.GPSCoordinates = void 0;
var GPSCoordinates = /** @class */ (function () {
    function GPSCoordinates() {
        this.longitude = Math.random() * 10;
        this.latitude = Math.random() * 10;
        this.mapAreaCoordinates = [];
    }
    GPSCoordinates.prototype.getCoordinates = function () {
        this.longitude = Math.random() * 10;
        this.latitude = Math.random() * 10;
    };
    GPSCoordinates.prototype.mapCoordinates = function () {
        for (var i = 0; i < 5; i++) {
            this.mapAreaCoordinates[i] = new GPSCoordinates();
        }
        return this.mapAreaCoordinates;
    };
    return GPSCoordinates;
}());
exports.GPSCoordinates = GPSCoordinates;
