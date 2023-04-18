import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveapplicationComponent } from './add-leaveapplication.component';

describe('AddLeaveapplicationComponent', () => {
  let component: AddLeaveapplicationComponent;
  let fixture: ComponentFixture<AddLeaveapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
