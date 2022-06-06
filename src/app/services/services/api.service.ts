import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   baseUrl = "https://62612d40f429c20deb9c1471.mockapi.io/"

  constructor(private http:HttpClient) {}

  post(url : string ,data:any){
    return this.http.post<any>(`${this.baseUrl}${url}`,data)
  }

  getProduct(url : string){
    return  this.http.get<any>(`${this.baseUrl}${url}`, )
  }
  putProduct(url : string,data:any , id : number){
    return this.http.put<any>(`${this.baseUrl}${url}` +id ,data)
  }
   deleteProduct(url : string , id: number){
     return this.http.delete<any>(`${this.baseUrl}${url}` +id)
   }
}
