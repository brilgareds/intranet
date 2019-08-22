import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InicioFaces} from '../interfaces/inicioFaces';

@Injectable({
    providedIn: 'root'
})
export class InicioService {

    public httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'authkey',
            'userid': '1'
        })
    };

// API_ENDPOINT = G.settings.API_ENDPOINT;
    API_ENDPOINT = "/api";

    constructor(private httpClient: HttpClient) {
    }

    //consultar tmr Colombia
    public tmrColombiaService() {
        return this.httpClient.get(this.API_ENDPOINT + '/tmrColombia', this.httpOptions);
    }

    public listarExtenciones() {
        return this.httpClient.get(this.API_ENDPOINT + '/listarExtensiones');
    }
} 
