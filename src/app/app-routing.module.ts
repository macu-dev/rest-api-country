import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './CountryApp/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./CountryApp/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'id',
        loadChildren: () => import('./CountryApp/pages/show-country/show-country.module').then(m => m.ShowCountryModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
