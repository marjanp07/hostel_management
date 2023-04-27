import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTtlBillComponent } from './add-ttl-bill.component';

describe('AddTtlBillComponent', () => {
  let component: AddTtlBillComponent;
  let fixture: ComponentFixture<AddTtlBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTtlBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTtlBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
