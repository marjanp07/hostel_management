import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatInputModule } from '@angular/material/input';
// import { Room } from '../../room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  data : any ;
  image: any;
  // data1s: Room[]=[];
  constructor(private fb:FormBuilder ,private apiService:HostelService, private router:Router) { }

  registrationForm=this.fb.group({
    Room_name:['',[Validators.required]],
    Block_name:['',[Validators.required]],
    Floor:[0,[Validators.required]],
    Total_space:[0,[Validators.required]],
    Available_space:[0,[Validators.required]],
    photo:['',[Validators.required]],
})

get f()
{
  return this.registrationForm.controls;
}

onFileSelect (event:any)
{if (event.target.files.length > 0) {
  this.image= event.target.files[0];
}}
ngOnInit(): void {
  this.data = true
  // this.apiService.readdata().subscribe((datas: Room[])=>{
  //   this.datas1 = datas;
   

  

  // })

}


onsub()
{
  console.log(this.registrationForm.value)

  this.apiService.saveRoom(this.registrationForm.value,this.image)


}
}
