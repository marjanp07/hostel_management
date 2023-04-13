import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessFeeComponent } from './mess-fee.component';

describe('MessFeeComponent', () => {
  let component: MessFeeComponent;
  let fixture: ComponentFixture<MessFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
