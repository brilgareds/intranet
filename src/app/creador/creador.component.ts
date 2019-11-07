import { Component, OnInit } from '@angular/core';
import {CreadorService} from '../services/creador.service';
import {InicioFaces} from '../interfaces/inicioFaces';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { AlertsService } from 'angular-alert-module';


@Component({
selector: 'app-creador',
templateUrl: './creador.component.html',
styleUrls: ['./creador.component.css']
})
export class CreadorComponent implements OnInit {
inicioAreas: InicioFaces[];
inicioEnlace: InicioFaces[];
crearFrom: FormGroup;
controlFroom: FormGroup;
submitted = false;
crea: any = {};
enlace: any = {};
busca: any = {};
ver: any = {};
aprobaModel: InicioFaces[];
buscarModel: InicioFaces[];
verModel: InicioFaces[];

constructor(private creadorService: CreadorService,private httpClient: HttpClient,private formBuilder: FormBuilder, private alerts: AlertsService) { }

onListarExtension() {
this.creadorService.buscarExtension(this.busca).subscribe((data: any) => {
this.buscarModel = data.obj;
return;
},
(error) => {
alert('Ocurrio un Error onListarExtension');
console.log("imprimir", error);
});
}

listarAprobacion() {
this.creadorService.mostrarAprobacion().subscribe((data: any) => {
this.aprobaModel = data.obj;
return;
},
(error) => {
alert('Ocurrio un Error listarAprobacion');
console.log("imprimir", error);
});
}

onBuscarEnlace() {
this.creadorService.buscarEnlace(this.ver).subscribe((data: any) => {
this.verModel = data.obj;

return;
},
(error) => {
alert('Ocurrio un Error onListarEnlace');
console.log("imprimir", error);
});
}

listarAreas() {    
this.creadorService.mostrarAreas2().subscribe((data: any) => {
this.inicioAreas = data.obj;
return;
},
(error) => {
alert('Ocurrio un Error');
console.log("imprimir", error);
});
}


onEliminar(data){
if(confirm('¿ESTA SEGURO DE ELIMINAR LA EXTENSION?')){
this.creadorService.eliminarPropietarios(data).subscribe((data: any) => {
this.alerts.setMessage('ELIMINADO CORRECTAMENTE','warn');
this.onListarExtension();
return;
},
(error) => {
alert('Ocurrio un Error onBusquedad');
console.log("imprimir", error);
});    
};
}

onEliminarE(data){
if(confirm('¿ESTA SEGURO DE ELIMINAR EL ENLACE?')){
this.creadorService.eliminarEnlaces(data).subscribe((data: any) => {
this.alerts.setMessage('ENLACE ELIMINADO CORRECTAMENTE','warn');
this.onBuscarEnlace();
return;
},
(error) => {
alert('Ocurrio un Error onBusquedad');
console.log("imprimir", error);
});    
};
}


onApro(data){
if(confirm('¿ESTA SEGURO DE APROBAR EL ANUNCIO?')){
this.creadorService.aprobado(data).subscribe((data: any) => {
this.alerts.setMessage('ANUNCIO APROBADO CORRECTAMENTE','success');
return;
},
(error) => {
alert('Ocurrio un Error onApro');
console.log("imprimir", error);
});    
};
}

ondesApro(data){
if(confirm('¿ESTA SEGURO DE DESAPROBAR EL ANUNCIO?')){
this.creadorService.desAprobado(data).subscribe((data: any) => {
this.alerts.setMessage('ANUNCIO DESAPROBADO CORRECTAMENTE','success');
return;
},
(error) => {
alert('Ocurrio un Error onApro');
console.log("imprimir", error);
});    
};
}

/*
onApro2(data) {
this.creadorService.aprobado(data).subscribe((data : any) => {
this.alerts.setMessage('APROBADO','success');
console.log("imprimir", data);
});


return;
};*/


mostrarEnlace() {    
this.creadorService.listarEnlace().subscribe((data: any) => {
this.inicioEnlace = data.obj;
return;
},
(error) => {
alert('Ocurrio un Error');
console.log("imprimir", error);
});
}


onCrear() {
this.submitted = true;

if (this.crearFrom.valid) {
this.creadorService.almacenarPropietarios(this.crea).subscribe((data) => {
this.alerts.setMessage('EXTENSIÓN CREADA','success');
console.log("imprimir", data);
});

}else{
return;
}


}

onEnlace() {
this.submitted = true;

if (this.controlFroom.valid) {
this.creadorService.almacenarEnlace(this.enlace).subscribe((data) => {
this.alerts.setMessage('ENLACE CREADOO','success');
console.log("imprimir", data);
});

}else{
return;
}


}

onDesPro(data){
if(confirm('¿ESTA SEGURO DE ELIMINAR LA PUBLICACIÓN?')){
this.creadorService.eliminarPropietarios(data).subscribe((data: any) => {
this.alerts.setMessage('PUBLICACION ELIMINADA CORRECTAMENTE','warn');
this.onListarExtension();
return;
},
(error) => {
alert('Ocurrio un Error onBusquedad');
console.log("imprimir", error);
});    
}
}








ngOnInit() {
this.controlFroom = this.formBuilder.group({
opcion: ['', Validators.required],
name: ['', Validators.required],
url: ['', Validators.required],
});
this.crearFrom = this.formBuilder.group({
areaid: ['', Validators.required],
nombreE: ['', Validators.required],
extension: ['', Validators.required],
});
this.listarAreas();
this.mostrarEnlace();
this.listarAprobacion();
}

}
