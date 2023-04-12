import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionEntryComponent } from './admission-entry.component';

describe('AdmissionEntryComponent', () => {
  let component: AdmissionEntryComponent;
  let fixture: ComponentFixture<AdmissionEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
