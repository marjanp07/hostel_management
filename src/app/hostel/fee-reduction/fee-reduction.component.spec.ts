import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeReductionComponent } from './fee-reduction.component';

describe('FeeReductionComponent', () => {
  let component: FeeReductionComponent;
  let fixture: ComponentFixture<FeeReductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeReductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeReductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
