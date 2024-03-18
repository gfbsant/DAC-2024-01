import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaQuantiaComponent } from './transferencia-quantia.component';

describe('TransferenciaQuantiaComponent', () => {
  let component: TransferenciaQuantiaComponent;
  let fixture: ComponentFixture<TransferenciaQuantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciaQuantiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaQuantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
