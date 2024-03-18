import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaConfirmComponent } from './transferencia-confirm.component';

describe('TransferenciaConfirmComponent', () => {
  let component: TransferenciaConfirmComponent;
  let fixture: ComponentFixture<TransferenciaConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciaConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
