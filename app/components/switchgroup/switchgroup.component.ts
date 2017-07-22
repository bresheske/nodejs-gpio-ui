import { Component, OnInit, Input } from '@angular/core';
import { SwitchesService } from '../../services/switches.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/timer';

@Component({
    moduleId: module.id,
    selector: 'switchgroup',
    templateUrl: 'switchgroup.component.html',
    styleUrls: ['./switchgroup.component.css']
})
export class SwitchGroupComponent implements OnInit {
    private TIMER:number = 10000;

    @Input() switchip: string;
    @Input() switchpin: number;
    @Input() fanip: string;
    @Input() fanpin: number;
    @Input() name: string;

    private service: SwitchesService;
    private switchclass: string;
    private fanclass: string;
    private switchstatus: boolean;
    private fanstatus: boolean;
    private timer;

    constructor(switchService: SwitchesService) { 
        this.service = switchService;
    }

    ngOnInit() { 
        this.checkSwitch();
        this.checkFan();
        this.switchclass = "fa fa-2x fa-power-off";
        this.fanclass = "fa fa-2x fa-gear";
        this.timer = Observable.timer(this.TIMER, this.TIMER);
        this.timer.subscribe(t => {
            this.checkSwitch();
            this.checkFan();
        });
    }

    public updateFan(status: boolean) {
        this.fanstatus = status;
        this.fanclass = "fa fa-2x fa-gear ";
        this.fanclass += this.fanstatus ? 'on' : 'off';
    }

    public checkFan() : void {
        this.service.checkStatus(this.fanip, this.fanpin).subscribe(data => {
            this.updateFan(data.status);
        }, 
        error => {
            console.error(error);
        });

    }

    public updateSwitch(status: boolean) {
        this.switchstatus = status;
        this.switchclass = "fa fa-2x fa-power-off ";
        this.switchclass += this.switchstatus ? 'on' : 'off';
    }

    public checkSwitch() : void {
        this.service.checkStatus(this.switchip, this.switchpin).subscribe(data => {
            this.updateSwitch(data.status);
        }, 
        error => {
            console.error(error);
        });

    }

    public toggleFan() : void {
        this.service.toggleStatus(this.fanip, this.fanpin).subscribe(data => {
            this.updateFan(data.status);
        }, 
        error => {
            console.error(error);
        })
    }

    public toggleSwitch() : void {
        this.service.toggleStatus(this.switchip, this.switchpin).subscribe(data => {
            this.updateSwitch(data.status);
        }, 
        error => {
            console.error(error);
        })
    }
}