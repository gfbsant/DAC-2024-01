import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaDoneComponent } from './transferencia-done.component';

describe('TransferenciaDoneComponent', () => {
  let component: TransferenciaDoneComponent;
  let fixture: ComponentFixture<TransferenciaDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciaDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
