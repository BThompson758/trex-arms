import { Component, Input } from "@angular/core";

@Component({
    selector: 'tx-smCrd',
    templateUrl: 'smallCard.component.html',
    styleUrls: ['smallCard.component.css']
})

export class smallCard{
    @Input() img: string;
    @Input() name: string;
    @Input() num: number;

    constructor(){
        this.img = "/assets/frog.jpeg";
        this.name = "Fool, idiot, moron.";
        this.num = 69;
    }
}