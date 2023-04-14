import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AssetsComponent } from './assets/assets.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { OutpassComponent } from './outpass/outpass.component';
import { HostelRoutingModule } from './hostel-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostelFeeComponent } from './hostel-fee/hostel-fee.component';
import { FeeReductionComponent } from './fee-reduction/fee-reduction.component';
import { MessFeeComponent } from './mess-fee/mess-fee.component';
import { TotallBillGenerateComponent } from './totall-bill-generate/totall-bill-generate.component';
import { AllotRoomComponent } from './admission-entry/allot-room/allot-room.component';
// import { RoomAllotComponent } from './room-allot/room-allot.component';


@NgModule({
  declarations: [
    RoomVacateComponent,
    AdmissionEntryComponent,
    AddRoomComponent,
    AssetsComponent,
    LeaveApplicationComponent,
    StudentAttendanceComponent,
    OutpassComponent,
    HostelFeeComponent,
    FeeReductionComponent,
    MessFeeComponent,
    TotallBillGenerateComponent,
    AllotRoomComponent,
    // RoomAllotComponent
  ],
  imports: [
    CommonModule,
    HostelRoutingModule,
   FormsModule,
   ReactiveFormsModule 
  ]
})
export class HostelModule { }
