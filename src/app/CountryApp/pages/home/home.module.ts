import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InputComponent } from '../../components/input/input.component';
import { FiltersComponent } from '../../components/filters/filters.component';



@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],

  exports:[
    InputComponent,
    FiltersComponent
  ]
})
export class HomeModule { }
