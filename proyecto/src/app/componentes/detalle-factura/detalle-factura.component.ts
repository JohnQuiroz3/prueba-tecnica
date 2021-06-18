import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  lista = null;
  factura = {
    numero: null,
    fecha: null,
    cliente: null,
    totalfactura: null
  }

  constructor(private route: ActivatedRoute, private servicio: AccesoBdService) { }

  ngOnInit(): void {
    this.factura.numero = this.route.snapshot.paramMap.get('numero');
    this.servicio.consultarDetalle(this.factura.numero).subscribe(result => {
      this.lista = result;
      this.factura.numero = result[0]['factura'];
      this.factura.fecha = result[0]['fecha'];
      this.factura.cliente = result[0]['nombre'];
      this.factura.totalfactura = result[0]['totalfactura'];
    });
  }
}
