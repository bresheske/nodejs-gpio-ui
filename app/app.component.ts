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

  constructor() {
  }

  ngOnInit() {
  }
}