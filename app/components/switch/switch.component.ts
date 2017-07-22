import { Component, OnInit, Input } from '@angular/core';
import { SwitchesService } from '../../services/switches.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/timer';

@Component({
    moduleId: module.id,
    selector: 'switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
    @Input() ip: string;
    @Input() pin: number;
    @Input() name: string;
    private service : SwitchesService;
    private class : string;
    private timer;
    private status:boolean;

    constructor(switchService: SwitchesService) { 
        this.service = switchService;
    }

    ngOnInit() { 
        this.checkSwitch();
        this.class = "btn btn-info btn-block";
        this.timer = Observable.timer(5000, 5000);
        this.timer.subscribe(t => {
            this.checkSwitch();
        });
    }

    public updateSwitch(status: boolean) {
        this.status = status;
        this.class = "btn btn-block btn-";
        this.class += this.status ? 'success' : 'danger';
    }

    public checkSwitch() : void {
        this.service.checkStatus(this.ip, this.pin).subscribe(data => {
            this.updateSwitch(data.status);
        }, 
        error => {
            console.error(error);
        });

    }

    public toggleSwitch() : void {
        this.service.toggleStatus(this.ip, this.pin).subscribe(data => {
            this.updateSwitch(data.status);
        }, 
        error => {
            console.error(error);
        })
    }
}