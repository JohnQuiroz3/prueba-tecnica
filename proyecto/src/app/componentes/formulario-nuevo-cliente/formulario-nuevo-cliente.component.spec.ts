import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoClienteComponent } from './formulario-nuevo-cliente.component';

describe('FormularioNuevoClienteComponent', () => {
  let component: FormularioNuevoClienteComponent;
  let fixture: ComponentFixture<FormularioNuevoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNuevoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
