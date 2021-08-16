import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowCountryComponent} from './show-country.component';

const routes: Routes = [
  {
    path: '',
    component: ShowCountryComponent
  },
  {
    path: ':id',
    component: ShowCountryComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShowCountryRountingModule { }
