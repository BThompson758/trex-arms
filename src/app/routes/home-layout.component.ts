import { Component } from "@angular/core";
import { ItemModel } from "../products/item.model";
import { ItemService } from "./item.service";

@Component({
    selector: 'tx-home',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeComponent{
  products: ItemModel[] = [];

  constructor(private itemService:ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getProductList().subscribe((data: ItemModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        this.products.push(product);
      }
    });
  }
}