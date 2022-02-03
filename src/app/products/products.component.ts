import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: string[];
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.Products;
  }
}
