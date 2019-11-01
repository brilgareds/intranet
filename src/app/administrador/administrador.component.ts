import { Component, OnInit } from '@angular/core';
import {AdministradorFaces} from '../interfaces/administradorFaces';
import {InicioFaces} from '../interfaces/inicioFaces';
import { AdministradorService } from '../services/administrador.service';
import { ComponentService } from '../services/component.service';
import{ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
fileData: File = null;
              previewUrl:any = null;
              fileUploadProgress: string = null;
              uploadedFilePath: string = null;
uploadedFiles : Array<File>;
adminTipo: AdministradorFaces[];
buscarModel: AdministradorFaces[];
inicioAreas: InicioFaces[];
registro: any = {};
search: any = {};
registerForm: FormGroup;
  submitted = false;
id = this._route.snapshot.paramMap.get('id');

  constructor(private administradorService: AdministradorService,private httpClient: HttpClient, private _route: ActivatedRoute, private formBuilder: FormBuilder, private alerts: AlertsService) { 
   console.log("idADMINISTRADORR::",this._route.snapshot.paramMap.get('id'));}

       listarAreas() {    
        this.administradorService.mostrarAreas1().subscribe((data: any) => {
                this.inicioAreas = data.obj;
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }

   

     mostrarTipoDoc() {
        this.administradorService.listarTipoDoc().subscribe((data: any) => {
                this.adminTipo = data.obj;
                return;
            },
            (error) => {
                alert('Ocurrio un Error mostrarTipoDoc');
                console.log("imprimir", error);
            });
    }








    /*

  onSubmit2() {
    this.submitted = true;
     
    // stop the process here if form is invalid
    if (this.registerForm.valid) {
        this.administradorService.almacenarRegistro(this.registro).subscribe((data) => {
      console.log("imprimir", data);
    });
        
    }else{
      return;
    }

 
    alert('SUCCESS!!');
}*/

  fileProgress(fileInput: any) {
                  this.fileData = <File>fileInput.target.files[0];
                  this.preview();
              }

              preview() {
                // Show preview
                var mimeType = this.fileData.type;
                if (mimeType.match(/image\/*/) == null) {
                  return;
                }

                var reader = new FileReader();      
                reader.readAsDataURL(this.fileData);
                reader.onload = (_event) => {
                  this.previewUrl = reader.result;
                }
              }

             

  httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

            onSubmit() {

              this.submitted = true;
              if (this.registerForm.valid) {
                  
                const formData = new FormData();
                formData.append('file', this.fileData);
                formData.append('area', this.registro.area);
                formData.append('codigo', this.registro.codigo);
                formData.append('nombreDoc', this.registro.nombreDoc);
                formData.append('tipodoc', this.registro.tipodoc);

                this.fileUploadProgress = '0%';

                this.administradorService.almacenarRegistro(formData, this.registro).subscribe(events => {
                  if(events.type === HttpEventType.UploadProgress) {
                    this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                  } else if(events.type === HttpEventType.Response) {
                    this.fileUploadProgress = '';
                    this.alerts.setMessage('DOCUMENTO AGREGADO CORRECTAMENTE','success');
                    this.clear();
                  }

                })
                  
              }else{
                return;
              }
            }




     onBusquedad() {
        this.administradorService.buscar(this.search).subscribe((data: any) => {
                this.buscarModel = data.obj;
                return;
            },
            (error) => {
                alert('Ocurrio un Error onBusquedad');
                console.log("imprimir", error);
            });
    }

    onEliminar(data){
      if(confirm('¿ESTA SEGURO DE ELIMINAR EL DOCUMENTO?')){
        this.administradorService.eliminar(data).subscribe((data: any) => {
              this.alerts.setMessage('ELIMINADO CORRECTAMENTE','warn');
              this.onBusquedad();
                return;
            },
            (error) => {
                alert('Ocurrio un Error onBusquedad');
                console.log("imprimir", error);
            });    
      };
    }
    clear(){
      this.registro = {};
    }

  ngOnInit() {
   this.listarAreas();
   this.mostrarTipoDoc();
   this.registerForm = this.formBuilder.group({
      nombreDoc: ['', Validators.required],
      tipodoc: ['', Validators.required],
      codigo: ['', Validators.required],
      area: ['', Validators.required],
      url: ['', Validators.required],
         });
  }

}
