import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstitutionMasterModel } from 'src/app/shared/interfaces/hostel.interface';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  baseUrl: string = '';
  Emblem = '';
  hide: boolean = true;
  Institutions: InstitutionMasterModel[] = [];
  rememberMe: { userID: string; password: string } = {
    userID: '',
    password: '',
  };

  loginForm: FormGroup = this.formBuilder.group({
    UserID: ['', [Validators.required]],
    Password: ['', [Validators.required]],
    InstitutionID: [, [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {}

  onSubmit() {}
}
