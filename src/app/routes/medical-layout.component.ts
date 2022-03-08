import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../products/product.model";
import { ProductService } from "./products.service";

@Component({
  selector: 'tx-med',
  templateUrl: 'medical-layout.component.html',
  styleUrls: ['medical-layout.component.css']
})
export class MedicalComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductList("medical").subscribe((data: ProductModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        this.products.push(product);
      }
    });
  }
}