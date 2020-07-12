import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Sales } from './../interfaces/sales';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {}


  getSales(){
    const path = 'https://alw-lab.herokuapp.com/commerces/graph';
    return this.http.get<Sales[]>(path);
  }
}
