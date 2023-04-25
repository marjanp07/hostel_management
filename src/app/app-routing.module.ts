import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MatFormFieldControl } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  {
    path: 'hostel',
    loadChildren: () =>
      import('./hostel/hostel.module').then(
        (m) => m.HostelModule
      ),
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
