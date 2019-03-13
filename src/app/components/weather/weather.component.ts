import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../dataTypes';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() public currentWeather: { [key: string]: number | string };
}
