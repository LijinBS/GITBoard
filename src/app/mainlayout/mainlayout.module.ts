import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzZorroAntdModule } from '../modulesn/nzzorro.module';




@NgModule({
  declarations: [HeadersComponent, NavbarComponent,DashboardComponent],
  imports: [
    CommonModule,
    DashboardModule,
  NzTagModule,
  NzZorroAntdModule
   

   
   
  ],
  exports : [HeadersComponent,NavbarComponent,DashboardComponent]
})
export class MainlayoutModule { }
