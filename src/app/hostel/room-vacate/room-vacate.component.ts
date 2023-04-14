import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { vacate } from 'src/app/shared/interfaces/hostel.interface';
import { HostelService } from 'src/app/shared/services/hostel.service';

@Component({
  selector: 'app-room-vacate',
  templateUrl: './room-vacate.component.html',
  styleUrls: ['./room-vacate.component.scss']
})
// export class RoomVacateComponent implements OnInit {
  export class RoomVacateComponent {


  // constructor() { }

  // ngOnInit(): void {
  // }

  constructor(private fb:FormBuilder,private router:Router,private apiService:HostelService) { }



  registrationForm=this.fb.group({


    hosteler_name:['',[Validators.required]],
    reg_no:[0,[Validators.required]],
    vacating_date:['',[Validators.required]],
    vacating_reason:['',[Validators.required]],
   





})
  onsub()
  {
    let data1 = this.registrationForm.value as vacate;
  
    this.apiService.createPolicy1(data1).subscribe((product: any)=>{
    
     
  //  this.router.navigate(['/home'])
  });
  }
  







}
