import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
// import { Room } from '../../room.model';

@Component({
  selector: 'app-allot-room',
  templateUrl: './allot-room.component.html',
  styleUrls: ['./allot-room.component.scss']
})
export class AllotRoomComponent implements OnInit {

  rooms: Room[] = [
    {
      id:0,
      Room_number:0,
      Block_name:'',
      Floor:'',
      Total_space:0,
      Available_space:0,
      photo: '',
    }
  ]
  // datas1:  Room[]=[];
  constructor(private Api: HostelService) { }

  ngOnInit(): void {
    this.Api.GetAllotRoom().subscribe((datas: Room[])=>{
      this.rooms = datas;
      console.log(this.rooms)
     

  })
}

//   GetAllotRoom() {
//     this.Api.readroomdata().subscribe((datas: any[])=>{
//       this.datas1 = datas;
//       console.log(this.datas1)
//      
//   });
  


}
