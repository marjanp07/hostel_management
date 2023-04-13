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
<<<<<<< HEAD
import { HostelFeeComponent } from './hostel-fee/hostel-fee.component';
import { FeeReductionComponent } from './fee-reduction/fee-reduction.component';
=======
import { MessFeeComponent } from './mess-fee/mess-fee.component';
import { TotallBillGenerateComponent } from './totall-bill-generate/totall-bill-generate.component';
>>>>>>> bfcba7a3e48778c12c8ed140e881efa15115bf56


@NgModule({
  declarations: [
    RoomVacateComponent,
    AdmissionEntryComponent,
    AddRoomComponent,
    AssetsComponent,
    LeaveApplicationComponent,
    StudentAttendanceComponent,
    OutpassComponent,
<<<<<<< HEAD
    HostelFeeComponent,
    FeeReductionComponent
=======
    MessFeeComponent,
    TotallBillGenerateComponent
>>>>>>> bfcba7a3e48778c12c8ed140e881efa15115bf56
  ],
  imports: [
    CommonModule,
    HostelRoutingModule,
   FormsModule,
   ReactiveFormsModule 
  ]
})
export class HostelModule { }
