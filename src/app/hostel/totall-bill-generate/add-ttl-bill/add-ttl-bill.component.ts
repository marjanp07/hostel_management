import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { totelBill } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-ttl-bill',
  templateUrl: './add-ttl-bill.component.html',
  styleUrls: ['./add-ttl-bill.component.scss']
})
export class AddTtlBillComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: totelBill,
  private dialogRef: MatDialogRef<AddTtlBillComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }




 registrationForm=this.fb.group({

  reg_no:[0,[Validators.required]],
  hosteler_name:['',[Validators.required]],
  hostel_charge:[0,[Validators.required]],
  mess_charge:[0,[Validators.required]],
  W_E_charge:[0,[Validators.required]],
  Inventory_charge:[0,[Validators.required]],
  Penality:[0,[Validators.required]],
  Reducted_amount:[0,[Validators.required]],
  Total_amount:[0,[Validators.required]],

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
   let formVal = this.registrationForm.value as totelBill
 
  if(this.data){
   this.apiService.updatetotelbill(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.posttotelbill(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
 }
}
