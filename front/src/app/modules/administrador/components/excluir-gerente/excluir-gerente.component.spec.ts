import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirGerenteComponent } from './excluir-gerente.component';

describe('ExcluirGerenteComponent', () => {
  let component: ExcluirGerenteComponent;
  let fixture: ComponentFixture<ExcluirGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
