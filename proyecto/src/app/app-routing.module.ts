import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { FacturacionComponent } from './componentes/facturacion/facturacion.component';
import { FormularioEditaClienteComponent } from './componentes/formulario-edita-cliente/formulario-edita-cliente.component';
import { FormularioEditaProductoComponent } from './componentes/formulario-edita-producto/formulario-edita-producto.component';
import { FormularioFacturaComponent } from './componentes/formulario-factura/formulario-factura.component';
import { FormularioNuevoClienteComponent } from './componentes/formulario-nuevo-cliente/formulario-nuevo-cliente.component';
import { FormularioNuevoProductoComponent } from './componentes/formulario-nuevo-producto/formulario-nuevo-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path:'', redirectTo:'facturacion', pathMatch:'full'},
  { path:'facturacion', component: FacturacionComponent},
  { path:'facturacion/nuevo', component: FormularioFacturaComponent},
  { path:'facturacion/detalle/:numero', component: DetalleFacturaComponent},
  { path:'productos', component: ProductosComponent},
  { path:'productos/nuevo', component: FormularioNuevoProductoComponent},
  { path:'productos/edita/:id', component: FormularioEditaProductoComponent},
  { path:'clientes', component: ClientesComponent},
  { path:'clientes/nuevo', component: FormularioNuevoClienteComponent},
  { path:'clientes/edita/:identificacion', component: FormularioEditaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
