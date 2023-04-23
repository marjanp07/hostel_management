import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HostelService } from 'src/app/shared/services/hostel.service';





@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {

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

  ngOnInit(): void {
    this.init();
  }
  async init() {
    this.markAttendanceGroup.get('hour')?.valueChanges.subscribe(async (e) => {
    //   this.st.students = [];
    //   this.st.hour = e;
    //   if (
    //     this.markAttendanceGroup.get('hour')?.value &&
    //     this.markAttendanceGroup.get('paper')?.value
    //   )
    //     this.st.students = await this.Api.GetStudentsForAttendanceEntry(
    //       this.markAttendanceGroup.get('class')?.value.split(',')[0] as number,
    //       this.markAttendanceGroup.get('paper')?.value,
    //       this.dateValue,
    //       this.markAttendanceGroup.get('batch')?.value,
    //       this.GroupID
    //     );
    //   this.getAttendanceEdit();
    });
  }

  // isChecked = () => this.st.students.every((e) => e.isSelected);
  // changeAllSelection() {
  //   if (this.st.students.every((e) => e.isSelected))
  //     this.st.students.forEach((e) => {
  //       e.isSelected = false;
  //     });
  //   else
  //     this.st.students.forEach((e) => {
  //       e.isSelected = true;
  //     });
  // }
  // getAttendanceStatus() {
  //   if (
  //     this.st.students.every((e) => e.AtendanceType == AtendanceType.Present)
  //   ) {
  //     this.AllAttendanceSelelcted = 'P';
  //     return AtendanceType.Unmarked;
  //   } else if (
  //     this.st.students.every((e) => e.AtendanceType == AtendanceType.Absent)
  //   ) {
  //     this.AllAttendanceSelelcted = 'A';
  //     return AtendanceType.Present;
  //   } else if (
  //     this.st.students.every((e) => e.AtendanceType == AtendanceType.Freeze)
  //   ) {
  //     this.AllAttendanceSelelcted = 'F';
  //     return AtendanceType.Freeze;
  //   } else {
  //     this.AllAttendanceSelelcted = 'U';
  //     return AtendanceType.Unmarked;
  //   }
  //   // this.students.forEach((e) => {
  //   //   let allAttendance = AtendanceType.Unmarked;
  //   //   if(e.AtendanceType != AtendanceType.Unmarked)
  //   //   return AtendanceType.Unmarked;
  //   //   else return
  //   // });
  // }
  // changeAllAttendance() {
  //   if (this.AllAttendanceSelelcted == 'P') {
  //     this.st.students.forEach((e) => {
  //       e.AtendanceType = AtendanceType.Absent;
  //     });
  //     this.AllAttendanceSelelcted = 'A';
  //   } else if (this.AllAttendanceSelelcted == 'A') {
  //     this.st.students.forEach((e) => {
  //       e.AtendanceType = AtendanceType.Present;
  //     });
  //     this.AllAttendanceSelelcted = 'P';
  //   } else if (this.AllAttendanceSelelcted == 'U') {
  //     this.st.students.forEach((e) => {
  //       e.AtendanceType = AtendanceType.Present;
  //     });
  //     this.AllAttendanceSelelcted = 'P';
  //   }
  // }

  // changeAttendance(student: StudentsForMarkAttendance) {
  //   switch (student.AtendanceType) {
  //     case AtendanceType.Unmarked:
  //       student.AtendanceType = AtendanceType.Present;
  //       break;
  //     case AtendanceType.Present:
  //       student.AtendanceType = AtendanceType.Absent;
  //       break;
  //     case AtendanceType.Absent:
  //       student.AtendanceType = AtendanceType.Present;
  //       break;
  //   }
  //   this.getAttendanceStatus();
  // }
  async submit() {
    // this.isLoading = true;
    // let markedStudents: StudentAttendnaceDetails[] = [];
    // this.st.students.forEach((e) => {
    //   markedStudents.push({
    //     AttendanceDetailID: 0,
    //     SemesterYearstudentID: e.SemesterYearstudentID,
    //     AttendanceDate: this.dateValue,
    //     Hour1: this.st.hour == 1 ? e.AtendanceType : e.Hour1,
    //     Hour2: this.st.hour == 2 ? e.AtendanceType : e.Hour2,
    //     Hour3: this.st.hour == 3 ? e.AtendanceType : e.Hour3,
    //     Hour4: this.st.hour == 4 ? e.AtendanceType : e.Hour4,
    //     Hour5: this.st.hour == 5 ? e.AtendanceType : e.Hour5,
    //     Hour6: this.st.hour == 6 ? e.AtendanceType : e.Hour6,
    //     Hour7: this.st.hour == 7 ? e.AtendanceType : e.Hour7,
    //     Hour8: this.st.hour == 8 ? e.AtendanceType : e.Hour8,
    //     Hour9: this.st.hour == 9 ? e.AtendanceType : e.Hour9,
    //     H1StaffID: this.st.hour == 1 ? this.StaffID : '',
    //     H1PaperID:
    //       this.st.hour == 1 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H2StaffID: this.st.hour == 2 ? this.StaffID : '',
    //     H2PaperID:
    //       this.st.hour == 2 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H3StaffID: this.st.hour == 3 ? this.StaffID : '',
    //     H3PaperID:
    //       this.st.hour == 3 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H4StaffID: this.st.hour == 4 ? this.StaffID : '',
    //     H4PaperID:
    //       this.st.hour == 4 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H5StaffID: this.st.hour == 5 ? this.StaffID : '',
    //     H5PaperID:
    //       this.st.hour == 5 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H6StaffID: this.st.hour == 6 ? this.StaffID : '',
    //     H6PaperID:
    //       this.st.hour == 6 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H7StaffID: this.st.hour == 7 ? this.StaffID : '',
    //     H7PaperID:
    //       this.st.hour == 7 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H8StaffID: this.st.hour == 8 ? this.StaffID : '',
    //     H8PaperID:
    //       this.st.hour == 8 ? this.markAttendanceGroup.get('paper')?.value : '',
    //     H9StaffID: this.st.hour == 9 ? this.StaffID : '',
    //     H9PaperID:
    //       this.st.hour == 9 ? this.markAttendanceGroup.get('paper')?.value : '',
    //   });
    // });
    // markedStudents;
    // try {
    //   let response = await this.Api.MarkAttendance(
    //     markedStudents,
    //     this.markAttendanceGroup.get('class')?.value.split(',')[0] as number,
    //     this.markAttendanceGroup.get('hour')?.value,
    //     this.GroupID,
    //     '',
    //     '',
    //     this.markAttendanceGroup.get('paper')?.value,
    //     this.markAttendanceGroup.get('batch')?.value,
    //     'SP',
    //     this.markAttendanceGroup.get('hour')?.value
    //   );
    //   if (response > 0) {
    //     this._snackBar.showNotification(SnackBarType.SUCCESS, 'Marked attendance successfully saved.');
    //   } else {
    //     this._snackBar.showNotification(SnackBarType.ERROR, 'Error occured while saving attendance.');
    //   }
    // } catch {
    //   this._snackBar.showNotification(SnackBarType.ERROR, 'Error saving the attendance.');
    // }
    // this.isLoading = false;
  }

}