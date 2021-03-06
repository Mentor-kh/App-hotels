import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHotel } from '../../dataTypes';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public searchValue: string;
  public starsValue: string | number;
  @Input() public activeHotel: IHotel;
  @Input() public hotels: EventEmitter<IHotel[]> = new EventEmitter<IHotel[]>();
  @Output() public addFavoriteHotel: EventEmitter<IHotel> = new EventEmitter<IHotel>();
  @Output() public activeHotelEmit: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  public title: string = 'Righteous indignation & like';

  public setCurrentHotel(hotel: IHotel): void {
    this.activeHotelEmit.emit(hotel);
  }

  public addToFavorites($event: Event, hotel: IHotel): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.addFavoriteHotel.emit(hotel);
  }

  public searchHotels(searchValueExport: string): void {
    this.searchValue = searchValueExport;
  }
  public filterHotels(starsValueExport: string | number): void {
    this.starsValue = starsValueExport;
  }
}
