import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../products/product.model";
import { sidecarProductList } from "../products/sidecarProductList";
import { ProductService } from "./products.service";

@Component({
    selector: 'tx-sidecar',
    templateUrl: 'sidecar-layout.component.html',
    styleUrls: ['sidecar-layout.component.css']
})


export class SidecarComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductList("sidecar").subscribe((data: ProductModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        this.products.push(product);
      }
    });
  }
}