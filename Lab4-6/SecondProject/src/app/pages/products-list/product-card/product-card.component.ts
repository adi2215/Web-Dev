import { Component, Input } from '@angular/core';
import { Product } from '../products.models';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RatingPipe } from './rating.pipe';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RatingPipe, PrimaryButtonComponent, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  encodeProductURI(uri: string) { 
    return encodeURIComponent(uri);
  }

  @Input({required: true}) product! : Product;

}
