import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';  
//import { Observable, of } from 'rxjs';  
import { tap } from 'rxjs/operators';  
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }  
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
      
               
    const token = JSON.parse(localStorage.getItem('currentUser')); 
    if (!!token) {
      
        req = req.clone({
                setHeaders: {
                    authorization : 'bearer ' + token.token,
                    'login_id' : ''+token.login_id,
                    'login_rol' : ''+token.login_rol,
                }
        });
    }

    // pass along non-cacheable requests and invalidate cache  
    if(req.method !== 'GET') {  
      console.log(`Invalidating cache: ${req.method} ${req.url}`);    
      return next.handle(req);  
    }  
  
  
    // send request to server and add response to cache  
    return next.handle(req)  
      .pipe(  
        tap(event => {  
          if (event instanceof HttpResponse) {  
            console.log(`Adding item to cache: ${req.url}`); 
          }  
        })  
      );  
  
  }
}
