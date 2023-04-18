import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {

  dataSource = new MatTableDataSource<leave>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'hosteler_id',
  'hosteler_name',
  'Application_date',
  'Leave_form',
  'Leave_till',
  'Reason',
  'Visiting_person',
  'Guardian_details',
  'ACTIONS'
];
datas1:  leave[]=[];
constructor(private Api: HostelService,private r:Router) { }

async ngOnInit(): Promise<void> {
  this.init();
}

async GetDocTypes() {
  this.dataSource.data = (await this.Api.readdata() as unknown as leave[]);
}

async init() {
  this.Api.getleave().subscribe((datas: leave[])=>{
    this.datas1 = datas;
    console.log(this.datas1)
     
});
}

addDocType(item?: leave) {
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

deleteDocType(item: leave) {
  // const dialogRef = this.dialog.open(CommonConfirmationDialogueComponent, {
  //   width: '400px',
  //   data: {
  //     title: 'Delete Cognitive Level',
  //     description: 'Are you sure you want to dele  te this Cognitive Level?',
  //     type: 'delete-cognitive-level',
  //     id: item.CognitiveLevelID,
  //   },
  // });
  // dialogRef.afterClosed().subscribe((result) => {
  //   this.GetDocTypes();
  // });
}

update(id:number)
{

this.r.navigate(['/up2',id])
     
};


}


