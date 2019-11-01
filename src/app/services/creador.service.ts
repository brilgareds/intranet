import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InicioFaces} from '../interfaces/inicioFaces';
import {HttpParams} from  "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
providedIn: 'root'
})
export class CreadorService {
public httpOptions = {
headers: new HttpHeaders({
'Access-Control-Allow-Origin': '*',
'Authorization': 'authkey',
'userid': '1'
})

};

// API_ENDPOINT = G.settings.API_ENDPOINT;
//API_ENDPOINT = "http://localhost:3001/api";
API_ENDPOINT = environment.urlService +"/api";



constructor(private httpClient: HttpClient) { }




static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

let config = {
'required': 'Este campo es requerido'
};

return config[validatorName];
}


public mostrarAreas2() {
return this.httpClient.get(this.API_ENDPOINT + '/mostrarAreas2', this.httpOptions);
}


public listarEnlace() {
return this.httpClient.get(this.API_ENDPOINT + '/listarEnlace', this.httpOptions);
}
public mostrarAprobacion() {
return this.httpClient.get(this.API_ENDPOINT + '/mostrarAprobacion', this.httpOptions);
}

public almacenarPropietarios(crear : any) {
const  params = new  HttpParams().set('areaid', crear.areaid).set('extension', crear.extension).set('nombreE', crear.nombreE);
return this.httpClient.get(this.API_ENDPOINT + '/almacenarPropietarios',{params});
} 


public almacenarEnlace(enlace : any) {
console.log("enlaceeee",enlace)
const  params = new  HttpParams().set('opcion', enlace.opcion).set('url', enlace.url).set('name', enlace.name);
return this.httpClient.get(this.API_ENDPOINT + '/almacenarEnlace',{params});
} 


public aprobado(aprobaModel : any) {
console.log("aprobaModel",aprobaModel);
const  params = new  HttpParams().set('id', aprobaModel.id);
console.log("params",params);
return this.httpClient.get(this.API_ENDPOINT + '/aprobado',{params});
} 



buscarExtension(busca : any){
const  params = new  HttpParams().set('busarea', busca.busarea);
return this.httpClient.get(this.API_ENDPOINT + '/buscarExtension',{params});

}


buscarEnlace(ver : any){
const  params = new  HttpParams().set('busOpc', ver.busOpc);
return this.httpClient.get(this.API_ENDPOINT + '/buscarEnlace',{params});

}


eliminarPropietarios(id: any){

const  params = new  HttpParams().set('id', id)
return this.httpClient.get(this.API_ENDPOINT + '/eliminarPropietarios',{params});

}
}
