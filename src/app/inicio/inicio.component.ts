    import {Component, OnInit, Input} from '@angular/core';
    import {InicioService} from '../services/inicio.service';
    import {InicioFaces} from '../interfaces/inicioFaces';
    import {HttpClient} from '@angular/common/http';
    import {ModalService} from '../services/modal.service';
    import { FormBuilder, FormGroup , Validators} from '@angular/forms';
    import { FormControl } from '@angular/forms';
    import { AlertsService } from 'angular-alert-module';
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
    submitted = false;
    public now: Date = new Date();
    date;
    inicioModel: InicioFaces[];
    portadaModal: InicioFaces[]; 
    enlacesModal: InicioFaces[];
    publicafrom: FormGroup;
    publicaModel :InicioFaces[];

    crear: any = {};





    empresas =
    [
    {
    url: 'clicafe.png',
    active: 'active',

    },
    {
    url: 'cosmitet.png',
    active: '',
    },
    {
    url: 'duarquint.png',
    active: '',
    },
    {
    url: 'dumian.png',
    active: '',
    },
    {
    url: 'santaana.png',
    active: '',
    },
    {
    url: 'sofiapa.png',
    active: '',
    },

    ];

    constructor(private inicioService: InicioService, private httpClient: HttpClient,private modalService: ModalService, private formBuilder: FormBuilder, private alerts: AlertsService) {
    setInterval(() => {
    this.date = new Date();
    }, 1);


    }

    listarExtenciones2() {
    this.inicioService.listarExtenciones().subscribe((data: any) => {
    this.inicioModel = data.obj.areas;
    return;
    },
    (error) => {
    alert('Ocurrio un Error');
    console.log("imprimir", error);
    });
    }


    listarPublica() {
    console.log("lagejapdioe",this.publicaModel);
    this.inicioService.mostrarPublica().subscribe((data: any) => {
    console.log("incioseriviso",data);
    this.publicaModel = data.obj
    console.log("veaaaaa", data)
    return;
    },
    (error) => {
    alert('Ocurrio un Error');
    console.log("imprimir", error);
    });
    }



    listarEnlaces() {
    this.inicioService.mostrarEnlaces().subscribe((data: any) => {
    this.enlacesModal = data.obj.enlaces;
    return;
    },
    (error) => {
    alert('Ocurrio un Error');
    console.log("imprimir", error);
    });
    }

    /* onPublicar() {
    console.log("holaaaaa publicandoooo",this.crear);
    this.inicioService.almacenPublicidad(this.crear).subscribe((data) => {
    console.log("imprimir", data);
    },
    (error) => {
    alert('Ocurrio un Error');
    console.log("imprimir", error);
    });

    }*/

    onPublicar() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.publicafrom.valid) {
    this.inicioService.almacenPublicidad(this.crear).subscribe((data) => {
    this.alerts.setMessage('PUBLICACIÒN ENTREGADA,Tu publicaciòn esta a la espera de aprobaciòn','success');
    this.closeModal('custom-modal-1');
    this.clear();
    });

    }else{
    return;
    }

    }

    clear(){
    console.log('crear',this.crear);
      this.crear = {};
    }



    listarPortada() {
    this.inicioService.mostrarPortada().subscribe((data: any) => {
    this.portadaModal = data.obj.mostrarPortada;
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



    openModal(id: string) {
    console.log("legoooooooooo upaa");
    this.modalService.open(id);
    }

    closeModal(id: string) {
    this.modalService.close(id);
    }

    ngOnInit() { 
    this.listarPortada();
    this.listarPublica();
    this.tmrColombia();
    this.listarEnlaces();
    this.listarExtenciones2();
    this.publicafrom = this.formBuilder.group({
    titulo : ['', Validators.required],
    contenido: ['', Validators.required],
    sede: ['', Validators.required],
    publicador: ['', Validators.required],
    });

    }


    }
