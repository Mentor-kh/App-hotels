import { Component, EventEmitter, Input } from '@angular/core';
import { HOTELS } from './list-hotels';
import { Hotel } from './dataTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.html',
  styleUrls: ['./app-hotels.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public hotels: Hotel[] = HOTELS;
  public favoriteHotels: Hotel[] = [];
  public currentHotel: Hotel =  this.hotels[0];
  @Input() public currentHotelId: EventEmitter<number> = new EventEmitter();
  @Input() public favoriteHotelsExport: EventEmitter<Hotel[]> = new EventEmitter();

  public changeFavorites(favoriteHotels: Hotel[]): void {
    this.favoriteHotels = favoriteHotels;
  }
  public setHotel(id: EventEmitter<number>): void {
    this.currentHotel = this.hotels.find((hotel: Hotel) => +id === hotel.id);
  }
}
