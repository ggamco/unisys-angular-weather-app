import { Component } from '@angular/core';
import { Animal } from 'src/app/class/animal';
import { FiguraGeometrica, Polyghon, Square, SquareImplementation } from 'src/app/interface/figura-geometrica';
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

  onClick() {
    var animal: Animal = new Animal('');
    var figura: Square = new SquareImplementation('cuadrado', 4);

    var numeros:number[] = [1,2,3,4];
    this.imprimirElementos(numeros)

  }

  imprimirElementos<T>(elementos: T[]) {
    for (let index = 0; index < elementos.length; index++) {
      const element = elementos[index];
      console.log(element)
    }
  }
}
