import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
productForm!:FormGroup;
actionBtn: string ="Save";
  constructor(private formBuilder:FormBuilder , private http: HttpClient ,
    @Inject(MAT_DIALOG_DATA) public editData :any ,
     private api: ApiService , private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      itemName:['', Validators.required],
      price:['', Validators.required],
    })
   if(this.editData){
     this.actionBtn= "Update";
     this.productForm.controls['itemName'].setValue(this.editData.itemName);
     this.productForm.controls['price'].setValue(this.editData.price);
   }
  }

  public addItem(){
   if (!this.editData){
    if(this.productForm.valid){
      this.api.post('inventory',this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save')
        },
        error:()=> {
          alert("Error while adding the product")
        }
      })
    }
   }else{
     this.updateProduct()
   }
    }
    updateProduct(){
      this.api.putProduct('inventory',this.productForm.value ,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("Product updated successfully");
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("Error while updating the record!!")
        }
      })
    }

    
}
