import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'tx-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    console.log("button clicked");
    console.log(data.value);
    data.reset;

    this.auth.signup(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      },
      error =>{
        console.log("error");
        
      }
    )
  }
}
