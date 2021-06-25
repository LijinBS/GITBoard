import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainlayoutModule } from './mainlayout/mainlayout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './mainlayout/mainlayout.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzZorroAntdModule } from './modulesn/nzzorro.module';



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
    NzZorroAntdModule
    
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
