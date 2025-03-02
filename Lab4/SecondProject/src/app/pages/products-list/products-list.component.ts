import { Component, signal, computed  } from '@angular/core';
import productsList from '../../../../products.json';
import { Product } from './products.models';
import { ProductCardComponent } from './product-card/product-card.component';
import { Category } from './category.models';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    categories = signal<Category[]>([...productsList.categories, { id: 4, name: "Любимые", products: [] }]);
    selectedCategory = signal<Category | null>(null);
    favorites = signal<Product[]>([]);
  
    selectCategory(category: Category): void {
      this.selectedCategory.set(category);
    }
  
    toggleFavorite(product: Product): void {
      let favs = this.favorites();
      if (favs.some(p => p.id === product.id)) {
        this.favorites.set(favs.filter(p => p.id !== product.id));
      } else {
        this.favorites.set([...favs, product]);
      }
  
      this.updateFavoritesCategory();
  
      if (this.selectedCategory()?.id === 4) {
        this.selectedCategory.set(this.getFavoritesCategory());
      }
    }
  
    isFavorite(product: Product): boolean {
      return this.favorites().some(fav => fav.id === product.id);
    }
  
    private updateFavoritesCategory(): void {
      const updatedCategories = this.categories().map(category => 
        category.id === 4 
          ? this.getFavoritesCategory() 
          : category
      );
      this.categories.set(updatedCategories);
    }
  
    private getFavoritesCategory(): Category {
      return { id: 4, name: "Любимые", products: this.favorites() };
    }  
}



