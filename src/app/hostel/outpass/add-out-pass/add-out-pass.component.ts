import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { outPass } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-out-pass',
  templateUrl: './add-out-pass.component.html',
  styleUrls: ['./add-out-pass.component.scss']
})
export class AddOutPassComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private apiService:HostelService,private route: ActivatedRoute) { }


  

  registrationForm=this.fb.group({
    reg_no:[0,[Validators.required]],
    hosteler_name:['',[Validators.required]],
    Contact_no:[0,[Validators.required]],
    date_of_outpass:['',[Validators.required]],
    time_of_departure:['',[Validators.required]],
    return_time:['',[Validators.required]],
    reason_outpass:['',[Validators.required]],
  
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
    let data1 = this.registrationForm.value as outPass;
  
    this.apiService.postOutPass(data1).subscribe((product: any)=>{
    
     
   this.router.navigate(['/hostel/outpass'])
  });
  }

}
