import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from 'src/app/shared/services/hostel.service';
import { AddAssetComponent } from '../../assets/add-asset/add-asset.component';
import { Block } from 'src/app/shared/interfaces/hostel.interface';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss']
})
export class AddBlockComponent implements OnInit {

  submitted=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Block,
  private dialogRef: MatDialogRef<AddAssetComponent>,
   private fb: FormBuilder, 
   private router: Router,
    private apiService: HostelService,
     private route: ActivatedRoute
  
  ) { }
  
  
  
  
  registrationForm=this.fb.group({
    id: 0,
    Block_name:['',[Validators.required,Validators.pattern(/^[A-Z]*$/)]],
    Floor:['',[Validators.required]],
    Number_of_Rooms:[0,[Validators.required]],
    Asset_type:['',[Validators.required]],
    Asset_name:['',[Validators.required]],
    Minimum_required_qty:[0,[Validators.required]],
  
  })
  
  get f()
  {
    return this.registrationForm.controls;
  }
  
  
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
   let formVal = this.registrationForm.value as Block
  
  if(this.data){
   this.apiService.blockupdate(this.data.id,formVal).subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  else {
   this.apiService.postblockdata(formVal)
   .subscribe((policy: any)=>{
     this.dialogRef.close()
       
      
   // this.router.navigate(['/hostel/outpass'])
      
   });
  }
  }

}
