import { afterNextRender, Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;
  title = 'productsCRUD';

  constructor() {
    afterNextRender(() => {
      this.productsComponent.loadProducts();
    });
  }
}
