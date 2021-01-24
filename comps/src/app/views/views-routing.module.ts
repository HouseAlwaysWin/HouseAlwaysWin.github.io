import { StatisticsComponent } from './statistics/statistics.component';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ViewsHomeComponent,
    children: [
      { path: 'statistics', component: StatisticsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
