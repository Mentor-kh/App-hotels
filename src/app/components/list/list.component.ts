import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from '../../dataTypes';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public currentHotel: Hotel;
  @Input() public favoriteHotels: Hotel[];
  @Input() public hotels: EventEmitter<Hotel[]> = new EventEmitter<Hotel[]>();
  @Input() public filteredHotelsExport: EventEmitter<Hotel[]> = new EventEmitter<Hotel[]>();
  @Output() public favoriteHotelsExport: EventEmitter<Hotel[]> = new EventEmitter<Hotel[]>();
  @Output() public currentHotelId: EventEmitter<number> = new EventEmitter<number>();

  public title: string = 'Righteous indignation & like';

  public setCurrentHotel(hotel: Hotel): void {
    this.currentHotelId.emit(hotel.id);
  }

  public addToFavorites($event: Event, hotel: Hotel): void {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.favoriteHotels && !this.favoriteHotels.find((favoriteHotel: Hotel) => hotel.id === favoriteHotel.id)) {
      this.favoriteHotels.push(hotel);
      this.favoriteHotelsExport.emit(this.favoriteHotels);
    } else {
      alert('This hotel already exist in favorites');
    }
  }

  private filterHotels(filteredHotelsExport: EventEmitter<Hotel[]>): void {
    this.hotels = filteredHotelsExport;
  }
}
