import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-formulario-nuevo-cliente',
  templateUrl: './formulario-nuevo-cliente.component.html',
  styleUrls: ['./formulario-nuevo-cliente.component.css']
})
export class FormularioNuevoClienteComponent implements OnInit {

  fg: FormGroup;

  cl = {
    identificacion: null,
    nombre: null,
    apellido: null,
    nacimiento: null,
    telefono: null,
    edad: null
  };

  constructor(private servicio: AccesoBdService, fb:FormBuilder, private enrutador: Router) {
    this.fg = fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  guardar(identificacion, nombre, apellido, nacimiento, telefono, edad): boolean{
    this.cl.identificacion = identificacion;
    this.cl.nombre = nombre;
    this.cl.apellido = apellido;
    this.cl.nacimiento = nacimiento;
    this.cl.telefono = telefono;
    this.cl.edad = edad;
    this.servicio.insertar("cliente", this.cl).subscribe(datos => {
      if(!datos['validacion']){
        alert("No se pudo guardar la información del cliente. Intente asignando una nueva identificación");
        return false;
      }
      else{
        alert("Se guardó correctamente la información del cliente");
        this.enrutador.navigate(['/clientes']);
      }
    });
    return true;
  }
}
