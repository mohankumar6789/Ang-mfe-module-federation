import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsFeatureRoutingModule } from './jobs-feature-routing.module';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';



const routes: Routes = [
  (path: '', component: SearchJobsComponent)
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobsFeatureRoutingModule
  ]
})
export class JobsFeatureModule { }
