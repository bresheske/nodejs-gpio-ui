import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SwitchesService {
    private http : Http;

    constructor(http: Http) {
        this.http = http;
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
