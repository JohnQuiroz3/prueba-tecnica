import { Component, OnInit } from '@angular/core';
import { AccesoBdService } from '../../servicios/acceso-bd.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = null;
  cl = {
    identificacion: null,
    nombre: null,
    apellido: null,
    nacimiento: null,
    telefono: null,
    edad: null
  };

  constructor(private servicio: AccesoBdService) { }

  ngOnInit(): void {
    this.consultar(null);
  }

  consultar(identificacion){
    if(identificacion == null){
      this.servicio.consultarTodos("cliente").subscribe(result => this.clientes = result);
    }
    else{
      this.servicio.consultarUno("cliente", "identificacion", identificacion).subscribe(result => this.cl = result[0]);
    }
  }

  eliminar(identificacion){
    this.servicio.eliminar("cliente", "identificacion", identificacion).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.consultar(null);
      }
    });
    return false;
  }

  hayRegistros(){
    return true;
  }
}
