import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StarsFilterPipe } from './stars-filter.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

import { AppComponent } from './app-hotels';
import { ListComponent } from './components/list/list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterComponent } from './components/filter/filter.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
