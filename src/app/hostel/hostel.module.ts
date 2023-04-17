import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
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
import { RoomComponent } from './room/room.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
// import { RoomAllotComponent } from './room-allot/room-allot.component';
import {MatInputModule} from '@angular/material/input';
import { AddRoomVacateComponent } from './room-vacate/add-room-vacate/add-room-vacate.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AddOutPassComponent } from './outpass/add-out-pass/add-out-pass.component';
import { EditOutPassComponent } from './outpass/edit-out-pass/edit-out-pass.component';




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
    RoomComponent,
    AddRoomVacateComponent,
    AddAssetComponent,
    AddOutPassComponent,
    EditOutPassComponent,
    // RoomAllotComponent
  ],
  imports: [
    CommonModule,
    HostelRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatMenuModule,
   MatTableModule,
   MatButtonModule,
   MatIconModule,
   MatDialogModule,
   MatInputModule
  ]
})
export class HostelModule { }
