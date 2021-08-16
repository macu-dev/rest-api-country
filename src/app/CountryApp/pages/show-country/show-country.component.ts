import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../models/Country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.scss']
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(private actividatedRoute: ActivatedRoute,
              private countriesService: CountriesService) { }

  ngOnInit(): void {

    this.actividatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.getCountryById(id)),
        tap(console.log)
      )

      .subscribe(country => this.country = country);
  }

}
