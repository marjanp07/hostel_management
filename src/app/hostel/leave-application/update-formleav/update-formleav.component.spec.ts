import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormleavComponent } from './update-formleav.component';

describe('UpdateFormleavComponent', () => {
  let component: UpdateFormleavComponent;
  let fixture: ComponentFixture<UpdateFormleavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormleavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormleavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
