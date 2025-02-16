import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-locationn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-locationn.component.html',
  styleUrl: './housing-locationn.component.css'
})
export class HousingLocationnComponent {
  @Input() housingLocation!: HousingLocation;
}
