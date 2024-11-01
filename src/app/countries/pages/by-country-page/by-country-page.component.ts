//Angular
import { Component, OnInit } from '@angular/core';
//interfaces
import { Country } from '../../interfaces/country';
//services
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit  {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
    searchCountry(term: string):void {
      this.isLoading = true;
      this.countriesService.searchCountry(term)
        .subscribe(counties =>{
          this.countries = counties;
          this.isLoading = false;
        })
  }
}
