"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var switches_service_1 = require("../../services/switches.service");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/observable/timer");
var SwitchGroupComponent = (function () {
    function SwitchGroupComponent(switchService) {
        this.TIMER = 10000;
        this.service = switchService;
    }
    SwitchGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSwitch();
        this.checkFan();
        this.switchclass = "fa fa-2x fa-power-off";
        this.fanclass = "fa fa-2x fa-gear";
        this.timer = Rx_1.Observable.timer(this.TIMER, this.TIMER);
        this.timer.subscribe(function (t) {
            _this.checkSwitch();
            _this.checkFan();
        });
    };
    SwitchGroupComponent.prototype.updateFan = function (status) {
        this.fanstatus = status;
        this.fanclass = "fa fa-2x fa-gear ";
        this.fanclass += this.fanstatus ? 'on' : 'off';
    };
    SwitchGroupComponent.prototype.checkFan = function () {
        var _this = this;
        this.service.checkStatus(this.fanip, this.fanpin).subscribe(function (data) {
            _this.updateFan(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    SwitchGroupComponent.prototype.updateSwitch = function (status) {
        this.switchstatus = status;
        this.switchclass = "fa fa-2x fa-power-off ";
        this.switchclass += this.switchstatus ? 'on' : 'off';
    };
    SwitchGroupComponent.prototype.checkSwitch = function () {
        var _this = this;
        this.service.checkStatus(this.switchip, this.switchpin).subscribe(function (data) {
            _this.updateSwitch(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    SwitchGroupComponent.prototype.toggleFan = function () {
        var _this = this;
        this.service.toggleStatus(this.fanip, this.fanpin).subscribe(function (data) {
            _this.updateFan(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    SwitchGroupComponent.prototype.toggleSwitch = function () {
        var _this = this;
        this.service.toggleStatus(this.switchip, this.switchpin).subscribe(function (data) {
            _this.updateSwitch(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    return SwitchGroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SwitchGroupComponent.prototype, "switchip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SwitchGroupComponent.prototype, "switchpin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SwitchGroupComponent.prototype, "fanip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SwitchGroupComponent.prototype, "fanpin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SwitchGroupComponent.prototype, "name", void 0);
SwitchGroupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'switchgroup',
        templateUrl: 'switchgroup.component.html',
        styleUrls: ['./switchgroup.component.css']
    }),
    __metadata("design:paramtypes", [switches_service_1.SwitchesService])
], SwitchGroupComponent);
exports.SwitchGroupComponent = SwitchGroupComponent;
//# sourceMappingURL=switchgroup.component.js.map