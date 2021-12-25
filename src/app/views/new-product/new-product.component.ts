import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitNewProduct(productToAdd: Product): void {
    this.productService.addProduct(productToAdd).then(() => {
      this.router.navigateByUrl('/products');
    });
  }
}
