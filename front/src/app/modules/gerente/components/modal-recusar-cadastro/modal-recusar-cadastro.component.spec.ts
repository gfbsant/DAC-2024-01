import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecusarCadastroComponent } from './modal-recusar-cadastro.component';

describe('ModalRecusarCadastroComponent', () => {
  let component: ModalRecusarCadastroComponent;
  let fixture: ComponentFixture<ModalRecusarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRecusarCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRecusarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
