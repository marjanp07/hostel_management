import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { outPass } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-edit-out-pass',
  templateUrl: './edit-out-pass.component.html',
  styleUrls: ['./edit-out-pass.component.scss']
})
export class EditOutPassComponent implements OnInit {

  public x=true
  datas1: outPass[]=[];
  constructor(private fb:FormBuilder ,private r:ActivatedRoute,private apiService:HostelService, private router:Router) { }

  registrationForm=this.fb.group({
    id:[0],
    reg_no:[0],
    hosteler_name:[''],
    Contact_no:[0],
    date_of_outpass:[''],
    time_of_departure:[''],
    return_time:[''],
    reason_outpass:[''],
})

id:any
  ngOnInit(): void {



    this.id=this.r.snapshot.paramMap.get('id');
    
    
    if(this.id)
    {
    this.apiService.readOutPass(this.id).subscribe({next:(response)=>{
      
this.registrationForm.patchValue(response)
    }
  });
}
} 

  onsub()
  {
    let data = this.registrationForm.value as outPass;
 
  
    this.apiService.updateOutPass(this.id,data).subscribe((policy: any)=>{
      
     
      
     
  this.router.navigate(['/hostel/outpass'])
     
  });
  }

}
