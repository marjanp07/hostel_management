import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { vacate } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-room-vacate',
  templateUrl: './add-room-vacate.component.html',
  styleUrls: ['./add-room-vacate.component.scss']
})
export class AddRoomVacateComponent implements OnInit {

   constructor(private fb:FormBuilder,private router:Router,private apiService:HostelService,private route: ActivatedRoute) { }


  

  registrationForm=this.fb.group({

    hosteler_name:['',[Validators.required]],
    reg_no:[0,[Validators.required]],
    vacating_date:['',[Validators.required]],
    vacating_reason:['',[Validators.required]],
})

ngOnInit(): void {
  const id = this.route.snapshot.params['id'];
  if(id == 0)
    console.log("add");
  else if( id > 0)
    console.log("edit");
}
  onsub()
  {
    let data1 = this.registrationForm.value as vacate;
  
    this.apiService.createPolicy1(data1).subscribe((product: any)=>{
    
     
  //  this.router.navigate(['/home'])
  });
  }

}
