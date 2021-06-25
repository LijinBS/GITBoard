import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // today = new Date()
  
  constructor() { }

  ngOnInit(): void {
  }
  // disabledDate = (current: Date): boolean => {
  //   // Can not select days before today and today
  //   return differenceInCalendarDays(current, this.today) > 0;
  // };

}
