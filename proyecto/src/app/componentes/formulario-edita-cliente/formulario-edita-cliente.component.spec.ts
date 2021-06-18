import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditaClienteComponent } from './formulario-edita-cliente.component';

describe('FormularioEditaClienteComponent', () => {
  let component: FormularioEditaClienteComponent;
  let fixture: ComponentFixture<FormularioEditaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
