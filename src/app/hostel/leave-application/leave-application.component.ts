import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';
import { leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddLeaveapplicationComponent } from './add-leaveapplication/add-leaveapplication.component';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {

  dataSource = new MatTableDataSource<leave>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'NO',
  'hosteler_name',
  'Application_date',
  'Leave_from',
  'Leave_till',
  'Reason',
  'Visiting_person',
  'Guardian_details',
  'ACTIONS'
];
datas1:  leave[]=[];
constructor(private Api: HostelService,public dialog: MatDialog) { }

ngOnInit() {
  this.init();
}

GetRoomVacate() {
  this.Api.readvacatedata().subscribe((datas: any[])=>{
    this.datas1 = datas;
    this.dataSource.data=datas
    console.log(this.datas1)
     
});
}

init() {
  this.GetRoomVacate()
}


addDocType(item?: leave) {
  // const dialogRef = this.dialog.open(AddCognitiveLevelComponent, {
  //   data: {
  //     val: item,
  //   },
  // });
  // dialogRef.afterClosed().subscribe(async () => {
  //   this.GetDocTypes();
  // });
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
openDialog(vacate?:leave) {
  const dialogRef = this.dialog.open(AddLeaveapplicationComponent, {
    data:vacate
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.GetRoomVacate()
  });
}

deleteDocType(item?: leave) {
  console.log(item);
  
  const dialogRef = this.dialog.open(CommonDeleteDialogueComponent, {
    width: '400px',
    data: {
      title: 'Delete Cognitive Level',
      description: 'Are you sure you want to dele  te this Cognitive Level?',
      type: 'Delete-roomVacate',
      id: item?.id,
    },
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.GetRoomVacate();
  });
}

}
