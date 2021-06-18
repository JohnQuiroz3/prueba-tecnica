import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-formulario-edita-cliente',
  templateUrl: './formulario-edita-cliente.component.html',
  styleUrls: ['./formulario-edita-cliente.component.css']
})
export class FormularioEditaClienteComponent implements OnInit {

  fg: FormGroup;

  cl = {
    identificacion: null,
    nombre: null,
    apellido: null,
    nacimiento: null,
    telefono: null,
    edad: null
  };

  constructor(private route: ActivatedRoute, private servicio: AccesoBdService, fb: FormBuilder, private enrutador: Router) {
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
    this.cl.identificacion = this.route.snapshot.paramMap.get('identificacion');
    this.consultar(this.cl.identificacion);
  }

  consultar(identificacion){
    this.servicio.consultarUno("cliente", "identificacion", identificacion).subscribe(result => {
      this.cl = result[0];
      this.fg.controls['identificacion'].setValue(this.cl.identificacion);
      this.fg.controls['nombre'].setValue(this.cl.nombre);
      this.fg.controls['apellido'].setValue(this.cl.apellido);
      this.fg.controls['nacimiento'].setValue(this.cl.nacimiento);
      this.fg.controls['telefono'].setValue(this.cl.telefono);
      this.fg.controls['edad'].setValue(this.cl.edad);
    });
  }

  editar(identificacion, nombre, apellido, nacimiento, telefono, edad): boolean{
    this.cl.identificacion = identificacion;
    this.cl.nombre = nombre;
    this.cl.apellido = apellido;
    this.cl.nacimiento = nacimiento;
    this.cl.telefono = telefono;
    this.cl.edad = edad;
    this.servicio.actualizar("cliente", this.cl).subscribe(datos => {
      if(!datos['validacion']){
        alert("No se pudo guardar la información del cliente. Intente asignando una nueva identificación");
        return false;
      }
      else{
        alert("Se guardó correctamente la información del cliente");
        this.enrutador.navigate(['/clientes']);
      }
    });
    return false;
  }
}
