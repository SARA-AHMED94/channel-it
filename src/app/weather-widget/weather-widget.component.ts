import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  public selectedCountry: string;
  public selectedCity: string;
  public list: Array<object>;
  public viewMood: string = "l";
  public countries: Array<string> = ['us', 'egypt', 'germany', 'italy']
  public cities: Array<any> = [
    ['london', 'Washington', 'Chicago', 'Boston', 'Atlanta'],
    ['Alex', 'Cairo', 'Giza', 'Aswan', 'hurghada', 'Suez'],
    ['Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Cologne', 'Stuttgart'],
    ['Rome', 'Florence', 'Venice', 'Milan', 'Naples', 'Bologna']
  ];
  constructor(private http: ApiService) { }
  ngOnInit() {

  }
  getCities(country) {
    this.selectedCountry = country;

  }
  getInfo(city) {
    this.selectedCity = city;
    this.http.getData(`http://api.openweathermap.org/data/2.5/forecast?q=${this.selectedCity},${this.selectedCountry}&mode=json&appid=5121f13fd90c7f33f764109bcfc0c9fd`)
      .subscribe(res => {
        console.log(res)
        this.list = res.list;
      }, err => {
        console.log("something went wrong")
      }
      )
  }
  switchTogrid() {
    this.viewMood = 'g';
  }
  switchTolist() {
    this.viewMood = 'l';
  }
}
