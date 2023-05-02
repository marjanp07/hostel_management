import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { outPass } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-out-pass',
  templateUrl: './add-out-pass.component.html',
  styleUrls: ['./add-out-pass.component.scss']
})
export class AddOutPassComponent implements OnInit {

constructor(@Inject(MAT_DIALOG_DATA) public data: outPass,
private dialogRef: MatDialogRef<AddOutPassComponent>,
 private fb: FormBuilder, 
 private router: Router,
  private apiService: HostelService,
   private route: ActivatedRoute

) { }




registrationForm=this.fb.group({
  id: [0],
  reg_no:[0,[Validators.required]],
  hosteler_name:['',[Validators.required]],
  c_number:[0,[Validators.required]],
  date_of_outpass:['',[Validators.required]],
  time_of_departure:['',[Validators.required]],
  return_time:['',[Validators.required]],
  reason_outpass:['',[Validators.required]],

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
 let formVal = this.registrationForm.value as outPass

if(this.data){
 this.apiService.updateOutPass(this.data.id,formVal).subscribe((policy: any)=>{
   this.dialogRef.close()
     
    
 // this.router.navigate(['/hostel/outpass'])
    
 });
}
else {
 this.apiService.postOutPass(formVal)
 .subscribe((policy: any)=>{
   this.dialogRef.close()
     
    
 // this.router.navigate(['/hostel/outpass'])
    
 });
}
}
}
