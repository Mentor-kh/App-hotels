import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from '../../dataTypes';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  public listFavorites: Hotel[] = [];
  @Output() public favoriteHotelsExport: EventEmitter<Hotel[]> = new EventEmitter<Hotel[]>();
  @Input() public favoriteHotels: Hotel[];

  public removeFromFavorites(hotelToRemove: Hotel): void {
    this.listFavorites = this.favoriteHotels.filter((hotel: Hotel) => hotel !== hotelToRemove);
    this.favoriteHotelsExport.emit(this.listFavorites);
  }
}
