import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainlayoutModule } from './mainlayout/mainlayout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './mainlayout/mainlayout.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainlayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule
  
    
  
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
