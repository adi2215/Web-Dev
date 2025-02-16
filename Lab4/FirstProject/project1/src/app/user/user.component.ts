import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  styles: `
  `,
  templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation = '';
  @Input() name = '';
  logoUrl = 'logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
