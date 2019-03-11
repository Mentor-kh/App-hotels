import { Component, EventEmitter, Input } from '@angular/core';
import { HOTELS } from './list-hotels';
import { Hotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.html',
  styleUrls: ['./app-hotels.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';
  hotels: Hotel[];
  currentHotel: Hotel;
  currentWeather: { [key: string]: number | string };
  currentProfile: { [key: string]: number | string };
  @Input() currentHotelId: EventEmitter<any> = new EventEmitter();

  setCurrentHotel(id: EventEmitter<number>): void {
    this.setHotel(id);
  }

  setHotel(id): void {
    this.currentHotel = HOTELS[id];
    this.currentWeather = this.currentHotel.weather;
    this.currentProfile = this.currentHotel.profile;
  }

  ngOnInit() {
    this.setHotel(0);
  }
};
