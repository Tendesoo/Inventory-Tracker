import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  reactiveForm!: FormGroup;
  constructor(private formBuilder: FormBuilder ,private api: ApiService , private router: Router) {
    this.reactiveForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      cnfrmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    }, {
      validators: this.Mustmatch('password', 'cnfrmPassword')
    })
  }
  get f() { return this.reactiveForm.controls }

  Mustmatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ Mustmatch: true }
        );
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    if (this.reactiveForm.valid){
      this.api.post('Users',this.reactiveForm.value).subscribe((res) => {
        console.log(res)
        alert('Registered')
        this.reactiveForm.reset();
        this.router.navigate([''])
       // location.href = '';
      })
    }
  }
  
}
