import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { UnidadesService } from '../services/unidades.service';
import { FabricantesService } from '../services/fabricantes.service';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productosFaces';
import { Unidades } from '../interfaces/unidadesFaces';
import { Fabricantes } from '../interfaces/fabricantesFaces';

//controlador de la vista de productos
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
//declaracion de variables
  productos: Productos[];
  productosModel: Productos[];
  unidades: Unidades[];
  fabricantes: Fabricantes[];
  verBotonGuardar: Boolean;

//declaracion de modelos
  fabricante: number;
  unidad: number;

  producto: Productos = {
    productos_id: null,
    nombre_producto: null,
    nombre_unidad :  null,
    nombre :  null,
    descripcion: null,
    unidades_id: null,
    fabricantes_id: null,
  };

  constructor(private productoService: ProductosService, private unidadesService: UnidadesService, private fabricantesService: FabricantesService, private httpClient: HttpClient) {

  }

  //funcion que invoca el servicio de consulta productos
  searchAllProductos() {
     this.productosModel = this.productoService.searchAll();
//    this.productoService.searchAll().subscribe((data: Productos[]) => {
//      this.productosModel = data;
//    },
//      (error) => {
//        alert('Ocurrio un Error');
//        console.log("imprimir", error);
//      });
  }

 //funcion que invoca el servicio de consulta unidades
  searchAllUnidades() {
      
     this.unidades = this.unidadesService.searchAll();
//    this.unidadesService.searchAll().subscribe((data: Unidades[]) => {
//      this.unidades = data;
//    },
//      (error) => {
//        alert('Ocurrio un Error');
//        console.log("imprimir", error);
//      });
  }
 //funcion que invoca el servicio de consulta fabricantes
  searchAllFabricantes() {

    this.fabricantesService.searchAll().subscribe((data: any) => {
        console.log('fata',data);
      this.fabricantes = data.obj;
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }

 //funcion que invoca el servicio para guardar productos
  saveProducto() {

    this.producto.unidades_id = this.unidad;
    this.producto.fabricantes_id = this.fabricante;

    console.log("guardar", this.producto);
    this.productoService.save(this.producto).subscribe((data) => {
      this.limpiarVista();
      alert('Producto Almacenado');
      console.log("imprimir", data);
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }

 //funcion que invoca el servicio para modificar productos
  updateProducto() {

    this.producto.unidades_id = this.unidad;
    this.producto.fabricantes_id = this.fabricante;

    console.log("update", this.producto);
    this.productoService.update(this.producto).subscribe((data) => {
      this.limpiarVista();
      this.verBotonGuardar = false;
      alert('Producto Modificado');
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });

  }

   //funcion que invoca el servicio para eliminar productos
  deleteProducto(producto_id: number) {

    this.productoService.delete(producto_id).subscribe((data) => {
      this.searchAllProductos();
      alert('Producto Eliminado');
      console.log("imprimir", data);
    },
      (error) => {
        alert('Ocurrio un Error');
      });
  }

  //se asigna el producto seleccionado al modelo
  seleccionarProducto(productoModel: Productos) {
    this.unidad = productoModel.unidades_id;
    this.fabricante = productoModel.fabricantes_id;
      console.log("unidad ",productoModel);
    this.verBotonGuardar = true;
    this.producto = productoModel;
  }

  // asigna las variables a null
  limpiarVista() {
    this.producto.unidades_id = null;
    this.producto.fabricantes_id = null;
    this.producto.nombre_producto = null;
    this.producto.productos_id = null;
    this.producto.descripcion = null;
    this.searchAllProductos();
  }

  //funcion para cambiar estado de validacion de boton modificar
  cancelar() {
    this.verBotonGuardar = false;
    this.limpiarVista();
  }


  //funcion de inicio de la app
  ngOnInit() {
    this.searchAllProductos();
    this.searchAllUnidades();
    this.searchAllFabricantes();
  }

}
