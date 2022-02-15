import { Component, Input } from "@angular/core";

@Component({
    selector: 'tx-product',
    templateUrl: 'productCard.component.html',
    styleUrls: ['productCard.component.css']
})

export class productCard{
    @Input() img: string;
    @Input() name: string;
    @Input() cost: number;

    constructor(){
        this.img = "/assets/frog.jpeg";
        this.name = "Fool, idiot, moron.";
        this.cost = 69;
    }
}