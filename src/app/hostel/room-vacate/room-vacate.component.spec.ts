import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVacateComponent } from './room-vacate.component';

describe('RoomVacateComponent', () => {
  let component: RoomVacateComponent;
  let fixture: ComponentFixture<RoomVacateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomVacateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomVacateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
