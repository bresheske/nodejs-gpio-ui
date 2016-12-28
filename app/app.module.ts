// Angular directives
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App directives
import { AppComponent } from './app.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }