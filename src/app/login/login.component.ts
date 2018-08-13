import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login(){
    var mail = (<HTMLInputElement>document.getElementById('InputEmail1')).value;
    var password = (<HTMLInputElement>document.getElementById('InputPassword1')).value;
    if(mail == "admin" && password == "admin"){
      window.location.href = "/categories";
    }
  }
  constructor(){
  }

  ngOnInit() {
    
  }
}
