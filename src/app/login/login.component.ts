import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import{ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';
import { first } from 'rxjs/operators';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

ingreso: any = {};
ingresoForm: FormGroup;
submitted = false;
loading = false;
error = '';

constructor(private loginService: LoginService , private httpClient: HttpClient, 
private router: Router , private formBuilder: FormBuilder, 
private alerts: AlertsService) { 

if (this.loginService.currentUserValue) { 
this.router.navigate(['/inicio']);
}

}



onIngreso(){
this.submitted = true;


if(this.ingreso.login !== undefined && this.ingreso.password !== undefined){



this.loginService.login(this.ingreso).pipe(first())
.subscribe(
data => {
console.log("------------------------------",data);
if(data !== false){
this.alerts.setMessage('BIENVENIDO ','success');
this.router.navigate(['/inicio']);
}else{
this.alerts.setMessage('El login o la contraseña son incorrectas','error'); 
}
},
error => {
this.alerts.setMessage('El login o la contraseña son incorrectas','error');
this.error = error;
this.loading = false;
});

}else{
console.log('no datos');  
}
}


loginIn(){
return (localStorage.getItem('auth_token')!== null);
}


onCerrar(){

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

}


ngOnInit() {
this.ingresoForm = this.formBuilder.group({
login: ['', Validators.required],
password: ['', Validators.required],
});
}

}
