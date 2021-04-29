import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService  {

  constructor(private http: HttpClient) { }
  getProducts = ()=>{
    const url='./../assets/data/products.json';
    return this.http.get(url).pipe(
      map((resp: any) => {
          if (resp) {
              return resp;
          } else {
              return false;
          }
      })
  );
  }

  createProduct =(product)=>{
    return this.http.get('./../assets/data/products.json').pipe(
      map((resp: any) => {
          if (resp) {
              resp.products.push(product);
              return resp;
          } else {
              return false;
          }
      })
  );
  }
}
