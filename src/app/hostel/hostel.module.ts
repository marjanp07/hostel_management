import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';



@NgModule({
  declarations: [
    RoomVacateComponent,
    AdmissionEntryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HostelModule { }
