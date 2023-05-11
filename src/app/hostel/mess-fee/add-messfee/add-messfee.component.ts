import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { messFee } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-messfee',
  templateUrl: './add-messfee.component.html',
  styleUrls: ['./add-messfee.component.scss']
})
export class AddMessfeeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: messFee,
  private dialogRef: MatDialogRef<AddMessfeeComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute

 ) { }




 registrationForm=this.fb.group({
  id:[0],
  // reg_no:[0,[Validators.required]],
  // hosteler_name:['',[Validators.required]],
  Period:[0,[Validators.required]],
  mess_charge:[0,[Validators.required]],
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
   let formVal = this.registrationForm.value as messFee
 
  if(this.data){
   this.apiService.updatemessfee(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.postmessfee(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
 }
}
