import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../models/Country.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  regions = [
    'Africa',
    'Asia',
    'Americas',
    'Europe',
    'Oceania'
  ];

  constructor(private actividatedRoute: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit(): void {

    this.countriesService.getCountries()
      .subscribe(countries => this.countries = countries)
  }

}
