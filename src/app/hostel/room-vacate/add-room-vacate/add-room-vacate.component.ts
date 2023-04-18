import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { vacate } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-add-room-vacate',
  templateUrl: './add-room-vacate.component.html',
  styleUrls: ['./add-room-vacate.component.scss']
})
export class AddRoomVacateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: vacate,
   private dialogRef: MatDialogRef<AddRoomVacateComponent>,
    private fb: FormBuilder, 
    private router: Router,
     private apiService: HostelService,
      private route: ActivatedRoute

  ) { }




  registrationForm = this.fb.group({
    id: 0,
    hosteler_name: ['', [Validators.required]],
    reg_no: [0, [Validators.required]],
    vacating_date: ['', [Validators.required]],
    vacating_reason: ['', [Validators.required]],
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
    let formVal = this.registrationForm.value as vacate
  
   if(this.data){
    this.apiService.updatevacate(this.data.id,formVal).subscribe((policy: any)=>{
      this.dialogRef.close()
        
       
    // this.router.navigate(['/hostel/outpass'])
       
    });
   }
   else {
    this.apiService.AddVacate(formVal)
    .subscribe((policy: any)=>{
      this.dialogRef.close()
        
       
    // this.router.navigate(['/hostel/outpass'])
       
    });
   }
  }
}
