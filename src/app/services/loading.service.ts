import { Injectable } from '@angular/core';

import { IHotel } from '../dataTypes';
import { HOTELS } from '../list-hotels';

@Injectable()
export class LoadingService {
  public getHotels(): Promise<IHotel[]> {
    return new Promise((resolve: Function): void => {
      setTimeout(() => resolve(HOTELS), 3000);
    });
  }
}
