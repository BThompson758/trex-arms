import { Component } from "@angular/core";
import { pistolOpticsProduct } from "../products/pistolOpticsProduct";
import { ProductModel } from "../products/product.model";

@Component({
    selector: 'tx-pOptics',
    templateUrl: 'pistolOptics-layout.component.html',
    styleUrls: ['pistolOptics-layout.component.css']
})
export class PistolOpticsComponent{
    title = 'trex-arms';
    products: ProductModel[] = [];
  
    constructor(){
      //Fetching data from backend later
  
      for(var product of pistolOpticsProduct){
        console.log(product);
        this.products.push(product);
      }
    }
}