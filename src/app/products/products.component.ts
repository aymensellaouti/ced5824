import { Component } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map, takeWhile, scan } from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  setting: Settings = { limit: 12, skip: 0 };
  products: Product[] = [];
  products$!: Observable<Product[]>;
  constructor(private productService: ProductService) {}
  more() {
    // Todo : When called this function allow to get more products
  }
}
