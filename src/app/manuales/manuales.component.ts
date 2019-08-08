import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.css']
})
export class ManualesComponent implements OnInit {

  manuales = [
   { menu: 1, paneles :[
       { panel:1,nombre:'DUSOFT VERSION 1', contenidos:[
       {contenido:1,nombre:'Plan Procesos', descripcion: 'descipcion', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:2,nombre:'Plan Procesos1', descripcion: 'descipcion1', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:3,nombre:'Plan Procesos2', descripcion: 'descipcion2', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:4,nombre:'Plan Procesos3', descripcion: 'descipcion3', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'}
       ]}
   ]},  
   { menu: 2, paneles :[
       { panel:1,nombre:'DUSOFT VERSION 2', contenidos:[
       {contenido:1,nombre:'Plan Procesos a', descripcion: 'descipcion a', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:2,nombre:'Plan Procesos b', descripcion: 'descipcion b', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:3,nombre:'Plan Procesos c', descripcion: 'descipcion c', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:4,nombre:'Plan Procesos d', descripcion: 'descipcion d', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'}
       ]}
   ]} ,  
   { menu: 3, paneles :[
       { panel:1,nombre:'DUSOFT VERSION 2', contenidos:[
       {contenido:1,nombre:'Plan Procesos a', descripcion: 'descipcion a', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:2,nombre:'Plan Procesos b', descripcion: 'descipcion b', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:3,nombre:'Plan Procesos c', descripcion: 'descipcion c', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:4,nombre:'Plan Procesos d', descripcion: 'descipcion d', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'}
       ]}
   ]} ,  
   { menu: 2, paneles :[
       { panel:1,nombre:'DUSOFT VERSION 2', contenidos:[
       {contenido:1,nombre:'Plan Procesos a', descripcion: 'descipcion a', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:2,nombre:'Plan Procesos b', descripcion: 'descipcion b', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:3,nombre:'Plan Procesos c', descripcion: 'descipcion c', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'},
       {contenido:4,nombre:'Plan Procesos d', descripcion: 'descipcion d', link:'https://www.w3schools.com/bootstrap/bootstrap_templates.asp'}
       ]}
   ]}
  ];
  
 
  
  constructor() { }

  ngOnInit() {
  }

}
