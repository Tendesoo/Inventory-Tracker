import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Item } from 'src/app/models/items';
import{MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from 'src/app/services/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  price: number;
  itemName: string;
}

@Component({
  selector: 'app-display-inventory',
  templateUrl: './display-inventory.component.html',
  styleUrls: ['./display-inventory.component.scss']
})
export class DisplayInventoryComponent implements OnInit {

  items: Item[] = []

  readonly ROOT_URL = 'https://62612d40f429c20deb9c1471.mockapi.io/inventory'

  displayedColumns: string[] = ['itemName', 'price' , 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private http: HttpClient ,private dialog:MatDialog , 
     private api: ApiService ) {}
  openDialog(){
    this.dialog.open(DialogComponent,{
     width: '30%'
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
        this.getAllProducts()
      }
     })
  }

  ngOnInit():void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = res
        console.log(res)
      },
      error:(err)=>{
        alert("Error while fetching the Records")
      }
    })
  }
  editProduct(element:any){
    this.dialog.open(DialogComponent,{
      width:'30%' ,
      data:element
    }).afterClosed().subscribe(val =>{
      if(val==='update'){
        this.getAllProducts()
      }
     })
  }
  deleteProduct(id:number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully")
        this.getAllProducts()
      },
      error:()=> {
        alert("Error while deleting the product")
      }
    }) }}




