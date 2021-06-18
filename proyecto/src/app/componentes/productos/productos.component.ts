import { Component, OnInit } from '@angular/core';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = null;
  pr = {
    id: null,
    nombre: null,
    inventario: null,
    compra: null,
    venta: null
  };

  constructor(private servicio: AccesoBdService) { }

  ngOnInit(): void {
    this.consultar(null);
  }

  consultar(identificacion){
    if(identificacion == null){
      this.servicio.consultarTodos("producto").subscribe(result => this.productos = result);
    }
    else{
      this.servicio.consultarUno("producto", "id", identificacion).subscribe(result => this.pr = result[0]);
    }
  }

  insertar(){
    this.servicio.insertar("producto", this.pr).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.consultar(null);
      }
    });
  }

  eliminar(identificacion){
    this.servicio.eliminar("producto", "id", identificacion).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.consultar(null);
      }
    });
  }

  actualizar(){
    this.servicio.actualizar("producto", this.pr).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.consultar(null);
      }
    });
  }

  hayRegistros(){
    return true;
  }
}
