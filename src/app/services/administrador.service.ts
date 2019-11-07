import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdministradorFaces} from '../interfaces/administradorFaces';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpParams} from  "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'authkey',
            'userid': '1'
        })                                                                                                                                                                         
    };


   // API_ENDPOINT = "http://10.0.2.119:3001/api";
API_ENDPOINT = environment.urlService +"/api";


  constructor(private httpClient: HttpClient) { }


    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
 
    let config = {
        'required': 'Este campo es requerido'
    };
 
    return config[validatorName];
  }


 almacenarRegistro(formData : FormData, registro : any){

     return this.httpClient.post<any>(this.API_ENDPOINT+'/upload/',formData,{reportProgress : true,
                  observe : 'events'});
    }

   listarTipoDoc() {
        return this.httpClient.get(this.API_ENDPOINT + '/listarTipoDoc',this.httpOptions);
    }

    buscar(search : any){
    const  params = new  HttpParams().set('areaid', search.busquedadarea).set('tipoid', search.busquedadtipodi);
    return this.httpClient.get(this.API_ENDPOINT + '/buscar',{params});

    }

    eliminar(id: any){
    const  params = new  HttpParams().set('id', id)
    return this.httpClient.get(this.API_ENDPOINT + '/eliminar',{params});

    }

 uploadFile(formData) {
 
       let urlApi = 'http://localhost:3001/api/subir';
       return this.httpClient.post<any>(urlApi, {params :formData});
    }

mostrarAreas1() {
        return this.httpClient.get(this.API_ENDPOINT + '/mostrarAreas1', this.httpOptions);
    }




}
