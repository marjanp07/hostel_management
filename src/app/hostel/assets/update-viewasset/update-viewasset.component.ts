import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { asset } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-update-viewasset',
  templateUrl: './update-viewasset.component.html',
  styleUrls: ['./update-viewasset.component.scss']
})
export class UpdateViewassetComponent implements OnInit {
  
  
  constructor(private fb:FormBuilder,private r:ActivatedRoute,private apiService:HostelService,private rt:Router) { }


  

registrationForm=this.fb.group({
  // Asset_No:[0,[Validators.required]],
  id:[0],
  Asset_name:['',[Validators.required]],
  Asset_type:['',[Validators.required]],
  Description:['',[Validators.required]],

})
id:any
  ngOnInit(): void {
 

    this.id=this.r.snapshot.paramMap.get('id');
    
    
    if(this.id)
    {
    this.apiService.getasset1(this.id).subscribe({next:(response)=>{
      
this.registrationForm.patchValue(response)
    }
  });
}
} 

  onsub()
  {
    let data = this.registrationForm.value as asset;
 
  
    this.apiService.assetupdate(this.id,data).subscribe((policy: any)=>{
      
     
      
     
  this.rt.navigate(['hostel/update'])
     
  });
  }
  }


