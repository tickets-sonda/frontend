import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTerminadosComponent } from './servicios-terminados.component';

describe('ServiciosTerminadosComponent', () => {
  let component: ServiciosTerminadosComponent;
  let fixture: ComponentFixture<ServiciosTerminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosTerminadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosTerminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
