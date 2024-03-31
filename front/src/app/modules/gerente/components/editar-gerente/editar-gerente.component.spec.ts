import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGerenteComponent } from './editar-gerente.component';

describe('EditarGerenteComponent', () => {
  let component: EditarGerenteComponent;
  let fixture: ComponentFixture<EditarGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
