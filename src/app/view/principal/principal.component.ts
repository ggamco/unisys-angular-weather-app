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
  temp?: number;
  temp_min?: number;
  temp_max?: number;
  description?: string;

  onSubmit() {
    if(this.cityName) {
      this.weatherService.getWeather(this.cityName).subscribe(
        result => {
          console.log('Recibiendo respuesta...');
          console.log('Temp: ' + result.main?.temp);
          this.temp = result.main?.temp;
          this.temp_max = result.main?.temp_max;
          this.temp_min = result.main?.temp_min;
          this.description  = result.weather?.[0].description;
        }
      );
    } else {
      console.log('Nada que buscar');
    }
  }
}
