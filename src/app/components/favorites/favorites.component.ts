import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHotel } from '../../dataTypes';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Output() public removeFromFavorites: EventEmitter<IHotel> = new EventEmitter<IHotel>();
  @Input() public favoriteHotels: IHotel[];

  public removeHotel(removeFromFavorites: IHotel): void {
    this.removeFromFavorites.emit(removeFromFavorites);
  }
}