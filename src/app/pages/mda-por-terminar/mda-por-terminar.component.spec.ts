import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaPorTerminarComponent } from './mda-por-terminar.component';

describe('MdaPorTerminarComponent', () => {
  let component: MdaPorTerminarComponent;
  let fixture: ComponentFixture<MdaPorTerminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdaPorTerminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaPorTerminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
