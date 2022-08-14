// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RequestService {

//   constructor() { }
// }
import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../map';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http:HttpClient) { }
  getData(input:string):Observable<Root[]>{
    // let url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR"
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${input}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
   return this.http.get<Root[]>(url);
  }
}
