import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-update-formleav',
  templateUrl: './update-formleav.component.html',
  styleUrls: ['./update-formleav.component.scss']
})
export class UpdateFormleavComponent implements OnInit {

  constructor(private fb:FormBuilder,private r:ActivatedRoute,private apiService:HostelService,private rt:Router) { }


  

registrationForm=this.fb.group({
  // Asset_No:[0,[Validators.required]],
  id:[0],
  hosteler_name:['',[Validators.required]],
  Application_date:['',[Validators.required]],
  Leave_form:['',[Validators.required]],
  Leave_till:['',[Validators.required]],
  Reason:['',[Validators.required]],
  Visiting_person:['',[Validators.required]],
  Guardian_details:['',[Validators.required]],

})
id:any
  ngOnInit(): void {
 

    this.id=this.r.snapshot.paramMap.get('id');
    
    
    if(this.id)
    {
    this.apiService.getleave1(this.id).subscribe({next:(response)=>{
      
this.registrationForm.patchValue(response)
    }
  });
}
} 

  onsub()
  {
    let data = this.registrationForm.value as leave;
 
  
    this.apiService.leaveupdate(this.id,data).subscribe((policy: any)=>{
      
     
      
     
  this.rt.navigate(['hostel/updateleave'])
     
  });
  }
  }


