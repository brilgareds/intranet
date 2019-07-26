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
    return this.httpClient.get(this.API_ENDPOINT + '/unidades');
  }

}
