import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  constructor(private fb:FormBuilder ,private apiService:HostelService, private router:Router) { }

  registrationForm=this.fb.group({
    Room_name:['',[Validators.required]],
    Block_name:['',[Validators.required]],
    Floor:[0,[Validators.required]],
    Total_space:[0,[Validators.required]],
    Available_space:[0,[Validators.required]],
    photo:['',[Validators.required]],
})

// get f()
// {
//   return this.registrationForm.controls;
// }


ngOnInit(): void {
}


onsub()
{
  let data1 = this.registrationForm.value as Room;

  this.apiService.createPolicy1(data1).subscribe((product: any)=>{
  
   
 this.router.navigate(['/demo'])
});

}
}
