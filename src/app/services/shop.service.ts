import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Shop} from './../interfaces/shop';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { 

  }

  getAllCommerce(){
    const path = 'https://alw-lab.herokuapp.com/commerces';
    return this.http.get<Shop>(path);
  }
}
