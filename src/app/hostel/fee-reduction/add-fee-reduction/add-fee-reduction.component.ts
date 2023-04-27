import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { feeReduction } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-fee-reduction',
  templateUrl: './add-fee-reduction.component.html',
  styleUrls: ['./add-fee-reduction.component.scss']
})
export class AddFeeReductionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: feeReduction,
  private dialogRef: MatDialogRef<AddFeeReductionComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }




 registrationForm=this.fb.group({

  hosteler_name:['',[Validators.required]],
  reg_no:[0,[Validators.required]],
  Mess_charge:[0,[Validators.required]],
  Number_of_days_continues_absent:['',[Validators.required]],
  purpose_of_leave:['',[Validators.required]],
  Leave_date:['',[Validators.required]],
  Leave_till:['',[Validators.required]],
  Reducted_mess_charge:[0,[Validators.required]],

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
   let formVal = this.registrationForm.value as feeReduction
 
  if(this.data){
   this.apiService.updatefeeReduct(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.postfeeReduct(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
 }
}
