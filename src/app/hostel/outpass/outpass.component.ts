import { Component, OnInit, ViewChild } from '@angular/core';
import { outPass } from 'src/app/shared/interfaces/hostel.interface';
import { AddOutPassComponent } from './add-out-pass/add-out-pass.component';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-outpass',
  templateUrl: './outpass.component.html',
  styleUrls: ['./outpass.component.scss']
})
export class OutpassComponent implements OnInit {

  dataSource = new MatTableDataSource<outPass>([]);
    @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  displayedColumns: string[] = [
    'NO',
    'reg_no',
    'hosteler_name',
    'Contact_no',
    'date_of_outpass',
    'time_of_departure',
    'return_time',
    'reason_outpass',
    'ACTIONS'
  ];
  datas1:  outPass[]=[];
  constructor(private Api: HostelService,public dialog: MatDialog) { }
  
  ngOnInit() {
    this.init();
  }
  
  GetRoomVacate() {
    this.Api.getOutPass().subscribe((datas: any[])=>{
      this.datas1 = datas;
      this.dataSource.data=datas
      console.log(this.datas1)
       
  });
  }
  
  init() {
    this.GetRoomVacate()
  }
  
  
  addDocType(item?: outPass) {
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
  openDialog(outPass?:outPass) {
    const dialogRef = this.dialog.open(AddOutPassComponent, {
      data:outPass
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.GetRoomVacate()
    });
  }
  
  deleteDocType(item?: outPass) {
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
  