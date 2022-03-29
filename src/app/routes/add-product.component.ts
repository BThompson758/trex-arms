import { Component, OnInit } from '@angular/core';
import { ItemModel } from "../products/item.model";
import { ItemService } from '../routes/item.service';

@Component({
  selector: 'tx-addProduct',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private is:ItemService) { }

  ngOnInit(): void {
  }

  
  addProduct(item:ItemModel){
    this.is.addProduct(item);
  }
  
}
