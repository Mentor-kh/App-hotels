import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';

import { StarsFilterPipe } from './pipes/stars-filter.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

import { AppComponent } from './app-hotels';
import { ListComponent } from './components/list/list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterComponent } from './components/filter/filter.component';

import { LoadingService } from './services/loading.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    StarsFilterPipe,
    SearchFilterPipe,
    AppComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    FavoritesComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    LoadingService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
