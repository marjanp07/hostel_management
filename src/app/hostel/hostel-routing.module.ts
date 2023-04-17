import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { AssetsComponent } from './assets/assets.component';
import { OutpassComponent } from './outpass/outpass.component';
import { HostelFeeComponent } from './hostel-fee/hostel-fee.component';
import { FeeReductionComponent } from './fee-reduction/fee-reduction.component';
import { MessFeeComponent } from './mess-fee/mess-fee.component';
import { TotallBillGenerateComponent } from './totall-bill-generate/totall-bill-generate.component';
import { AllotRoomComponent } from './admission-entry/allot-room/allot-room.component';
import { RoomComponent } from './room/room.component';
import { AddRoomVacateComponent } from './room-vacate/add-room-vacate/add-room-vacate.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AddOutPassComponent } from './outpass/add-out-pass/add-out-pass.component';
import { EditOutPassComponent } from './outpass/edit-out-pass/edit-out-pass.component';
// import { RoomAllotComponent } from './room-allot/room-allot.component';


const routes: Routes = [
  { path:'assets/addasset/:id', component: AddAssetComponent},

  { path:'roomvacate/addroomvacate/:id', component: AddRoomVacateComponent},
  { path:'roomvacate', component: RoomVacateComponent},
  { path:'attendance',component:StudentAttendanceComponent},
  { path:'admissionEntry',component:AdmissionEntryComponent},
  { path:'leave',component:LeaveApplicationComponent},
  { path:'room',component:RoomComponent},
  { path:'room/add_room/:id',component:AddRoomComponent},
  { path:'assets',component:AssetsComponent},
  { path:'outpass',component:OutpassComponent},
  { path:'hostel_fee',component:HostelFeeComponent},
  { path:'fee_reduction',component:FeeReductionComponent},
  { path:'messfee',component:MessFeeComponent},
  { path:'total_bill',component:TotallBillGenerateComponent},
  { path:'allot_room',component:AllotRoomComponent},
  // { path:'room_allot',component:RoomAllotComponent},
  { path:'outpass/addoutpass/0',component:AddOutPassComponent},
  { path:'outpass/editoutpass/:id',component:EditOutPassComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostelRoutingModule {}
