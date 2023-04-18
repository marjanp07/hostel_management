import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-leaveapplication',
  templateUrl: './add-leaveapplication.component.html',
  styleUrls: ['./add-leaveapplication.component.scss']
})
export class AddLeaveapplicationComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private apiService:HostelService,private route: ActivatedRoute) { }


  

  registrationForm=this.fb.group({
    // Asset_No:[0,[Validators.required]],
    hosteler_name:['',[Validators.required]],
    Application_date:['',[Validators.required]],
    Leave_form:['',[Validators.required]],
    Leave_till:['',[Validators.required]],
    Reason:['',[Validators.required]],
    Visiting_person:['',[Validators.required]],
    Guardian_details:['',[Validators.required]],

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
    let data1 = this.registrationForm.value as leave;
  
    this.apiService.postleave(data1).subscribe((product: any)=>{
    
     
   this.router.navigate(['/hostel/leavehome'])
  });
  }
  
  }
  