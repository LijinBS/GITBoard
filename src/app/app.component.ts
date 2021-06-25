import { Component } from '@angular/core';
 import { NzButtonSize } from 'ng-zorro-antd/button';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GITBoard';
   
  // disabledDate = (current: Date): boolean => {
  //   // Can not select days before today and today
  //   return differenceInCalendarDays(current, this.today) > 0;
  // };
}
//ng-zorro-antd/button
