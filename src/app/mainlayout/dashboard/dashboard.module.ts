import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories/repositories.component';
import { MostactiveusersComponent } from './mostactiveusers/mostactiveusers.component';
import { ActivityReportComponent } from './activity-report/activity-report.component';

import { LicensesComponent } from './licenses/licenses.component';
import { ImportantTagsComponent } from './important-tags/important-tags.component';
import { LanguagesComponent } from './languages/languages.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { WatchersComponent } from './watchers/watchers.component';
import { TotalContributorsComponent } from './total-contributors/total-contributors.component';
import { HeaderComponent } from './header/header.component';
import { TotalIssuesComponent } from './total-issues/total-issues.component';
import { TotalPullRequesComponent } from './total-pull-reques/total-pull-reques.component';
import { TotalReleaseComponent } from './total-release/total-release.component';
import { ActionTakenComponent } from './action-taken/action-taken.component';
import { StarredComponent } from './starred/starred.component';
import { DashboardComponent } from './dashboard.component';
import { NzZorroAntdModule } from 'src/app/nzzorro.module';




@NgModule({
  declarations: [RepositoriesComponent, MostactiveusersComponent, ActivityReportComponent,LicensesComponent,ImportantTagsComponent,LanguagesComponent,VisitorsComponent,WatchersComponent,TotalContributorsComponent,TotalReleaseComponent,TotalIssuesComponent,ActionTakenComponent,StarredComponent,TotalPullRequesComponent,HeaderComponent],
  imports: [
    CommonModule,
    NzZorroAntdModule
    
  ],
  exports :[RepositoriesComponent,MostactiveusersComponent,ActivityReportComponent,LicensesComponent,ImportantTagsComponent,LanguagesComponent,VisitorsComponent,WatchersComponent,TotalContributorsComponent,TotalReleaseComponent,TotalIssuesComponent,ActionTakenComponent,StarredComponent,TotalPullRequesComponent,HeaderComponent]
})
export class DashboardModule { }
