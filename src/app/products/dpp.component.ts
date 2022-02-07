import { Component } from "@angular/core";

@Component({
    selector: 'tx-dpp',
    templateUrl: 'dpp.component.html',
    styleUrls: ['dpp.component.css']
})

export class DeltaPointPro{
    img: string;
    name: string;
    num: number;

    constructor(){
        this.img = ".";
        this.name = "Leupold DeltaPoint Pro";
        this.num = 72;
    }
}