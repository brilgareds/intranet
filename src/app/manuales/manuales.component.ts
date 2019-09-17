import { Component, OnInit } from '@angular/core';
import {ManualesService} from '../services/manuales.service';
import {ManualesFaces} from '../interfaces/manualesFaces';
import {ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.css']
})

export class ManualesComponent implements OnInit {
 documentosModel: ManualesFaces[];
 area : string;
page : number = 1;
  constructor(private manualesService: ManualesService, private httpClient: HttpClient, private _route: ActivatedRoute,private alerts: AlertsService) { 
  }

  pdfSrc = ""; 
  
  listaDocumentosServicio(id){
    this.manualesService.listarDocumentos(id).subscribe((data: any) => {
      this.documentosModel = data.obj.areas;
      console.log("tamaño",this.documentosModel);
      if(this.documentosModel !== undefined){
       this.area = this.documentosModel[0].nombre;

      }else{
        this.alerts.setMessage('NO SE ENCONTRARON DOCUMENTOS','warn');
      }
      
      return ;
    },
    (error) => {
        alert('Ocurrio un Error');
    });
  }


      abrirPdf = (pdf) => {
     console.log('pdf',pdf);
     this.pdfSrc = "http://localhost:3001/"+pdf;
 
    };

  ngOnInit() {
 this._route.paramMap.subscribe(params  => {
      const id  = params.get('id');
     this.listaDocumentosServicio(id);
    });
  }

}

