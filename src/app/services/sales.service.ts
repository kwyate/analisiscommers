import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Sales } from './../interfaces/sales';
import {environment} from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {}


  getSales(){
    return this.http.get<Sales[]>(environment.pathSales);
  }
}
