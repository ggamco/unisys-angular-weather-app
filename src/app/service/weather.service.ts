import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../data/weather-data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url: string = environment.weatherUrl;

  constructor(
    private http: HttpClient
  ) { }

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.url + cityName)
  }
}
