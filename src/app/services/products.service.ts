import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: string[] = ['Toast', 'Bucket'];
  constructor() {}

  add(product: string): void {
    this.products.push(product);
    console.log(this.products);
  }

  get Products(): string[] {
    return this.products;
  }
}
