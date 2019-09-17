import { Component, OnInit } from '@angular/core';
import { ManualesService } from '../services/manuales.service';
import { AlertsService } from 'angular-alert-module';
import { ManualesFaces } from '../interfaces/manualesFaces';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
procesosModel: ManualesFaces[];
page : number = 1;

  constructor(private manualesService: ManualesService, private httpClient: HttpClient) { }


    pdfSrc = "";

     mostrarProcesos() {
        


        this.manualesService.listarProcesos().subscribe((data: any) => {
        	console.log("dataaaa",data);
                this.procesosModel = data.obj.listarProcesos;
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }

    abrirPdf = (pdf) => {
     console.log('pdf',pdf);
     this.pdfSrc = "http://localhost:3001/"+pdf;
 
    }; 


  ngOnInit() {
  this.mostrarProcesos();
  }

}
