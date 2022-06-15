import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ItemsService } from 'src/app/services/items.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
users:any = [];
showSpinner = false;

  constructor( private router: Router , private fb:FormBuilder , private http:HttpClient) { }

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
    }

    loginSubmit(){
      this.http.get<any>("https://62612d40f429c20deb9c1471.mockapi.io/Users").subscribe(res =>{
        const user = res.find((a: any) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        })
        if (user){
          alert("Login is Successful");
          this.loginForm.reset();
          this.router.navigate(['user'])
        }else {
          alert("User not Found")
        }
      },err =>{
        alert("Server not available")
      })
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false; 
      } , 3000)
    }

    gotToSignup(){
      this.router.navigate(['register']);
    }


    }
    

  
