import { Component, signal } from '@angular/core';
import productsList from '../../../../products.json';
import { Product } from './products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products = signal<Product[]>(productsList);
}
