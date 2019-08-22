import { Component, OnInit } from '@angular/core';
import { InicioService } from '../services/inicio.service';
import { InicioFaces } from '../interfaces/inicioFaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  precioDolar = 0;
  temp = 0;
  humidity = 0;
  pressure = 0;
  name = "";
  public now: Date = new Date();
  date;
  inicioModel: InicioFaces[];

  constructor(private inicioService: InicioService, private httpClient: HttpClient) {
  
       setInterval(() => {
          this.date = new Date();
        }, 1);
   
     }

 listarExtenciones() {
      this.InicioService.listarExtenciones().subscribe((data: InicioFaces[]) => {
      this.inicioModel = data;
   },
     (error) => {
       alert('Ocurrio un Error');
       console.log("imprimir", error);
     });
  }

 extensiones = 
      {area:[
          {nombre:'FINACIERA CONTABLE', color : 'bg-primary' ,propietarios:[
              {nombre:'AUX CONTABLE', extension : '137' },
              {nombre:'AUX CONTABLE', extension : '102' },
              {nombre:'AUX CONTABLE', extension : '130' },
             
          ]},
          {nombre:'CARTERA', color : 'bg-secondary', propietarios:[
              {nombre:'JEFE CARTERA', extension : 133 },
              {nombre:'AUX FACTURACION', extension : 134 },
          ]},
          {nombre:'TALENTO HUMANO', color : 'bg-success' ,propietarios:[
              {nombre:'JEFE TALENTO HUMANO', extension : 103 },
              {nombre:'AUX TALENTO HUMANO', extension : 123 },
          ]},
          {nombre:'CALIDAD',  color : 'bg-danger' , propietarios:[
              {nombre:'JEFE CALIDAD', extension : 110 },
              {nombre:'CALIDAD', extension : 124 },
          ]},
          {nombre:'FINACIERA CONTABLE',  color : 'bg-warning' ,propietarios:[
              {nombre:'AUX CONTABLE', extension : 130 },
              {nombre:'AUX CONTABLE', extension : 102 },
              {nombre:'AUX CONTABLE', extension : 137 },
          ]},
          {nombre:'CARTERA',  color : 'bg-info' ,propietarios:[
              {nombre:'JEFE CARTERA', extension : 133 },
              {nombre:'AUX FACTURACION', extension : 134 },
          ]},
          {nombre:'TALENTO HUMANO',  color : 'bg-dark' ,propietarios:[
              {nombre:'JEFE TALENTO HUMANO', extension : 103 },
              {nombre:'AUX TALENTO HUMANO', extension : 123 },
          ]},
          {nombre:'CALIDAD',  color : 'bg-primary' ,propietarios:[
              {nombre:'JEFE CALIDAD', extension : 110 },
              {nombre:'CALIDAD', extension : 124 },
          ]}
      ]};
      
      
      publicidad = 
     [
          {
            titulo:'VENTA DE HELADOS',
            asunto:'Helados de piña,maracuya,coco,y lulo',
            propietario:'MARTIVIRIS',
            active: 'active',
            id: 1
          },
          {
            titulo:'SE ALQUILA PIEZA777',
            asunto:'persona sola descuento por trabajar en duana',
            propietario:'rubenchoo',
            active: '',
            id: 2
          },
          {
            titulo:'VENTA DE SANCOCHO',
            asunto:'Gallina o pollo? ',
            propietario:'EL CHAMO',
            active: '',
            id: 3
          },
      ];

      
  tmrColombia() {
   console.log("******************************tmrColombia***************************************");
    this.inicioService.tmrColombiaService().subscribe((data : any) => {
      this.precioDolar = data.obj.dolar.value;
      this.temp = data.obj.main.temp;
      this.humidity = data.obj.main.humidity;
      this.pressure = data.obj.main.pressure;
      this.name = data.obj.name;
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }
    

  
  ngOnInit() {
      this.tmrColombia();
      this.listarExtenciones();
  }

}
