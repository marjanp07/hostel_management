import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateViewassetComponent } from './update-viewasset.component';

describe('UpdateViewassetComponent', () => {
  let component: UpdateViewassetComponent;
  let fixture: ComponentFixture<UpdateViewassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateViewassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateViewassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
