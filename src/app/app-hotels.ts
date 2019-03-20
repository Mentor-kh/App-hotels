import { Component, EventEmitter, Input } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { NotificationService } from './services/notification.service';
import { IHotel } from './dataTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.html',
  styleUrls: ['./app-hotels.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public hotels: IHotel[];
  public favoriteHotels: IHotel[] = [];
  public activeHotel: IHotel;
  @Input() public activeHotelEmit: EventEmitter<IHotel> = new EventEmitter();
  @Input() public removeFromFavorites: EventEmitter<IHotel> = new EventEmitter();
  @Input() public addFavoriteHotel: EventEmitter<IHotel> = new EventEmitter();

  public constructor(
    private loadingService: LoadingService,
    private notification: NotificationService
  ) { }

  public ngOnInit(): void {
    this.loadingService.getHotels().then((value: IHotel[]) => {
      this.hotels = value;
      this.activeHotel = this.hotels[0];
    });
  }

  public addToFavorites(addFavoriteHotel: IHotel): void {
    if (this.favoriteHotels &&
    !this.favoriteHotels.find((favoriteHotel: IHotel) => addFavoriteHotel.id === favoriteHotel.id)) {
      this.favoriteHotels.push(addFavoriteHotel);
      this.notification.showNotification('Добавлено в favorites!');
    } else {
      this.notification.showNotification('This hotel already exist in favorites');
    }
  }

  public removeFavoriteHotel(removeFromFavorites: IHotel): void {
    this.favoriteHotels = this.favoriteHotels.filter((hotel: IHotel) => hotel !== removeFromFavorites);
    this.notification.showNotification('Удалено из favorites!');
  }

  public setActiveHotel(activeHotel: IHotel): void {
    this.activeHotel = this.hotels.find((hotel: IHotel) => activeHotel === hotel);
  }
}
