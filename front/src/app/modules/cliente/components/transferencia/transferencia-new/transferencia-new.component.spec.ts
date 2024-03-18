import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaNewComponent } from './transferencia-new.component';

describe('TransferenciaNewComponent', () => {
  let component: TransferenciaNewComponent;
  let fixture: ComponentFixture<TransferenciaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciaNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
