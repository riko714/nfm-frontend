import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {
  searchUPC = '';
  product: Product | null = null;

  constructor(private productsService: ProductsService) {}

  search() {
    if (!this.searchUPC.trim()) return;
    this.productsService.getProductByUPC(this.searchUPC).subscribe({
      next: (data) => this.product = data,
      error: (err) => console.error(err)
    });
  }
}
