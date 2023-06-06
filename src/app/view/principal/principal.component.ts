import { Component } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private weatherService: WeatherService){}

  cityName?: string;

  onSubmit() {
    if(this.cityName) {
      this.weatherService.getWeather(this.cityName);
    } else {
      console.log('Nada que buscar');
    }
  }
}
