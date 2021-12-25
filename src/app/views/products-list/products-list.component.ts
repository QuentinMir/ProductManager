import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  onClickUpdateStatus(arrayIndex: number) {
    this.productService
      .updateStatusForproductId(this.products[arrayIndex].id)
      .then((product: Product) => {
        this.products[arrayIndex] = product;
      });
  }

  onClickUpdateAllStatus(newStatus: boolean) {
    //retourne une promesse
    this.productService
      .updateAllStatus(newStatus)
      .then((products: Product[]) => {
        this.products = products;
      });
  }

  onClickDeleteProduct(arrayIndex: number): void {
    this.productService
      .deleteProduct(this.products[arrayIndex].id)
      .then(() => {});
  }
}
