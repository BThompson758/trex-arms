import { Component } from "@angular/core";
import { ItemModel } from "../products/item.model";
import { mockProductList } from "../products/mockProductList";

@Component({
    selector: 'tx-home',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeComponent{
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