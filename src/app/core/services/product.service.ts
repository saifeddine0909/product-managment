import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="https://662e208ca7dda1fa378c2077.mockapi.io/products";


  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);

  }
  getProductById(id:number):Observable<Product>{

   return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  createProduct(user: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, user);
  }
  
  deleteProduct(id:number):Observable<any>{

    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }
}