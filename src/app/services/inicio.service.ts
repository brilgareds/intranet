import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InicioFaces} from '../interfaces/inicioFaces';
import {HttpParams} from  "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InicioService {

    public httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        })
    };

    // API_ENDPOINT = G.settings.API_ENDPOINT;
    //API_ENDPOINT = "http://localhost:3001/api";
    //url_extenciones = this.API_ENDPOINT + '/listarExtensiones';
    API_ENDPOINT = environment.urlService +"/api";


   


    constructor(private httpClient: HttpClient) {
    }

        static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
 
    let config = {
        'required': 'Este campo es requerido'
    };
 
    return config[validatorName];
  }

    //consultar tmr Colombia
    public tmrColombiaService() {
        return this.httpClient.get(this.API_ENDPOINT + '/tmrColombia', this.httpOptions);
    }

    public listarExtenciones() {
       return this.httpClient.get(this.API_ENDPOINT + '/listarExtensiones', this.httpOptions);
    }

    
    public mostrarPortada() {
        return this.httpClient.get(this.API_ENDPOINT + '/mostrarPortada', this.httpOptions);
    }

    public mostrarEnlaces() {
        return this.httpClient.get(this.API_ENDPOINT + '/mostrarEnlaces', this.httpOptions);
    }  

     public mostrarPublica() {
        return this.httpClient.get(this.API_ENDPOINT + '/mostrarPublica', this.httpOptions);
    }   

 public almacenPublicidad(crear : any) {
        const  params = new  HttpParams().set('contenido', crear.contenido).set('publicador', crear.publicador).set('sede', crear.sede).set('titulo', crear.titulo);
        return this.httpClient.get(this.API_ENDPOINT + '/almacenPublicidad',{params});
    } 
     
} 
