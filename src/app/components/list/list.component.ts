import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HOTELS } from '../../list-hotels';
import { Hotel } from '../../hotel';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() currentHotel: Hotel;
  @Output() currentHotelId = new EventEmitter<number>();

  constructor() { }

  title = 'Righteous indignation & like';
  hotels = HOTELS;

  setCurrentHotel(hotel: Hotel) {
    this.currentHotelId.emit(hotel.id);
  }

  ngOnInit() {
  }
}
