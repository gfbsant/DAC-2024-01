import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarComponent } from './depositar.component';

describe('DepositarComponent', () => {
  let component: DepositarComponent;
  let fixture: ComponentFixture<DepositarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
