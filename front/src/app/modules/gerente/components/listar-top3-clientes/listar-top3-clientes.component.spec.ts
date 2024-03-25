import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTop3ClientesComponent } from './listar-top3-clientes.component';

describe('ListarTop3ClientesComponent', () => {
  let component: ListarTop3ClientesComponent;
  let fixture: ComponentFixture<ListarTop3ClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTop3ClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTop3ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
