import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutPassComponent } from './add-out-pass.component';

describe('AddOutPassComponent', () => {
  let component: AddOutPassComponent;
  let fixture: ComponentFixture<AddOutPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
