import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../products/product.model";
import { ProductService } from "./products.service";

@Component({
  selector: 'tx-pOptics',
  templateUrl: 'pistolOptics-layout.component.html',
  styleUrls: ['pistolOptics-layout.component.css']
})
export class PistolOpticsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductList("pistolOptics").subscribe((data: ProductModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        this.products.push(product);
      }
    });
  }
}