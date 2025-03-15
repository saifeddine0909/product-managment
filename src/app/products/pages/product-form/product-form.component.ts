import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/interfaces/product';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product: Product = {} as Product;
  @Output() productAdded = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.createProduct(this.product).subscribe(response => {
      this.productAdded.emit(response);
      this.product = {} as Product;
      alert("Added successfully");
    });
  }
}