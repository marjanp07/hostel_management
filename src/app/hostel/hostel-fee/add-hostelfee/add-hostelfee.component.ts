import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { hostelFee, leave } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddMessfeeComponent } from '../../mess-fee/add-messfee/add-messfee.component';

@Component({
  selector: 'app-add-hostelfee',
  templateUrl: './add-hostelfee.component.html',
  styleUrls: ['./add-hostelfee.component.scss']
})
export class AddHostelfeeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: hostelFee,
  private dialogRef: MatDialogRef<AddMessfeeComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }




 registrationForm=this.fb.group({

  hosteler_name:['',[Validators.required]],
  reg_no:[0,[Validators.required]],
  Room_number:[0,[Validators.required]],
  Academic_yearsession:[0,[Validators.required]],
  hostel_charge:[0,[Validators.required]],

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
   let formVal = this.registrationForm.value as hostelFee
 
  if(this.data){
   this.apiService.updatehostelfee(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.posthostelfee(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
 }
}
