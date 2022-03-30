import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidStatusComponent } from './covid-status/covid-status.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:'', redirectTo:'covid', pathMatch:'full'},
  {path:"directives", component:DirectivesComponent},
  {path:"covid", component:CovidStatusComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
