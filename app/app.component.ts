import { Component } from '@angular/core';
import { SwitchesService } from './services/switches.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [SwitchesService]
})
export class AppComponent 
{
  private switches : Array<any>;
  private service : SwitchesService;

  constructor(switchService: SwitchesService) {
    this.service = switchService;
  }

  ngOnInit() {
    this.switches = this.service.getSwitches();
  }
}