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
    return this.httpClient.get(this.API_ENDPOINT + '/fabricantes');
  }
}
