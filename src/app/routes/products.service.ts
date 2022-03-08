import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../products/product.model";

@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    private baseUrl: string = "https://trex-arms-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = "products/"

    constructor(private http: HttpClient) {
    }

    getProductList(component: string) {
        return this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint + component + '.json');
    }
}