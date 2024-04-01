import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirGerenteComponent } from './inserir-gerente.component';

describe('InserirGerenteComponent', () => {
  let component: InserirGerenteComponent;
  let fixture: ComponentFixture<InserirGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
