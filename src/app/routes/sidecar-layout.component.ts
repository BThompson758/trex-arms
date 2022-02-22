import { Component } from "@angular/core";
import { ProductModel } from "../products/product.model";
import { sidecarProductList } from "../products/sidecarProductList";

@Component({
    selector: 'tx-sidecar',
    templateUrl: 'sidecar-layout.component.html',
    styleUrls: ['sidecar-layout.component.css']
})
export class SidecarComponent{
    title = 'trex-arms';
    products: ProductModel[] = [];
  
    constructor(){
      //Fetching data from backend later
  
      for(var product of sidecarProductList){
        console.log(product);
        this.products.push(product);
      }
    }
}