import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { feeReduction } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddFeeReductionComponent } from './add-fee-reduction/add-fee-reduction.component';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';

@Component({
  selector: 'app-fee-reduction',
  templateUrl: './fee-reduction.component.html',
  styleUrls: ['./fee-reduction.component.scss']
})
export class FeeReductionComponent {

  dataSource = new MatTableDataSource<feeReduction>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'NO',
  'hosteler_name',
  'reg_no',
  'Mess_charge',
  'Number_of_days_continues_absent',
  'purpose_of_leave',
  'Leave_date',
  'Leave_till',
  'Reducted_mess_charge',
  'ACTIONS'
];
datas1:  feeReduction[]=[];
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


addDocType(item?: feeReduction) {
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
openDialog(feeReduction?:feeReduction) {
  const dialogRef = this.dialog.open(AddFeeReductionComponent, {
    data:feeReduction
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.GetRoomVacate()
  });
}

deleteDocType(item?: feeReduction) {
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
