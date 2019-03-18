import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilterType, IHotel } from '../../dataTypes';
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
  public filteredHotels: IHotel[] = [];
  public searchValue: string;
  public starsValue: string | number;
  @Input() public hotels: IHotel[];
  @Output() public searchValueExport: EventEmitter<string> = new EventEmitter<string>();
  @Output() public starsValueExport: EventEmitter<string | number> = new EventEmitter<string | number>();

  public ngDoCheck(): void {
    this.hotels = HOTELS;
    this.searchValue = this.filter.search.toLowerCase();
    this.starsValue = this.filter.stars;
    this.emitFilters();
  }

  public emitFilters(): void {
    this.searchValueExport.emit(this.searchValue);
    this.starsValueExport.emit(this.starsValue);
  }
}
