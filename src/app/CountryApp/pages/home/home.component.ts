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
    'africa',
    'asia',
    'americas',
    'europe',
    'oceania'
  ];
  regionActive = -1;
  word = '';
  isError = false;

  constructor(private actividatedRoute: ActivatedRoute,
              private countriesService: CountriesService) { }

  getIndexChanged(i: string): void {
    this.regionActive = parseInt(i, 10);
    this.getFilteredCountries();
  }




  ngOnInit(): void {

    this.getCountryAll();
  }


  getCountryAll(): void{
    this.countriesService.getCountries()
      .subscribe(countries => this.countries = countries);
  }


  getFilteredCountries(): void {
    if (this.regionActive === -1){
      this.countriesService.getCountries()
        .subscribe(countries => this.countries = countries);
    }else {
      this.countriesService.getCountriesByRegion(this.regions[this.regionActive])
      .subscribe(countries => this.countries = countries);
    }

  }


  search(word: string): void{
    this.word = word;
    if(this.word == ''){
      this.getCountryAll();
    }else {
      this.countriesService.searchCountries(this.word)
      .subscribe(countries => {
        this.countries = countries;
        this.isError = false;
        },(err) =>{
          this.isError = true;
          this.countries = [];
          console.log(err);

        }
      )
    }
  }
  getResultsSearch(word: string): void{
    this.search(word);
  }
}
