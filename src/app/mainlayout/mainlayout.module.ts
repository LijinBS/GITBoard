import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzZorroAntdModule } from '../nzzorro.module';




@NgModule({
  declarations: [HeadersComponent, NavbarComponent,DashboardComponent],
  imports: [
    CommonModule,
    DashboardModule,
    NzZorroAntdModule   
       
    
    
  ],
  exports : [HeadersComponent,NavbarComponent,DashboardComponent]
})
export class MainlayoutModule { }
