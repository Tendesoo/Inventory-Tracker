import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ItemsService } from 'src/app/services/items.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login:any = FormGroup;
users:any = [];

  constructor( private router: Router , private fb:FormBuilder , private items:ItemsService) { }

    ngOnInit(): void {
      this.login = this.fb.group({
        name:['',Validators.required],
        password:['',Validators.required]
      })

      this.items.getUser().subscribe((data:any)=>{
        this.users = data;
      })
    }

    loginSubmit(data:any){
      
      if(data.name) {
        this.users.forEach((item:any) => {
        if(item.name === data.name  && item.password === data.password){
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['user'])
        }
        }
     )}
    }

    gotToSignup(){
      this.router.navigate(['register']);
    }
    }
    

  
