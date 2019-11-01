import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertsService} from 'angular-alert-module';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    ingreso: any = {};
    ingresoForm: FormGroup;
    submitted = false;

    constructor(private loginService: LoginService, private httpClient: HttpClient, private router: Router,
                private formBuilder: FormBuilder, private alerts: AlertsService) {
    }

    onIngreso() {
        this.submitted = true;

<<<<<<< HEAD
        if (this.ingresoForm.valid) {
            this.loginService.login(this.ingreso).subscribe((data) => {
                console.log('hpraaaaaaaaa', data.obj);
                if (data.obj.ingreso) {

                 localStorage.setItem('auth_token', data.obj.token);
                 localStorage.setItem('userId', data.obj.userId);
                 localStorage.setItem('userRol', data.obj.userRol);
                 this.alerts.setMessage('BIENVENIDO ', 'success');
=======

onIngreso(){
    console.log("entra");
	this.submitted = true;


if(this.ingreso.login !== undefined && this.ingreso.password !== undefined){
	this.loginService.login(this.ingreso).subscribe((data) => {
	      if(data.obj.ingreso){
	        localStorage.clear();

			console.log("data.obj",data.obj);
			localStorage.setItem('login_user', data.obj.login_user);
			localStorage.setItem('auth_token', data.obj.token);
			localStorage.setItem('userId', data.obj.login_id);
			localStorage.setItem('userRol', data.obj.login_rol);
			this.alerts.setMessage('BIENVENIDO ','success');
>>>>>>> 38554720da83ce88bbd99786eeaaf3e74eb86a8b

                 this.router.navigate(['/inicio']);

<<<<<<< HEAD
                 } else {
                    this.alerts.setMessage('El login o la contraseña son incorrectas', 'error');
                 }
            });

        } else {
            return;
        }
=======
		}else{
			this.alerts.setMessage('El login o la contraseña son incorrectas','error');
		}
			
	});
  }else{
     console.log('no datos');  
  }
}
>>>>>>> 38554720da83ce88bbd99786eeaaf3e74eb86a8b

    }


    loginIn() {
        return (localStorage.getItem('auth_token') !== null);
    }


<<<<<<< HEAD
    onCerrar() {
        const userId = localStorage.getItem('userId');
        this.loginService.logout(userId).subscribe((data: any) => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('userId');
                this.router.navigate(['/login']);
                return;
            },
            (error) => {
                alert('Ocurrio un Error onBusquedad');
                console.log('imprimir', error);
            });
=======
var userId = localStorage.getItem('userId');
this.loginService.logout(userId).subscribe((data: any) => {
localStorage.removeItem('auth_token');
localStorage.removeItem('userId');
this.router.navigate(['/login']);
localStorage.clear();
return;
},
(error) => {
alert('Ocurrio un Error onBusquedad');
console.log("imprimir", error);
});    
>>>>>>> 38554720da83ce88bbd99786eeaaf3e74eb86a8b

    }


    ngOnInit() {
        this.ingresoForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

}
