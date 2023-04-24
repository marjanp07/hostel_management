import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-leaveapplication',
  templateUrl: './add-leaveapplication.component.html',
  styleUrls: ['./add-leaveapplication.component.scss']
})
export class AddLeaveapplicationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: leave,
  private dialogRef: MatDialogRef<AddLeaveapplicationComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }




 registrationForm=this.fb.group({

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
   let formVal = this.registrationForm.value as leave
 
  if(this.data){
   this.apiService.leaveupdate(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.postleave(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
 }
}
