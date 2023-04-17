import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutPassComponent } from './edit-out-pass.component';

describe('EditOutPassComponent', () => {
  let component: EditOutPassComponent;
  let fixture: ComponentFixture<EditOutPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOutPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOutPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
