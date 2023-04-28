import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/shared/interfaces/hostel.interface';

import { HostelService } from 'src/app/shared/services/hostel.service';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Room } from '../../room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  // data : any ;
  // image: any;
  // data1s: Room[]=[];
  photo:any;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: Room,
  private dialogRef: MatDialogRef<AddRoomComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }

  registrationForm=this.fb.group({
    id: [0],
    Room_number:[0,[Validators.required]],
    Block_name:['',[Validators.required]],
    Floor:['',[Validators.required]],
    Total_space:[0,[Validators.required]],
    Available_space:[0,[Validators.required]],
    photo:['',[Validators.required]],
})

get f()
{
  return this.registrationForm.controls;
}

handleFileInput(event: any){
  if (event.target.files.length>0){
    this.photo=event.target.files[0]
    console.log(this.photo);
    
  }
 
}


ngOnInit(): void {
  const id = this.route.snapshot.params['id'];

  if (this.data) {
    console.log(this.data);
    
    this.registrationForm.patchValue(this.data as any)
  
  }
  
}
onsub()
{
  let formVal = this.registrationForm.value as Room

 if(this.data){
  this.apiService.updateAddRoom(this.data.id,formVal,this.photo).subscribe((policy: any)=>{
    this.dialogRef.close()
      
     
  // this.router.navigate(['/hostel/outpass'])
     
  });
 }
 else {
  this.apiService.AddRooms(formVal)
  .subscribe((policy: any)=>{
    this.dialogRef.close()
      
     
  // this.router.navigate(['/hostel/outpass'])
     
  });
 }
}
}
