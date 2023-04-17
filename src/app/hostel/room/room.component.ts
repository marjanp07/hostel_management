import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  dataSource = new MatTableDataSource<Room>([]);
 
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  displayedColumns: string[] = [
    'NO',
    'Room_name',
    'Block_name',
    'Floor',
    'Total_space',
    'Available_space',
    'photo',
    'ACTIONS'
  ];

  constructor(
    private Api: HostelService,
    private dialog: MatDialog,

    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.init();
  }

  async GetDocTypes() {
    this.dataSource.data = (await this.Api.readdata() as unknown as Room[]);
  }

  async init() {
    await this.GetDocTypes();
    this.dataSource.sort = this.sort;
    

    // if (this.permission.EditPermission || this.permission.DeletePermission)
    //   this.displayedColumns.push('ACTIONS');
  }



  addDocType(item?: Room) {
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

  deleteDocType(item: Room) {
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
}
