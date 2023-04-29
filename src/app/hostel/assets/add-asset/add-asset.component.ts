import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { asset } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {


constructor(@Inject(MAT_DIALOG_DATA) public data: asset,
private dialogRef: MatDialogRef<AddAssetComponent>,
 private fb: FormBuilder, 
 private router: Router,
  private apiService: HostelService,
   private route: ActivatedRoute

) { }




registrationForm=this.fb.group({

  Asset_name:['',[Validators.required]],
  Asset_type:['',[Validators.required]],
  Asset_quantity:[0,[Validators.required]],
  Description:['',[Validators.required]],

})

ngOnInit(): void {
 const id = this.route.snapshot.params['id'];

 if (this.data) {
   console.log(this.data);
   
   this.registrationForm.patchValue(this.data)
 
 }
 // if (id == 0)
 //   console.log("add");
 // else if (id > 0)
 //   console.log("edit");
}
onsub()
{
 let formVal = this.registrationForm.value as asset

if(this.data){
 this.apiService.assetupdate(this.data.id,formVal).subscribe((policy: any)=>{
   this.dialogRef.close()
     
    
 // this.router.navigate(['/hostel/outpass'])
    
 });
}
else {
 this.apiService.postassetdata(formVal)
 .subscribe((policy: any)=>{
   this.dialogRef.close()
     
    
 // this.router.navigate(['/hostel/outpass'])
    
 });
}
}
}


