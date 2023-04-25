import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
// import { RoomAllotComponent } from './room-allot/room-allot.component';
import {MatInputModule} from '@angular/material/input';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AddOutPassComponent } from './outpass/add-out-pass/add-out-pass.component';
import { AddLeaveapplicationComponent } from './leave-application/add-leaveapplication/add-leaveapplication.component';
import { CommonDeleteDialogueComponent } from '../shared/components/common-delete-dialogue/common-delete-dialogue.component';
import { AddRoomVacateComponent } from './room-vacate/add-room-vacate/add-room-vacate.component';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {  } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddMessfeeComponent } from './mess-fee/add-messfee/add-messfee.component';
import { AddHostelfeeComponent } from './hostel-fee/add-hostelfee/add-hostelfee.component';
import {MatCardModule} from '@angular/material/card';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
    AddLeaveapplicationComponent,
    CommonDeleteDialogueComponent,
    AddMessfeeComponent,
    AddHostelfeeComponent,
    
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
   MatInputModule,
   MatSnackBarModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatStepperModule,
   MatSelectModule,
   MatCheckboxModule,
   MatRadioModule,
   MatCardModule,
   

  ],
  exports: [
    MatDialogModule
  ],providers:[DatePipe,{
    provide:MAT_DATE_FORMATS,useValue:MY_FORMATS
  },]
})
export class HostelModule { }

