import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './shared/navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
