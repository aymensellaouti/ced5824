import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  tap,
  skip,
} from 'rxjs';
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
  takeMore = true;
  #settingsSubject$: BehaviorSubject<Settings> = new BehaviorSubject(
    this.setting
  );
  products: Product[] = [];
  products$: Observable<Product[]> = this.#settingsSubject$
    // setting1 , setting2, setting3, setting4 ....
    .pipe(
      //tap((setting) => console.log({ setting })),
      concatMap((setting) => this.productService.getProducts(setting)),
      // response1, response2, response3
      //tap((productApiResponse) => console.log({ productApiResponse })),
      map((productApiResponse) => productApiResponse.products),
      //tap((products) => console.log({ products })),
      // portionProducts1, portionProducts2,.....,
      takeWhile(products => {
        if(!products.length) {
          this.takeMore = false;
          return false;
        }
        return true;
      }),
      scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
      // cumulProducts1, cumulProducts2, ...
    );
  constructor(private productService: ProductService) {}
  more() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + this.setting.limit,
    };
    this.#settingsSubject$.next(this.setting);
  }
}
