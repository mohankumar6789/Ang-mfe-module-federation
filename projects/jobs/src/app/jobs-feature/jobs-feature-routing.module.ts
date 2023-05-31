import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ { 
  path: 'jobs',
  loadChildren: () => import('./jobs-feature/jobs-feature.module').then(m => m.JobsFeaturemodule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsFeatureRoutingModule { }
