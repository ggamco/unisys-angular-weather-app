import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../data/weather-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url: string = "https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&appid=c2395dafd752b24690e1cdd50b5a6972&q=";

  constructor(
    private http: HttpClient
  ) { }

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.url + cityName)
  }
}
