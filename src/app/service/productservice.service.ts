import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Add or update a product
  addOrUpdateProduct(product: Product): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
