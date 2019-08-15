import { Component, OnInit } from '@angular/core';
import { ComponentService } from './services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Intranet Duana';
  ip = "";
  constructor(private componentService: ComponentService) {
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
  
   ngOnInit() {
      this.ipLocal();
  }
  
}
