import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
   products: any;
   filter: any;
   productService: ProductsService;

  constructor(productService: ProductsService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.products = this.productService.getProduct().subscribe((data =>
      {
        this.products = data;
        console.log(this.products.book);
      }))
  }
}
 