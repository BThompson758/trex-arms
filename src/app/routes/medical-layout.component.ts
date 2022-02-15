import { Component } from "@angular/core";
import { medicalProductList } from "../products/medicalProductList";
import { ProductModel } from "../products/product.model";

@Component({
    selector: 'tx-med',
    templateUrl: 'medical-layout.component.html',
    styleUrls: ['medical-layout.component.css']
})
export class MedicalComponent{
    title = 'trex-arms';
    products: ProductModel[] = [];
  
    constructor(){
      //Fetching data from backend later
  
      for(var product of medicalProductList){
        console.log(product);
        this.products.push(product);
      }
    }
}