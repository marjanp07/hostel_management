import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Room, studentregisteration } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';


@Component({
  selector: 'app-admission-entry',
  templateUrl: './admission-entry.component.html',
  styleUrls: ['./admission-entry.component.scss']
})
export class AdmissionEntryComponent implements OnInit {

  state: studentregisteration | undefined; 
  constructor(private fb:NonNullableFormBuilder , private router:Router,
    breakpointObserver: BreakpointObserver,
    private activateRoute: ActivatedRoute,
    private Api: HostelService
    ) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      this.state = this.router.getCurrentNavigation()?.extras.state as studentregisteration
      
     }

  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this.fb.group({
    reg_no: [0, Validators.required],
    hosteler_name: ['', Validators.required],
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
    Father_name: ['', Validators.required],
    Mother_name: ['', Validators.required],
    Guardian_name: ['', Validators.required],
    Guardian_contact_no: [0, Validators.required],
    Occupation: ['', Validators.required],
    Address: ['', Validators.required],
    Select_block: [''],

  });

  // registrationForm=this.fb.group({
    // id:[0],
    // shop_id:[0,[Validators.required]],
    // name:['',[Validators.required]],
    // location:['',[Validators.required]],
    // phone_number:[0,[Validators.required]],
    // pincode:[0,[Validators.required]],
   


// })

ngOnInit(): void {
  this.Api.GetAddRoomByBlockName('').subscribe((datas: Room[])=>{ 
     //   this.datas1 = datas;
  //   console.log(this.datas1)

  })
  this.firstFormGroup.patchValue(this.state as any)

  console.log(this.router.getCurrentNavigation()?.extras.state);
  
}



sub()
{
  console.log('here');
  
  // let data1 = this.registrationForm.value as Shop;

  // this.apiService.createPolicy2(data1).subscribe((product: any)=>{

  const x:Partial<studentregisteration>= {
    ...this.firstFormGroup.value!,
 
  }

  

  this.Api.postadmissionentry(x).subscribe((product: any)=>{
  


    // let id = kvrgb.r


    // this.Api.[id == 0? 'postadmissionentry' : 'postadmissionentry'](x).subscribe((product: any)=>{
  
  

  // this.router.navigate(['/room'])
  // });
})}

allot()
{
  this.router.navigate(['/hostel/room_allot'])
}

}
