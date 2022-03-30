import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Api ='https://data.covid19india.org/v4/min/data.min.json'

  constructor( private http:HttpClient) { }


  getData(){
    return this.http.get(this.Api)
  }

}
