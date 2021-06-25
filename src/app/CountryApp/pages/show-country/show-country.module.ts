import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCountryRountingModule } from './show-country-rounting.module';
import { ShowCountryComponent } from './show-country.component';



@NgModule({
  declarations: [
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    ShowCountryRountingModule
  ]
})
export class ShowCountryModule { }
