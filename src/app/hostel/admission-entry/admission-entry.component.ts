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
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
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

}
