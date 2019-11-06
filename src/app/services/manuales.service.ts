import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from  "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ManualesService {

    public httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        })
    };

API_ENDPOINT = environment.urlService +"/api";
    url_documentos = this.API_ENDPOINT + '/listarDocumentos';

  constructor(private httpClient: HttpClient) { }

  public listarDocumentos(id) {
        const  params = new  HttpParams().set('id', id);
        return this.httpClient.get(this.API_ENDPOINT + '/listarDocumentos',{ params });
    }


  listarManuales() {
      return this.httpClient.get(this.API_ENDPOINT + '/listarManuales', this.httpOptions);
    }
    
  listarProcesos() {
    return this.httpClient.get(this.API_ENDPOINT + '/listarProcesos', this.httpOptions);
    }
}
