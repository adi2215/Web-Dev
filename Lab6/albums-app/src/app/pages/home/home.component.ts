import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
