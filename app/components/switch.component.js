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
var switches_service_1 = require("../services/switches.service");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/observable/timer");
var SwitchComponent = (function () {
    function SwitchComponent(switchService) {
        this.service = switchService;
    }
    SwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSwitch();
        this.class = "btn btn-info btn-block";
        this.timer = Rx_1.Observable.timer(5000, 5000);
        this.timer.subscribe(function (t) {
            _this.checkSwitch();
        });
    };
    SwitchComponent.prototype.updateSwitch = function (status) {
        this.switch.status = status;
        this.class = "btn btn-block btn-";
        this.class += this.switch.status ? 'success' : 'danger';
    };
    SwitchComponent.prototype.checkSwitch = function () {
        var _this = this;
        this.service.checkStatus(this.switch.IP, this.switch.Pin).subscribe(function (data) {
            _this.updateSwitch(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    SwitchComponent.prototype.toggleSwitch = function () {
        var _this = this;
        this.service.toggleStatus(this.switch.IP, this.switch.Pin).subscribe(function (data) {
            _this.updateSwitch(data.status);
        }, function (error) {
            console.error(error);
        });
    };
    return SwitchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "switch", void 0);
SwitchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'switch',
        templateUrl: 'switch.component.html',
        styleUrls: ['./switch.component.css']
    }),
    __metadata("design:paramtypes", [switches_service_1.SwitchesService])
], SwitchComponent);
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=switch.component.js.map