import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomVacateComponent } from './add-room-vacate.component';

describe('AddRoomVacateComponent', () => {
  let component: AddRoomVacateComponent;
  let fixture: ComponentFixture<AddRoomVacateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomVacateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoomVacateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
