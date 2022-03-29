import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ProductModel } from "../products/product.model";

@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    constructor(private db:AngularFireDatabase) {
    }

    getProductList(page: string) {
        return this.db.list<ProductModel>("products/" + page).valueChanges();
    }
    
}