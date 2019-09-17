import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdministradorFaces} from '../interfaces/administradorFaces';
import { FormControl, FormGroup } from '@angular/forms';

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


    API_ENDPOINT = "http://localhost:3001/api";



  constructor(private httpClient: HttpClient) { }


    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
 
    let config = {
        'required': 'Este campo es requerido'
    };
 
    return config[validatorName];
  }


 almacenarRegistro(formData : FormData, registro : any){

     return this.httpClient.post<any>(this.API_ENDPOINT+'/upload/',{params :formData, registro},{reportProgress : true,
                  observe : 'events'});
    }

   listarTipoDoc(id) {
        return this.httpClient.get(this.API_ENDPOINT + '/listarTipoDoc', this.httpOptions);
    }

    buscar(){
    console.log("entra service buscar");
    return this.httpClient.get(this.API_ENDPOINT + '/buscar', this.httpOptions);
    }

 uploadFile(formData) {
 
       let urlApi = 'http://localhost:3001/api/subir';
       return this.httpClient.post<any>(urlApi, {params :formData});
    }





}
