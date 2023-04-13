import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomVacateComponent } from './room-vacate/room-vacate.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { AdmissionEntryComponent } from './admission-entry/admission-entry.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AssetsComponent } from './assets/assets.component';
import { OutpassComponent } from './outpass/outpass.component';


const routes: Routes = [

  { path:'hi', component: RoomVacateComponent},
  { path:'attendance',component:StudentAttendanceComponent},
  { path:'admissionEntry',component:AdmissionEntryComponent},
  { path:'leave',component:LeaveApplicationComponent},
  { path:'add_room',component:AddRoomComponent},
  { path:'assets',component:AssetsComponent},
  { path:'outpass',component:OutpassComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostelRoutingModule {}
