import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdministradorService } from '../services/administrador.service';
import { LoginService } from '../services/login.service';
import { InicioService } from '../services/inicio.service';
 
@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
 
 control: FormControl;
  constructor(private administradorService: AdministradorService, private inicioService: InicioService,private loginService: LoginService) { }
   
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return AdministradorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }    
    return null;
  }

    get errorMessage1() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return InicioService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }    
    return null;
  }


    get errorMessage2() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return LoginService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }    
    return null;
  }


}