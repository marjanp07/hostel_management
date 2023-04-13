import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAllotComponent } from './room-allot.component';

describe('RoomAllotComponent', () => {
  let component: RoomAllotComponent;
  let fixture: ComponentFixture<RoomAllotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAllotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAllotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
