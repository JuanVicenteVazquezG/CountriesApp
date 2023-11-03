import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,  //Country module lo haremos con carga perezosa y sharedmodule lo haremos con carga normal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
