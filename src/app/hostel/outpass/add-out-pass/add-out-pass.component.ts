import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { outPass } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { DatePipe } from '@angular/common';

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
   private route: ActivatedRoute,
   private datePipe: DatePipe

) { }




registrationForm=this.fb.group({
  id: [0],
  reg_no:[0,[Validators.required]],
  hosteler_name:['',[Validators.required]],
  c_number:[0,[Validators.required]],
  date_of_outpass:['',[Validators.required,Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/)]],
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

 this.registrationForm.get('reg_no')?.valueChanges.subscribe(a=>{
  this.apiService.Getoutpassname(a!).subscribe(a=>{
    if(a.length>0){
  
      this.registrationForm.get('hosteler_name')?.patchValue(a[0].hosteler_name)
      this.registrationForm.get('c_number')?.patchValue(a[0].c_number)
    }
    })
 })


 // if (id == 0)
 //   console.log("add");
 // else if (id > 0)
 //   console.log("edit");
}

todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');

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
