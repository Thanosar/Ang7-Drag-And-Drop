import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotels = [
    'Arena Hotel - Amsterdam',
    'Grand Hotel Amstelveen - Amsterdam',
    'Arenas Atiram Hotel- Barcelona',
    'Catalonia Atenas - Barcelona',
    'Catalonia Magdalenes - Barcelona',
    'Abba Berlin hotel - Berlin',
    'Adele Designhotel - Berlin',

  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.hotels, event.previousIndex, event.currentIndex);
    }
  }


  alteHotels = [
    'Austria Trend Hotel Rathauspark  - Vienna',
    'Imperial Hotel  - London',
    'London Court Hotel  - London',
    'Lords Hotel  - London',
    'Almodovar Hotel Biohotel - Berlin',
    'Austria Trend Astoria - Vienna',
  ];


}
