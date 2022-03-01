import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AccountInfo } from "./acct-info.model";

@Injectable()
@Component({
    selector: 'tx-acctDetails',
    templateUrl: 'acctDetails-layout.component.html',
    styleUrls: ['acctDetails-layout.component.css']
})
export class AccountDetailsComponent implements OnInit{
    myInfo: AccountInfo | undefined;

    constructor(private http: HttpClient){
    }

    ngOnInit(): void {
        console.log("Sending a get request to the server");
        this.getAccountDetails();
        console.log("Registering showAccountDetails as a user");
        this.showAccountDetails();
    }

    getAccountDetails(){
        return this.http.get<AccountInfo>('https://trex-arms-default-rtdb.firebaseio.com/myinfo.json')
    }

    showAccountDetails(){
        this.getAccountDetails().subscribe((data: AccountInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }

   
}