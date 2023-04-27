import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeeReductionComponent } from './add-fee-reduction.component';

describe('AddFeeReductionComponent', () => {
  let component: AddFeeReductionComponent;
  let fixture: ComponentFixture<AddFeeReductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeeReductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFeeReductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
