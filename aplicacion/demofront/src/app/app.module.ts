import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { ApidemoComponent } from './apidemo/apidemo.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    //AppComponent,
    ApidemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ApidemoComponent]
})
export class AppModule { }
