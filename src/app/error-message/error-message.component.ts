import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdministradorService } from '../services/administrador.service';
 
@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() control: FormControl;
 
  constructor(private administradorService: AdministradorService) { }
   
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return AdministradorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }    
    return null;
  }
}