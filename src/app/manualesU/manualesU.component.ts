import { Component, OnInit } from '@angular/core';
import {ManualesService} from '../services/manuales.service';
import { AlertsService } from 'angular-alert-module';
import {ManualesFaces} from '../interfaces/manualesFaces';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-manualesU',
  templateUrl: './manualesU.component.html',
  styleUrls: ['./manualesU.component.css']
})
export class ManualesUComponent implements OnInit {
manualUModel: ManualesFaces[];
 pag = 1;
  zom = 1.0;
  constructor(private manualesService: ManualesService, private httpClient: HttpClient) { }
pdfSrc = ""; 


  

     mostrarManuales() {
        this.manualesService.listarManuales().subscribe((data: any) => {
        	console.log("dataaaa",data);
                this.manualUModel = data.obj.listarManuales;
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



    aumentar(){
       this.pag++;
       console.log("this.pag",this.pag)
    } 
    disminuir(){
       this.pag--;
       console.log("this.pag",this.pag)
    } 

    
    zoom1(){
        this.zom= this.zom - 0.25;
        console.log("this.zom",this.zom)

    }


      zoom2(){
        this.zom= this.zom + 0.25;
        console.log("this.zom",this.zom)
    }


  ngOnInit() {
  this.mostrarManuales();
  }



}
