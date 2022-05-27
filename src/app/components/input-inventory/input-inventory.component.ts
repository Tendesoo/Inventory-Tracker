import { ThisReceiver } from '@angular/compiler';
import { Component, Host, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-inventory',
  templateUrl: './input-inventory.component.html',
  styleUrls: ['./input-inventory.component.scss']
})

export class InputInventoryComponent implements OnInit {

  public userForm: FormGroup;
  

  readonly ROOT_URL = 'https://62612d40f429c20deb9c1471.mockapi.io/inventory'

  constructor(private fb: FormBuilder, private http: HttpClient) {

   

    this.userForm = this.fb.group({
      itemName: new FormControl(),
      price: new FormControl(),
    })
  }

  public addItem(): void {
    this.http.post<any>(this.ROOT_URL, this.userForm.value).subscribe({
      next:(res)=>{
        alert("Product added successfully")
        this.userForm.reset();
    },
    error:()=> {
      alert("Error while adding the product")
    }
  })
    
  }

  reset() {
    this.userForm.reset();
  }

 
  ngOnInit(): void {

  }

}


