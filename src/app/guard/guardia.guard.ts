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
       
        if (!this.loginService.currentUserValue) {
            this.router.navigate(['/login']);
            return false;
        }else{              
            if (route.data.roles.indexOf(this.loginService.currentUserValue.login_rol) === -1) {
                    this.router.navigate(['/login']);
                    return false;
            }
        }
        return true;
    }
}
