import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AssetsComponent } from './assets/assets.component';
import { OutpassComponent } from './outpass/outpass.component';
import { HostelFeeComponent } from './hostel-fee/hostel-fee.component';
import { FeeReductionComponent } from './fee-reduction/fee-reduction.component';
import { MessFeeComponent } from './mess-fee/mess-fee.component';
import { TotallBillGenerateComponent } from './totall-bill-generate/totall-bill-generate.component';
import { AllotRoomComponent } from './admission-entry/allot-room/allot-room.component';
// import { RoomAllotComponent } from './room-allot/room-allot.component';


const routes: Routes = [

  { path:'roomvacate', component: RoomVacateComponent},
  { path:'attendance',component:StudentAttendanceComponent},
  { path:'admissionEntry',component:AdmissionEntryComponent},
  { path:'leave',component:LeaveApplicationComponent},
  { path:'add_room',component:AddRoomComponent},
  { path:'assets',component:AssetsComponent},
  { path:'outpass',component:OutpassComponent},
  { path:'hostel_fee',component:HostelFeeComponent},
  { path:'fee_reduction',component:FeeReductionComponent},
  { path:'messfee',component:MessFeeComponent},
  { path:'total_bill',component:TotallBillGenerateComponent},
  { path:'allot_room',component:AllotRoomComponent},
  // { path:'room_allot',component:RoomAllotComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostelRoutingModule {}
