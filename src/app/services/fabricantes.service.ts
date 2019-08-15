import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  API_ENDPOINT = "http://localhost:3001/api";
  constructor(private httpClient: HttpClient) { }

  //consultar fabricantes
  searchAll() {
    console.log("###",this.httpClient.get(this.API_ENDPOINT + '/listarProductos'));
    return this.httpClient.get(this.API_ENDPOINT + '/listarProductos');
  }
}
