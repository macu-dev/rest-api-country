import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/Country.interface';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html'
})
export class CardCountryComponent implements OnInit {

   @Input() country!: Country;
  constructor() { }

  ngOnInit(): void {

  }


}
