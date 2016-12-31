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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var SwitchesService = (function () {
    function SwitchesService(http) {
        // List of IPs and GPIO Pins.
        this.switches = [
            { IP: '192.168.1.151', Pin: 23, Name: 'Front Outside Lights' },
            { IP: '192.168.1.151', Pin: 24, Name: 'Front Garage Lights' },
            { IP: '192.168.1.151', Pin: 25, Name: 'Stairwell Lights' },
            { IP: '192.168.1.152', Pin: 23, Name: 'Master Bedroom Lights' }
        ];
        this.http = http;
    }
    SwitchesService.prototype.getSwitches = function () {
        return this.switches;
    };
    SwitchesService.prototype.checkStatus = function (ip, pinid) {
        return this.http.post("http://" + ip + "/getStatus", { id: pinid })
            .map(function (res) { return res.json(); });
    };
    ;
    SwitchesService.prototype.toggleStatus = function (ip, pinid) {
        return this.http.post("http://" + ip + '/toggleStatus', { id: pinid })
            .map(function (res) { return res.json(); });
    };
    return SwitchesService;
}());
SwitchesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SwitchesService);
exports.SwitchesService = SwitchesService;
//# sourceMappingURL=switches.service.js.map