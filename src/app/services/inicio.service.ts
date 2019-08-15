import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
    
     httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

// API_ENDPOINT = G.settings.API_ENDPOINT;
    API_ENDPOINT = "/api";
 
   constructor(private httpClient: HttpClient) { }

  //consultar tmr Colombia
  tmrColombiaService() {
   // const headers  = new HttpHeaders({'content-type':'application/json'});
    return this.httpClient.get(this.API_ENDPOINT + '/tmrColombia', this.httpOptions);//,{headers:headers}
  }
}
