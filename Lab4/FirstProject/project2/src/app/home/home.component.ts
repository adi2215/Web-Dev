import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationnComponent} from '../housing-locationn/housing-locationn.component';
import {HousingLocation} from '../housinglocation';
import { HousingService } from '../housing.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationnComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of housingLocationList; track housingLocation.id) {
        <app-housing-locationn
          [housingLocation]="housingLocation"
        ></app-housing-locationn>
      }
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  housingLocationList : HousingLocation[] = []
  housingService: HousingService = inject(HousingService);
}