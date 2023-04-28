import { Component, OnInit, ViewChild } from '@angular/core';
import { totelBill } from 'src/app/shared/interfaces/hostel.interface';
import { AddTtlBillComponent } from './add-ttl-bill/add-ttl-bill.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';

@Component({
  selector: 'app-totall-bill-generate',
  templateUrl: './totall-bill-generate.component.html',
  styleUrls: ['./totall-bill-generate.component.scss']
})
export class TotallBillGenerateComponent {

  dataSource = new MatTableDataSource<totelBill>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'NO',
  'reg_no',
  'hosteler_name',
  'hostel_charge',
  'mess_charge',
  'W_E_charge',
  'Inventory_charge',
  'Penality',
  'Reducted_amount',
  'Total_amount',
  'ACTIONS'
];
datas1:  totelBill[]=[];
constructor(private Api: HostelService,public dialog: MatDialog) { }

ngOnInit() {
  this.init();
}

GetRoomVacate() {
  this.Api.gettotelbill().subscribe((datas: any[])=>{
    this.datas1 = datas;
    this.dataSource.data=datas
    console.log(this.datas1)
     
});
}

init() {
  this.GetRoomVacate()
}


addDocType(item?: totelBill) {
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
openDialog(totelBill?:totelBill) {
  const dialogRef = this.dialog.open(AddTtlBillComponent, {
    data:totelBill
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.GetRoomVacate()
  });
}

deleteDocType(item?: totelBill) {
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
