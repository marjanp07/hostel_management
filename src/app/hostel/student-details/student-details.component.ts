import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { studentregisteration } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {


    dataSource = new MatTableDataSource<studentregisteration>([]);
    @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  displayedColumns: string[] = [
    'NO',
    'reg_no',
    'hosteler_name',
    'Current_Class',
    'c_number',
    'Select_block',
    'ACTIONS'
  ];
  datas1:  studentregisteration[]=[];
  constructor(private Api: HostelService,private r:Router,) { }
  
  ngOnInit() {
    this.init();
  }
  
  GetRoomVacate() {
    this.Api.readadmissionentry().subscribe((datas: any[])=>{
      this.datas1 = datas;
      this.dataSource.data=datas
      console.log(this.datas1)
       
  });
  }
  
  init() {
    this.GetRoomVacate()
  }
  
  

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // openDialog(hostelFee?:hostelFee) {
  //   const dialogRef = this.dialog.open(AddHostelfeeComponent, {
  //     data:hostelFee
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     this.GetRoomVacate()
  //   });
  // }
  
  // deleteDocType(item?: hostelFee) {
  //   console.log(item);
    
  //   const dialogRef = this.dialog.open(CommonDeleteDialogueComponent, {
  //     width: '400px',
  //     data: {
  //       title: 'Delete Cognitive Level',
  //       description: 'Are you sure you want to dele  te this Cognitive Level?',
  //       type: 'Delete-roomVacate',
  //       id: item?.id,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.GetRoomVacate();
  //   });
  // }

pass(registration:studentregisteration){
console.log(registration);


  this.r.navigate(['hostel/studentdetails'],{
    state: registration
  })



      }

  
  }
  