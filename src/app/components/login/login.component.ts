import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }
username: any;
password: any

    ngOnInit(): void {

      
    }

    login() : void {
      console.log(this.username ,this.password)
      if(this.username && this.password){
       this.router.navigate(["user"]);
      }else {
        alert( `Please fill in the empty fields`);
        this.username.reset(); 
        this.password.reset(); 
      }
    }
    }
    

  
