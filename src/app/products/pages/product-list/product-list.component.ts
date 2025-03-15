import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  onProductAdded(newProduct: Product) {
    this.products.push(newProduct);
  }

  deleteOneProduct(product: Product) {
    if (confirm("Do tyou really want to delete this product: " + product.name)) {
      this.productService.deleteProduct(product.id || 0).subscribe(() => {
        this.products = this.products.filter(p => p.id !== product.id);
      });
    }
  }
}