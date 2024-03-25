import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaClienteComponent } from './consulta-cliente.component';

describe('ConsultaClienteComponent', () => {
  let component: ConsultaClienteComponent;
  let fixture: ComponentFixture<ConsultaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
