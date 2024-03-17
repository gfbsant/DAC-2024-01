import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaExtratoComponent } from './consulta-extrato.component';

describe('ConsultaExtratoComponent', () => {
  let component: ConsultaExtratoComponent;
  let fixture: ComponentFixture<ConsultaExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaExtratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
