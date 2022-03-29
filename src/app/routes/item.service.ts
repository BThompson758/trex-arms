import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ItemModel } from '../products/item.model';

@Injectable(
    { providedIn: 'root' }
)
export class ItemService {
    constructor(private db:AngularFireDatabase) {
    }

    getProductList() {
        return this.db.list<ItemModel>("products/home").valueChanges();
    }

    addProduct(item:ItemModel){
        this.db.list<ItemModel>("products/home").push(item);
    }
}