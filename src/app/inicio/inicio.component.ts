import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  
 extensiones = 
      {area:[
          {nombre:'FINACIERA CONTABLE', propietarios:[
              {nombre:'AUX CONTABLE', extension : 130 },
              {nombre:'AUX CONTABLE', extension : 102 },
              {nombre:'AUX CONTABLE', extension : 137 },
          ]},
          {nombre:'CARTERA', propietarios:[
              {nombre:'JEFE CARTERA', extension : 133 },
              {nombre:'AUX FACTURACION', extension : 134 },
          ]},
          {nombre:'TALENTO HUMANO', propietarios:[
              {nombre:'JEFE TALENTO HUMANO', extension : 103 },
              {nombre:'AUX TALENTO HUMANO', extension : 123 },
          ]},
          {nombre:'CALIDAD', propietarios:[
              {nombre:'JEFE CALIDAD', extension : 110 },
              {nombre:'CALIDAD', extension : 124 },
          ]},
          {nombre:'FINACIERA CONTABLE', propietarios:[
              {nombre:'AUX CONTABLE', extension : 130 },
              {nombre:'AUX CONTABLE', extension : 102 },
              {nombre:'AUX CONTABLE', extension : 137 },
          ]},
          {nombre:'CARTERA', propietarios:[
              {nombre:'JEFE CARTERA', extension : 133 },
              {nombre:'AUX FACTURACION', extension : 134 },
          ]},
          {nombre:'TALENTO HUMANO', propietarios:[
              {nombre:'JEFE TALENTO HUMANO', extension : 103 },
              {nombre:'AUX TALENTO HUMANO', extension : 123 },
          ]},
          {nombre:'CALIDAD', propietarios:[
              {nombre:'JEFE CALIDAD', extension : 110 },
              {nombre:'CALIDAD', extension : 124 },
          ]}
      ]};
  
  ngOnInit() {
  }

}
