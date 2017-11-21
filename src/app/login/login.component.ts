import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  login: FormGroup;

  constructor(){}

  ngOnInit(){
    this.login = new FormGroup({
      'user-name' : new FormControl('', Validators.required),
      'user-password': new FormControl('', Validators.required)
    })

  }

  sendForm(){
    let idUser = this.login.value;
    console.log(idUser);
  }

}
