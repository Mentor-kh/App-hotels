import { Component, EventEmitter, Input } from '@angular/core';
import { HOTELS } from './list-hotels';
import { IHotel } from './dataTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.html',
  styleUrls: ['./app-hotels.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public hotels: IHotel[] = HOTELS;
  public favoriteHotels: IHotel[] = [];
  public activeHotel: IHotel =  this.hotels[0];
  @Input() public activeHotelEmit: EventEmitter<IHotel> = new EventEmitter();
  @Input() public removeFromFavorites: EventEmitter<IHotel> = new EventEmitter();
  @Input() public addFavoriteHotel: EventEmitter<IHotel> = new EventEmitter();

  public addToFavorites(addFavoriteHotel: IHotel): void {
    if (this.favoriteHotels &&
    !this.favoriteHotels.find((favoriteHotel: IHotel) => addFavoriteHotel.id === favoriteHotel.id)) {
      this.favoriteHotels.push(addFavoriteHotel);
    } else {
      alert('This hotel already exist in favorites');
    }
  }

  public removeFavoriteHotel(removeFromFavorites: IHotel): void {
    this.favoriteHotels = this.favoriteHotels.filter((hotel: IHotel) => hotel !== removeFromFavorites);
  }

  public setActiveHotel(activeHotel: IHotel): void {
    this.activeHotel = this.hotels.find((hotel: IHotel) => activeHotel === hotel);
  }
}
