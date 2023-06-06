import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url: string = "https://api.openweathermap.org/data/2.5/weather?appid=c2395dafd752b24690e1cdd50b5a6972&q=";

  constructor(
    private http: HttpClient
  ) { }

  getWeather(cityName: string) {
    this.http.get(this.url + cityName).subscribe(
      result => {
        console.log(cityName);
      }
    )
    
  }
}
