import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotRoomComponent } from './allot-room.component';

describe('AllotRoomComponent', () => {
  let component: AllotRoomComponent;
  let fixture: ComponentFixture<AllotRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllotRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
