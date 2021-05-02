import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTerminadosDetalleComponent } from './servicios-terminados-detalle.component';

describe('ServiciosTerminadosDetalleComponent', () => {
  let component: ServiciosTerminadosDetalleComponent;
  let fixture: ComponentFixture<ServiciosTerminadosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosTerminadosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosTerminadosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
