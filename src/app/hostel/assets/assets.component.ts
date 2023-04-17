import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'
import { asset } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})


export class AssetsComponent {
  dataSource = new MatTableDataSource<asset>([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
displayedColumns: string[] = [
  'Asset_No',
  'Asset_name',
  'Asset_type',
  'Description',
  'ACTIONS'
];
datas1:  asset[]=[];
constructor(private Api: HostelService,private r:Router) { }

async ngOnInit(): Promise<void> {
  this.init();
}

async GetDocTypes() {
  this.dataSource.data = (await this.Api.readdata() as unknown as asset[]);
}

async init() {
  this.Api.getasset().subscribe((datas: asset[])=>{
    this.datas1 = datas;
    console.log(this.datas1)
     
});
}

addDocType(item?: asset) {
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

deleteDocType(item: asset) {
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



