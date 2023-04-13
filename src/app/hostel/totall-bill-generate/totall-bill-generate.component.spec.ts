import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallBillGenerateComponent } from './totall-bill-generate.component';

describe('TotallBillGenerateComponent', () => {
  let component: TotallBillGenerateComponent;
  let fixture: ComponentFixture<TotallBillGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotallBillGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotallBillGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
