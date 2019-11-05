import { Injectable } from '@angular/core';
//import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {
    
    constructor(private router: Router, private loginService: LoginService) {
        
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        // If the user is not logged in we'll send them back to the home page
        if (!this.loginService.currentUserValue) {
            console.log('No estás logueado');
            console.log('route:::',route);
            this.router.navigate(['/login']);
            return false;
        }else{    
        console.log('route.data.roles ',route.data.roles) ;   
        console.log('this.loginService.currentUserValue ',this.loginService.currentUserValue.login_rol) ;   
        console.log('this.loginService.currentUserValue ---',route.data.roles.indexOf(this.loginService.currentUserValue.login_rol)) ;   
//        
//            if (route.data.roles && route.data.roles.indexOf(this.loginService.currentUserValue) === -1) {
//                console.log("this.loginService.currentUserValue",this.loginService.currentUserValue);
//                    // role not authorised so redirect to home page
//                    this.router.navigate(['/login']);
//                    return false;
//            }
        }
 console.log('route:::',route.data.roles);
        return true;
    }
}
