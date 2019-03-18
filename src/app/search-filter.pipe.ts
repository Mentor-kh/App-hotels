import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './dataTypes';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  public transform(hotels: IHotel[], searchText: string): IHotel[] {
    return hotels.filter((hotel: IHotel) =>
      hotel
        .title.toLowerCase()
        .includes(searchText) ||
      hotel.description
        .toLowerCase()
        .includes(searchText)
    );
  }
}