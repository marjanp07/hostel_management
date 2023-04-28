import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { hostelFee } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddHostelfeeComponent } from './add-hostelfee/add-hostelfee.component';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';

@Component({
  selector: 'app-hostel-fee',
  templateUrl: './hostel-fee.component.html',
  styleUrls: ['./hostel-fee.component.scss']
})
export class HostelFeeComponent {

  dataSource = new MatTableDataSource<hostelFee>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'NO',
  'hosteler_name',
  'reg_no',
  'Hostel_room_number',
  'Academic_yearsession',
  'hostel_charge',
  'ACTIONS'
];
datas1:  hostelFee[]=[];
constructor(private Api: HostelService,public dialog: MatDialog) { }

ngOnInit() {
  this.init();
}

GetRoomVacate() {
  this.Api.gethostelfee().subscribe((datas: any[])=>{
    this.datas1 = datas;
    this.dataSource.data=datas
    console.log(this.datas1)
     
});
}

init() {
  this.GetRoomVacate()
}


addDocType(item?: hostelFee) {
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
openDialog(hostelFee?:hostelFee) {
  const dialogRef = this.dialog.open(AddHostelfeeComponent, {
    data:hostelFee
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.GetRoomVacate()
  });
}

deleteDocType(item?: hostelFee) {
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
