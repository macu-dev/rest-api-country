import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../CountryApp/models/Country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlApi}/all`);
  }
}
