import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDeleteDialogueComponent } from './common-delete-dialogue.component';

describe('CommonDeleteDialogueComponent', () => {
  let component: CommonDeleteDialogueComponent;
  let fixture: ComponentFixture<CommonDeleteDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonDeleteDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDeleteDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
