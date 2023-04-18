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
  constructor(private Api: HostelService,private r:Router,
    private dialog: MatDialog
    ) { }

  async ngOnInit(): Promise<void> {
    this.init();
  }

  async GetOutpass() {
    this.Api.getOutPass().subscribe((datas: any[])=>{
      this.datas1 = datas;
      console.log(this.datas1)
     
  });
  }

   init() {
    this.GetOutpass()
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
  // openDialog(vacate?:outPass) {
  //   const dialogRef = this.dialog.open(AddOutPassComponent, {
  //     data:vacate
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  deleteDocType(item?: outPass) {
    console.log(item);
    
    const dialogRef = this.dialog.open(CommonDeleteDialogueComponent, {
      width: '400px',
      data: {
        title: 'Delete Cognitive Level',
        description: 'Are you sure you want to dele  te this Cognitive Level?',
        type: 'Delete-outPass',
        id: item?.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.GetOutpass();
    });
  }

  // Edit(id:number)
  // {
  // this.r.navigate(['/hostel/outpass/editoutpass/',id])
  //      
  // }


}
