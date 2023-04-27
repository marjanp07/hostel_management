import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-admission-entry',
  templateUrl: './admission-entry.component.html',
  styleUrls: ['./admission-entry.component.scss']
})
export class AdmissionEntryComponent implements OnInit {

  constructor(private fb:FormBuilder , private router:Router,
    breakpointObserver: BreakpointObserver
    ) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
     }

  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this.fb.group({
    Register_no: [0, Validators.required],
    Student_name: ['', Validators.required],
    Gender: ['', Validators.required],
    Admission_date: ['', Validators.required],
    Religion: ['', Validators.required],
    Category: ['', Validators.required],
    id_proof_type: ['', Validators.required],
    Current_Class: ['', Validators.required],
    Email: ['', Validators.required],
    Blood_Group: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    c_number: [0, Validators.required],
  
  });
  secondFormGroup = this.fb.group({
    Father_name: ['', Validators.required],
    Mother_name: ['', Validators.required],
    Guardian_name: ['', Validators.required],
    Guardian_contact_no: [0, Validators.required],
    Occupation: ['', Validators.required],
    Address: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    Select_block: ['', Validators.required],
  });

  registrationForm=this.fb.group({
    // id:[0],
    // shop_id:[0,[Validators.required]],
    // name:['',[Validators.required]],
    // location:['',[Validators.required]],
    // phone_number:[0,[Validators.required]],
    // pincode:[0,[Validators.required]],
   


})

ngOnInit(): void {
  // this.apiService.readdata1().subscribe((datas: Shop[])=>{
  //   this.datas1 = datas;
  //   console.log(this.datas1)

  // })
}



onsub()
{
  // let data1 = this.registrationForm.value as Shop;

  // this.apiService.createPolicy2(data1).subscribe((product: any)=>{
  

  this.router.navigate(['/room'])
// });
}
allot()
{
  this.router.navigate(['/hostel/room_allot'])
}

}
