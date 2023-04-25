import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostelfeeComponent } from './add-hostelfee.component';

describe('AddHostelfeeComponent', () => {
  let component: AddHostelfeeComponent;
  let fixture: ComponentFixture<AddHostelfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHostelfeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHostelfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
