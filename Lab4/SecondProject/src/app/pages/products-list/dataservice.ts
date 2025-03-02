import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ categories: Category[] }> {
    return this.http.get<{ categories: Category[] }>(this.jsonUrl);
  }
}
