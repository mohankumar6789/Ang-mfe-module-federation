import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
declare var require: any;
const data = require("../appsettings/appsettings.json");
const webpackConfig = data.webpackConfig;

const routes: Routes = [
  { path: 'dashboard' , loadChildren: () => import('./shell-feature/shell-feature.module').then(m => m.ShellFeatureModule)},
    {
        path: 'jobs',
        loadChildren: () => loadRemoteModule(webpackConfig.jobs).then((m: any) => m.JobsFeatureModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
