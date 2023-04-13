import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFeeComponent } from './hostel-fee.component';

describe('HostelFeeComponent', () => {
  let component: HostelFeeComponent;
  let fixture: ComponentFixture<HostelFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
