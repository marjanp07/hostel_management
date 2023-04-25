import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessfeeComponent } from './add-messfee.component';

describe('AddMessfeeComponent', () => {
  let component: AddMessfeeComponent;
  let fixture: ComponentFixture<AddMessfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMessfeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMessfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
