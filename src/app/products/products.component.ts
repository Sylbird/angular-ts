import { Component, NgZone } from '@angular/core';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Product } from '../database.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ButtonGroupModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    FormsModule,
    InputNumberModule,
    OrderListModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];
  product: Product = {
    name: '',
    description: '',
    price: 0,
  };
  visible: boolean = false;
  isEditMode: boolean = false;

  constructor(private productService: ProductService, private ngZone: NgZone) {}

  showAddModal() {
    this.product = {
      name: '',
      description: '',
      price: 0,
    };
    this.isEditMode = false;
    this.visible = true;
  }

  showEditModal(product: Product) {
    this.isEditMode = true;
    this.product = { ...product };
    this.visible = true;
  }

  loadProducts() {
    this.productService.readProducts().then((res) => {
      this.ngZone.run(() => {
        this.products = res;
      });
    });
  }

  addProduct(prodName: string, prodDesc: string, prodPrice: number) {
    this.productService
      .createProduct({
        name: prodName,
        description: prodDesc,
        price: prodPrice,
      })
      .then(() => {
        this.loadProducts();
        this.visible = false;
      });
  }

  sendUpdateData(
    id: number | undefined,
    prodName: string,
    prodDesc: string,
    prodPrice: number
  ) {
    this.productService
      .updateProduct(id!, {
        name: prodName,
        description: prodDesc,
        price: prodPrice,
      })
      .then(() => {
        this.loadProducts();
        this.visible = false;
      });
  }

  removeProduct(prodId: number) {
    this.productService.deleteProduct(prodId).then(() => {
      this.loadProducts();
    });
  }
}
