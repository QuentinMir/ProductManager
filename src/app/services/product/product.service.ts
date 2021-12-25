import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [];

    for (let i = 0; i < 10; i++) {
      this.products.push(new Product(i, 'nom ' + i, true));
    }
  }

  updateStatusForproductId(productId: number): Promise<Product> {
    return new Promise<Product>((res, rej) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === productId) {
          this.products[index].status = !this.products[index].status;
          res(this.products[index]);
        }
      }
    });
  }

  updateAllStatus(newStatus: boolean): Promise<Product[]> {
    return new Promise<Product[]>((res, rej) => {
      this.products.forEach((product) => (product.status = newStatus));
      res(this.products);
    });
  }

  getProductById(productId: number): Promise<Product> {
    return new Promise<Product>((res, rej) => {
      for (let product of this.products) {
        if (product.id === productId) {
          res(product);
          break;
        }
      }
    });
  }

  addProduct(productToAdd: Product): Promise<void> {
    return new Promise<void>((res, rej) => {
      //récup le dernier livre du tableau
      //récup son id et ajoute 1
      productToAdd.id = this.products[this.products.length - 1].id + 1;
      this.products.push(productToAdd);
      res();
    });
  }

  editProduct(productToEdit: Product): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === productToEdit.id) {
          this.products[index] = productToEdit;
          res();
          break;
        }
      }
    });
  }

  deleteProduct(productIdToDelete: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === productIdToDelete) {
          this.products.splice(index, 1);
          res();
          break;
        }
      }
    });
  }
}
