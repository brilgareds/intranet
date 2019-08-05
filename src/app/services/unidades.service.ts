import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  API_ENDPOINT = "http://localhost:8000/api";
  constructor(private httpClient: HttpClient) { }

  //consultar producto
  searchAll() {
   var unidades = [
       {unidades_id:1,nombre:'Libra',abreviatura:'LB'},
       {unidades_id:2,nombre:'Libra1',abreviatura:'LB1'},
       {unidades_id:3,nombre:'Libra2',abreviatura:'LB2'},
       {unidades_id:4,nombre:'Libra3',abreviatura:'LB3'}
   ]   
    return unidades; //this.httpClient.get(this.API_ENDPOINT + '/unidades');
  }

}
