import { Component, OnInit } from '@angular/core';
import {ManualesService} from '../services/manuales.service';
import {ManualesFaces} from '../interfaces/manualesFaces';
import {ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertsService } from 'angular-alert-module';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.css']
})

export class ManualesComponent implements OnInit {
  documentosModel: ManualesFaces[];
  area : string;
  page : number = 1;
  pag = 1;
  zom = 1.0;

  constructor(private manualesService: ManualesService, private httpClient: HttpClient, private _route: ActivatedRoute,private alerts: AlertsService) { 
  }

 pdfSrc = ""; 
  
  listaDocumentosServicio(id){
    this.manualesService.listarDocumentos(id).subscribe((data: any) => {
      this.documentosModel = data.obj.areas;
      if(this.documentosModel !== undefined){
       this.area = this.documentosModel[0].nombre;

       // https://github.com/amgonzalez80/frontend_angular.git

      }else{
        this.alerts.setMessage('NO SE ENCONTRARON DOCUMENTOS','warn');
      }
      
      return ;
    },
    (error) => {
        alert('Ocurrio un Error');
    });
  }

goToLink(pdf: string){
let url = environment.urlService+"/" +pdf;
//let url = "http://localhost:3001/"+pdf;

    window.open(url, "_blank");
}
 


      abrirPdf = (pdf) => {
    // this.pdfSrc = "http://localhost:3001/"+pdf;
     this.pdfSrc = environment.urlService+"/" +pdf;
      
    };


   
    aumentar(){
       this.pag++;
    } 
    disminuir(){
       this.pag--;
    } 

    
    zoom1(){
        this.zom= this.zom - 0.25;

    }


      zoom2(){
        this.zom= this.zom + 0.25;
    }




  ngOnInit() {
  this._route.paramMap.subscribe(params  => {
      const id  = params.get('id');
     this.listaDocumentosServicio(id);
    });

  }

}

