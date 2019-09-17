import { Component, OnInit } from '@angular/core';
import { ComponentService } from './services/component.service';
import {AreasFaces} from './interfaces/areasFaces';
import {AdministradorFaces} from './interfaces/administradorFaces';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Intranet Duana';
  ip = "";
  inicioAreas: AreasFaces[];
  inicioAdmin : AdministradorFaces[];

  constructor(private componentService: ComponentService,private router: Router) {

   }
  
    ipLocal() {
    this.componentService.ipLocal().subscribe((data : any) => {
   
      this.ip = data.obj.ip;
      console.log("IP: ",this.ip);
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }
  

      listarAreas() {
        this.componentService.mostrarAreas().subscribe((data: any) => {
                this.inicioAreas = data.obj;
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }


      listarAdmin() {
        this.componentService.mostrarAdmin().subscribe((data: any) => {
                this.inicioAdmin = data.obj;
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }




     listarManuales(url, id) {
         this.router.navigate([url, id]).then( (e) => {
            if (e) {
              console.log("Navigation is successful!",e);
            } else {
              console.log("Navigation has failed!",e);
            }
          });
      }


    listarFases(url, id) {
      this.router.navigate([url, id]).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }

   ngOnInit() {
      this.ipLocal();
      this.listarAreas();
      this.listarAdmin();
  }
  
}


