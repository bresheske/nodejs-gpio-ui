import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SwitchesService {
    private http : Http;

    // List of IPs and GPIO Pins.
    private switches : Array<any> = [
        { IP: '192.168.1.151', Pin: 23, Name: 'Front Outside Lights' },
	{ IP: '192.168.1.151', Pin: 24, Name: 'Front Garage Lights' },
	{ IP: '192.168.1.151', Pin: 25, Name: 'Stairwell Lights' },
	{ IP: '192.168.1.152', Pin: 23, Name: 'Master Bedroom Lights' }
    ];

    constructor(http: Http) {
        this.http = http;
    }

    public getSwitches() : Array<any> {
        return this.switches;
    }

    public checkStatus(ip:string, pinid: number) {
        return this.http.post("http://" + ip + "/getStatus", { id: pinid })
            .map((res: Response) => res.json());
    };

    public toggleStatus(ip:string, pinid: number) {
        return this.http.post("http://" + ip + '/toggleStatus', { id: pinid })
            .map((res: Response) => res.json());
    }
}
