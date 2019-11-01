import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {HttpParams} from  "@angular/common/http";

@Injectable({
providedIn: 'root'
})
export class LoginService {


public httpOptions = {
headers: new HttpHeaders({
'Access-Control-Allow-Origin': '*',
'Authorization': 'authkey'
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



login(ingreso: any){
   const  params = new  HttpParams().set('login', ingreso.login).set('password', ingreso.password);
   let data;
   data = this.httpClient.get(this.API_ENDPOINT + '/login', {params});
   return data;
}

logout(userId: any){
const  params = new  HttpParams().set('userId', userId)
return this.httpClient.get(this.API_ENDPOINT + '/logout',{params});

}
}
