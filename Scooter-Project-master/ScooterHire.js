"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ScooterHire = void 0;
var BankDetails_1 = require("./BankDetails");
var Customer_1 = require("./Customer");
var CustomerService_1 = require("./CustomerService");
var GPSCoordinates_1 = require("./GPSCoordinates");
var Scooter_1 = require("./Scooter");
var ScooterHire = /** @class */ (function () {
    function ScooterHire(customer) {
        this.scootersAvailable = [];
        this.map = new GPSCoordinates_1.GPSCoordinates();
        this.scooterRiddenTime = 0;
        this.areDetailsValidated = false;
        this.customer = customer;
        this.map.mapCoordinates();
        this.scooterChosen = this.scootersAvailable[0] = new Scooter_1.Scooter();
        for (var i = 1; i < 5; i++) {
            this.scootersAvailable[i] = new Scooter_1.Scooter();
        }
    }
    ScooterHire.prototype.isScooterAvailable = function () {
        return this.scootersAvailable.includes(this.scooterChosen);
    };
    ScooterHire.prototype.retrieveScooterSuccessful = function () {
        if (this.scooterChosen.isFullyCharged() && customer.accountInfoValid()
            && customer.bankDetailsAdded(customer.bankDetails) && this.isScooterAvailable()) {
            this.removeScooter(this.scooterChosen);
            this.areDetailsValidated = true;
            return true;
        }
        else {
            return false;
        }
    };
    ScooterHire.prototype.removeScooter = function (scooter) {
        var _this = this;
        this.scootersAvailable = this.scootersAvailable.filter(function (val) { return val.QRCode !== _this.scooterChosen.QRCode; });
    };
    ScooterHire.prototype.rideScooter = function () {
        if (this.areDetailsValidated) {
            console.log("Scooter is being ridden...");
            this.updateGPSPosition();
        }
        else {
            console.log("Sorry, cannot be riiden!");
        }
    };
    ScooterHire.prototype.chargeScooter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.areDetailsValidated) return [3 /*break*/, 2];
                        console.log('Starting charge...');
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent(); // wait 2 seconds
                        console.log('Charge complete...');
                        return [3 /*break*/, 3];
                    case 2:
                        console.log("Retrieve a scooter!");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScooterHire.prototype.updateGPSPosition = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scooterRiddenTime++;
                        console.log("Locating position with time interval : ".concat(this.scooterRiddenTime));
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent(); // wait 2 seconds
                        if (this.isWithinRange()) {
                            console.log("Great! Within range");
                        }
                        else {
                            console.log("Warning! Bring your scooter within range!");
                        }
                        this.scooterRiddenTime === 5 ? this.chargeScooter() : this.updateGPSPosition();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScooterHire.prototype.isWithinRange = function () {
        this.scooterChosen.scooterGPSPosition = this.map.mapAreaCoordinates[1];
        return this.map.mapAreaCoordinates.includes(this.scooterChosen.scooterGPSPosition);
    };
    ScooterHire.prototype.returnScooterSuccessful = function () {
        this.scootersAvailable.push(this.scooterChosen);
        CustomerService_1.CustomerService.takePayment();
    };
    return ScooterHire;
}());
exports.ScooterHire = ScooterHire;
var customer = new Customer_1.Customer("Hamzah Gopaul", "gphz@gmail.com", 24, "GOPAU900145YAINN", "xyz.png");
customer.bankDetailsAdded(new BankDetails_1.BankDetails("Mr Gopaul", "Nationwide", "1234567812345678", "123"));
var scooterHire = new ScooterHire(customer);
console.log(scooterHire);
console.log(scooterHire.retrieveScooterSuccessful());
// scooterHire.retrieveScooterSuccessful();
// scooterHire.rideScooter();
// scooterHire.returnScooterSuccessful();
