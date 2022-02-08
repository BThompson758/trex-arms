import { Component } from '@angular/core';
import { ItemModel } from './products/item.model';
import { mockProductList } from './products/mockProductList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trex-arms';
  products: ItemModel[] = [];

  constructor(){
    //Fetching data from backend later

    for(var product of mockProductList){
      console.log(product);
      this.products.push(product);
    }
  }
}
