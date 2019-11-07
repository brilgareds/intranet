import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from "../../environments/environment";
import { HttpParams} from  "@angular/common/http";
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class LoginService {
    
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;


public httpOptions = {
headers: new HttpHeaders({
'application/x-www-form-urlencoded': '*'
})
};



 API_ENDPOINT = environment.urlService +"/api";


constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}


static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

let config = {
'required': 'Este campo es requerido'
};

return config[validatorName];
}


public get currentUserValue(): User {
   return this.currentUserSubject.value;
}


login(ingreso: any){
   const  params = new  HttpParams().set('login', ingreso.login).set('password', ingreso.password);
   let data;//(clients: Client[])
   return this.httpClient.get(this.API_ENDPOINT + '/login', {params}).pipe(map((user : any) => {
   console.log("user---",user);
        if (user.status === 200) {
            if (user.obj && user.obj.token) {
                localStorage.setItem('currentUser', JSON.stringify(user.obj));
                this.currentUserSubject.next(user.obj);
                return user.obj;
            }else{
                return false;
            }
            
        }else{
          return false;
        }
    }));
}


logout(userId: any) {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        const  params = new  HttpParams().set('userId', userId)
        return this.httpClient.get(this.API_ENDPOINT + '/logout',{params});
    }

}
