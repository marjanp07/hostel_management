import { Component, OnInit, ViewChild } from '@angular/core';
import { messFee } from 'src/app/shared/interfaces/hostel.interface';
import { AddMessfeeComponent } from './add-messfee/add-messfee.component';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mess-fee',
  templateUrl: './mess-fee.component.html',
  styleUrls: ['./mess-fee.component.scss']
})
export class MessFeeComponent{

  dataSource = new MatTableDataSource<messFee>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'NO',
  'reg_no',
  'hosteler_name',
  'Period',
  'mess_charge',
  'ACTIONS'
];
datas1:  messFee[]=[];
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


addDocType(item?: messFee) {
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
openDialog(messFee?:messFee) {
  const dialogRef = this.dialog.open(AddMessfeeComponent, {
    data:messFee
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.GetRoomVacate()
  });
}

deleteDocType(item?: messFee) {
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
