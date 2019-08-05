import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  API_ENDPOINT = "http://localhost:8000/api";
  constructor(private httpClient: HttpClient) { }

  //consultar fabricantes
  searchAll() {
    
    var fabricantes = [
       {fabricantes_id:1,nombre:'abor',identificacion:'881',direccion:'cr'},
       {fabricantes_id:2,nombre:'tredu',identificacion:'882',direccion:'cr'},
       {fabricantes_id:3,nombre:'poty',identificacion:'883',direccion:'cr'},
       {fabricantes_id:4,nombre:'nure',identificacion:'884',direccion:'r'},
       {fabricantes_id:5,nombre:'zopu',identificacion:'885',direccion:'cr'},
   ] 
    return fabricantes;//this.httpClient.get(this.API_ENDPOINT + '/fabricantes');
  }
}
