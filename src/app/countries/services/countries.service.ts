import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor( private http: HttpClient ) { }

  private apiUrl: string = "https://restcountries.com/v3.1"

  private getCountriesRequest( url: string ): Observable<Country[]>{
    return this.http.get<Country[]>( url )
    .pipe(
      catchError(()=> of( [] )),
    )
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>( url )
      .pipe(
      map( countries => countries.length > 0 ? countries[0] : null ),
      catchError(()=> of(null)),
      delay( 2000 ),
    )
  }

  searhCapital( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest( url );
  }

  searhRegion( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest( url );
  }

  searhCountry( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest( url );
  }

}
