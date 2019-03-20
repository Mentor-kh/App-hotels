import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './dataTypes';

@Pipe({name: 'starsFilter'})
export class StarsFilterPipe implements PipeTransform {
  public transform(hotels: IHotel[], starsValue: string | number): IHotel[] {
    if (hotels) {
      return hotels.filter((hotel: IHotel) => hotel.stars === +starsValue || starsValue === '*');
    }
  }
}