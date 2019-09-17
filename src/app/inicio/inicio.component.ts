import {Component, OnInit} from '@angular/core';
import {InicioService} from '../services/inicio.service';
import {InicioFaces} from '../interfaces/inicioFaces';
import {HttpClient} from '@angular/common/http';

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
    portadaModal: InicioFaces[];    



   publicidad =
        [
            {
                titulo: 'VENTA DE HELADOS',
                asunto: 'Helados de piña,maracuya,coco,y lulo',
                propietario: 'MARTIVIRIS',
                active: 'active',
                id: 1
            },
            {
                titulo: 'SE ALQUILA PIEZA777',
                asunto: 'persona sola descuento por trabajar en duana',
                propietario: 'rubenchoo',
                active: '',
                id: 2
            },
            {
                titulo: 'VENTA DE SANCOCHO',
                asunto: 'Gallina o pollo? ',
                propietario: 'EL CHAMO',
                active: '',
                id: 3
            },
        ];

    constructor(private inicioService: InicioService, private httpClient: HttpClient) {
        setInterval(() => {
            this.date = new Date();
        }, 1);


    }

    listarExtenciones2() {
        this.inicioService.listarExtenciones().subscribe((data: any) => {
                this.inicioModel = data.obj.areas;
        console.log("inicioModel",this.inicioModel);
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }

    listarPortada() {
        this.inicioService.mostrarPortada().subscribe((data: any) => {
                this.portadaModal = data.obj.mostrarPortada;
                console.log("portadaModal",this.portadaModal);
                return;
            },
            (error) => {
                alert('Ocurrio un Error');
                console.log("imprimir", error);
            });
    }



    tmrColombia() {
        this.inicioService.tmrColombiaService().subscribe((data: any) => {
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
        this.listarPortada();
        this.tmrColombia();
        this.listarExtenciones2();
    }


}
