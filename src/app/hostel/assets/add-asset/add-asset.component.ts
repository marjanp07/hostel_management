import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { asset } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

constructor(private fb:FormBuilder,private router:Router,private apiService:HostelService,private route: ActivatedRoute) { }


  

registrationForm=this.fb.group({
  // Asset_No:[0,[Validators.required]],
  Asset_name:['',[Validators.required]],
  Asset_type:['',[Validators.required]],
  Description:['',[Validators.required]],

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
  let data1 = this.registrationForm.value as asset;

  this.apiService.postassetdata(data1).subscribe((product: any)=>{
  
   
 this.router.navigate(['/hostel/assethome'])
});
}

}

