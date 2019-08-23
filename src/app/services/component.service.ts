import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
    
       httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

  // API_ENDPOINT = "/api";
  API_ENDPOINT = "http://localhost:3001/api";
   constructor(private httpClient: HttpClient) { }

  //consultar ip Local
  ipLocal() {
    return this.httpClient.get(this.API_ENDPOINT + '/ipLocal', this.httpOptions);
  }
  
}
