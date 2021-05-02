import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPendienteDetalleComponent } from './servicios-pendiente-detalle.component';

describe('ServiciosPendienteDetalleComponent', () => {
  let component: ServiciosPendienteDetalleComponent;
  let fixture: ComponentFixture<ServiciosPendienteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosPendienteDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPendienteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
