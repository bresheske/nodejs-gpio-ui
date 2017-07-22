// Angular directives
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// App directives
import { AppComponent } from './app.component'
import { SwitchComponent } from './components/switch/switch.component';
import { SwitchGroupComponent } from './components/switchgroup/switchgroup.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [AppComponent, SwitchComponent, SwitchGroupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }