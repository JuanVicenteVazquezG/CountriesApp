import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService){

  }

  searchByRegion( term: string ): void {
    this.isLoading = true;
    console.log('Desde ByRegionSearch: ')
    console.log({term})
    this.countriesService.searhRegion(term).subscribe(countries =>{
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
