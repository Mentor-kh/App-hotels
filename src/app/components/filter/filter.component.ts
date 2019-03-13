import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel, IFilterType } from '../../dataTypes';
import { HOTELS } from '../../list-hotels';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  public filter: IFilterType = {
    stars: '*',
    search: ''
  };
  public filteredHotels: Hotel[] = [];
  @Input() public hotels: Hotel[];
  @Output() public filteredHotelsExport: EventEmitter<Hotel[]> = new EventEmitter<Hotel[]>();

  public ngDoCheck(): void {
    this.hotels = HOTELS;
    this.filterHotels();
  }

  public filterHotels(): void {
    const searchValue: string = this.filter.search.toLowerCase();
    const starsValue: string | number = this.filter.stars;
    this.filteredHotels = this.hotels.filter((hotel: Hotel) =>
      (hotel.stars === +starsValue || starsValue === '*') &&
      (hotel.title.toLowerCase().includes(searchValue) ||
      hotel.description.toLowerCase().includes(searchValue))
    );
    this.filteredHotelsExport.emit(this.filteredHotels);
  }
}
