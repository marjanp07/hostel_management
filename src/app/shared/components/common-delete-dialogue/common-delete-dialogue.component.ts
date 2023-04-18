import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteDialogModel } from '../../interfaces/hostel.interface';
import { HostelService } from '../../services/hostel.service';

@Component({
  selector: 'app-common-delete-dialogue',
  templateUrl: './common-delete-dialogue.component.html',
  styleUrls: ['./common-delete-dialogue.component.scss']
})
export class CommonDeleteDialogueComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public details: DeleteDialogModel,private api:HostelService
  ) { }

  ngOnInit(): void {
  }

  async confirmDelete() {
    // this.isLoading = true;
    let status = this.details.type;
 try {
      switch (status) {
        case 'tutor':
          //  let response=this.api.delevacca(this.details.id)
          
          break;
      }
    }
 catch (error) {
      // this._snackBar.showNotification(
      //   SnackBarType.ERROR,
      //   'Server error occured. Please try again'
      // );
    } finally {
      // this.isLoading = false;
      // this.dialogRef.close(true);
    }
  }

}
