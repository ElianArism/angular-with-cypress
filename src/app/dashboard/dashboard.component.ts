import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  inputValue!: string;

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  addProduct(): void {
    if (this.inputValue.trim().length) {
      this.productsService.add(this.inputValue.trim());
      this.router.navigateByUrl('/products');
    }
  }
}
