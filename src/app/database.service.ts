import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  products: Dexie.Table<Product, number>;

  constructor() {
    super('ProductsDatabase');
    this.version(1).stores({
      products: '++id, name, description, price',
    });
    this.products = this.table('products');
  }

  private async initProducts() {}
}
