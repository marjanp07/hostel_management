import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { studentregisteration } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';





@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  dataSource = new MatTableDataSource<studentregisteration>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  displayedColumns: string[] = [
    'NO',
    'reg_no',
    'hosteler_name',
    'isPresent',
    
  ];

  blocks: string[] = [
    'Block_A',
    'Block_B',
    'Block_C',
    'Block_D'
  ]
  // attendanceType: {code: string,value: string}[] = [
  //   {
  //     code: 
  //   }
  // ]
  markAttendanceGroup: UntypedFormGroup = this.fb.group({
    Date: [
      this.datePipe.transform(Date.now(), 'yyyy-MM-dd'),
      Validators.required,
    ],

   

    Block: ['', Validators.required],
    // paper: ['', Validators.required],
    // class: ['', Validators.required],
    // batch: ['', Validators.required],
    // hour: ['', Validators.required],
  });
  checked:boolean = true;
  constructor(
    private fb: UntypedFormBuilder,
    private datePipe: DatePipe,
    private Api: HostelService,
    private _snackBar: MatSnackBar,
    private api: HostelService,
    private router: Router,
    private dialog: MatDialog
  ) { }
  public get dateValue(): string {
    return (
      this.datePipe.transform(
        this.markAttendanceGroup.get('Date')?.value,
        "yyyy-MM-dd'T'HH:mm:ss"
      ) ?? ''
    );
  }
SelectionStudents = new SelectionModel<Number>(true ,[])
  ngOnInit(): void {

    this.markAttendanceGroup.get('Block')?.valueChanges.subscribe(e=>{
      this.Api.GetAdmissionentryByBlockName(this.markAttendanceGroup.get("Block")?.value).subscribe(e=>{
        this.dataSource.data=e
        
       })
    } )
   
    // this.GetAttendance()
   
  }

  selectAll(){
    console.log("ccc",this.checked);
    
    this.dataSource.data.map(e=>{
      e.isPresent = this.checked ?  "Y" : "N"
      console.log(e);
      
      return e

    })
  }
  // GetAttendance() {
  //   this.Api.getAttendance().subscribe((datas: any[])=>{
  //     // this.datas1 = datas;
  //     this.dataSource.data=datas
  //     // console.log(this.datas1)
  //      
  // });
  // }


  selectAllStudent() {
    this.dataSource.data.forEach((obj) =>
     obj['isPresent'] = this.checked ? 'Y' : 'N'
    );
  }

  AttendanceChangeHandler(event: MatRadioChange, row: studentregisteration) {
    row['isPresent'] = event.value == 1 ? 'Y' : 'N'
  }

  MarkAttendance(){
    console.log(this.dataSource.data);
    
    this.api.markAttendance(this.dataSource.data).subscribe(e=> {
      console.log(e);
      
    })
  }
}