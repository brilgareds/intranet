import { Component, OnInit } from '@angular/core';
import { ComponentService } from './services/component.service';
import { AreasFaces} from './interfaces/areasFaces';
import { AdministradorFaces} from './interfaces/administradorFaces';
import { Router } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ManualesComponent } from './manuales/manuales.component';
import { User } from './model/user';
import { LoginService } from './services/login.service';

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
  rol = localStorage.getItem('userRol');
  currentUser: User;
 
  constructor(private componentService: ComponentService,private router: Router, 
              private loginComponent: LoginComponent,private manualesComponent: ManualesComponent,
              private loginService: LoginService) {
      this.loginService.currentUser.subscribe(x => this.currentUser = x);
   }
  
   onCerrar(){ 
   this.loginComponent.onCerrar();
   }

    ipLocal() {
    this.componentService.ipLocal().subscribe((data : any) => {
   
      this.ip = data.obj.ip;
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }
  
  get isSistemas() {
//        console.log("this.currentUser::",this.currentUser.login_rol);
        return this.currentUser && this.currentUser.login_rol === 3;
  }
  
  get isCalidad() {
//        console.log("this.currentUser::",this.currentUser.login_rol);
        return this.currentUser && this.currentUser.login_rol === 2;
  }

//ya no iria
  isLogin(){
    var log = this.loginComponent.loginIn();
    return  log;
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
    //  this.isLogin();
    //  this.rol = true;// "localStorage.getItem('userRol')";
      this.ipLocal();
      this.listarAreas();
      this.listarAdmin();
      console.log("rol",this.rol);
  }
  
}


