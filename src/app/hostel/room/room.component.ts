import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonDeleteDialogueComponent } from 'src/app/shared/components/common-delete-dialogue/common-delete-dialogue.component';
import { Room } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddRoomComponent } from './add-room/add-room.component';

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

  // constructor(
  //   private Api: HostelService,
  //   private dialog: MatDialog,

  //   private router: Router
  // ) {}

  // async ngOnInit(): Promise<void> {
  //   this.init();
  // }

  // async GetDocTypes() {
  //   this.dataSource.data = (await this.Api.readdata() as unknown as Room[]);
  // }

  // async init() {
  //   await this.GetDocTypes();
  //   this.dataSource.sort = this.sort;
    
  // }


  /////////////////////////////////////////////////////////////

  datas1:  Room[]=[];
  constructor(private Api: HostelService,public dialog: MatDialog) { }

   ngOnInit() {
    this.init();
  }

  GetAddRoom() {
    this.Api.readroomdata().subscribe((datas: any[])=>{
      this.datas1 = datas;
      this.dataSource.data=datas
      console.log(this.datas1)
     
  });
  }

  init() {
    this.GetAddRoom()
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
  openDialog(Room?:Room) {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      data:Room
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.GetAddRoom()
    });
  }

  deleteDocType(item?: Room) {
    console.log(item);
    
    const dialogRef = this.dialog.open(CommonDeleteDialogueComponent, {
      width: '400px',
      data: {
        title: 'Delete Cognitive Level',
        description: 'Are you sure you want to delete this Cognitive Level?',
        type: 'Delete-AddRoom',
        id: item?.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.GetAddRoom();
    });
  }

}
