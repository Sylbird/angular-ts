import { Injectable } from '@angular/core';
import { DatabaseService, Product } from '../database.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: DatabaseService) {}

  createProduct(product: Product) {
    return this.db.products.add(product);
  }

  readProducts() {
    return this.db.products.toArray();
  }

  updateProduct(productId: number, productData: Product) {
    return this.db.products.update(productId, productData);
  }

  deleteProduct(id: number) {
    return this.db.products.delete(id);
  }
}
