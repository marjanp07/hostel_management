import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpassComponent } from './outpass.component';

describe('OutpassComponent', () => {
  let component: OutpassComponent;
  let fixture: ComponentFixture<OutpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
