import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [SigninComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthenticationModule {}
