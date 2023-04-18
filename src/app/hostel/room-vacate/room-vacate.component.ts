import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatTableDataSource } from '@angular/material/table';
import { vacate } from 'src/app/shared/interfaces/hostel.interface';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomVacateComponent } from './add-room-vacate/add-room-vacate.component';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';
@Component({
  selector: 'app-room-vacate',
  templateUrl: './room-vacate.component.html',
  styleUrls: ['./room-vacate.component.scss']
})
// export class RoomVacateComponent implements OnInit {
  export class RoomVacateComponent {
    dataSource = new MatTableDataSource<vacate>([]);
    @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  displayedColumns: string[] = [
    'NO',
    'hosteler_name',
    'reg_no',
    'vacating_date',
    'vacating_reason',
    'ACTIONS'
  ];
  datas1:  vacate[]=[];
  constructor(private Api: HostelService,public dialog: MatDialog) { }

   ngOnInit() {
    this.init();
  }

  GetRoomVacate() {
    this.Api.readvacatedata().subscribe((datas: any[])=>{
      this.datas1 = datas;
      console.log(this.datas1)
     
  });
  }

  init() {
    this.GetRoomVacate()
}

  addDocType(item?: vacate) {
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
  openDialog(vacate?:vacate) {
    const dialogRef = this.dialog.open(AddRoomVacateComponent, {
      data:vacate
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.GetRoomVacate()
    });
  }

  deleteDocType(item?: vacate) {
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
      this.GetOutpass();
    });
  }

}
