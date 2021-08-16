import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../CountryApp/models/Country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlApi = environment.urlApi;

  get httpParams(): HttpParams{
    // agreamos esto al url
    return new HttpParams().set('fields',
    'name;capital;alpha2Code;flag;population;region;subregion;topLevelDomain;currencies;languages;borders;nativeName');
  }

  constructor(private http: HttpClient) { }
   // para acortar la info que trae la api(la api lo permite)
  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlApi}/all`);
  }

  getCountriesByRegion(nameRegion: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlApi}/region/${nameRegion}`);
  }

  searchCountries(word: string): Observable<Country[]> {
    const url = `${this.urlApi}/name/${word}`;
    return this.http.get<Country[]>(url,  {params: this.httpParams});
  }

  getCountry(word: string): Observable<Country>{
    const url = `${this.urlApi}/name/${word}`;
    return this.http.get<Country>(url,  {params: this.httpParams});
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.urlApi}/alpha/${id}`;
    // dentro del pipe puedo colocar cualquier expresion de rxjs
    return this.http.get<Country>(url);
  }

}
