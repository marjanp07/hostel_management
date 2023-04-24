import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogModel } from '../../interfaces/hostel.interface';
import { HostelService } from '../../services/hostel.service';

@Component({
  selector: 'app-common-delete-dialogue',
  templateUrl: './common-delete-dialogue.component.html',
  styleUrls: ['./common-delete-dialogue.component.scss']
})
export class CommonDeleteDialogueComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public details: DeleteDialogModel,private api:HostelService,private dialogRef: MatDialogRef<CommonDeleteDialogueComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.details)
  }

  async confirmDelete(id:number) {
    console.log(id);
    
    // this.isLoading = true;
    let status = this.details.type;
 try {
      switch (status) {
        case 'Delete-outPass':
          console.log('h');
          
        this.api.confirmoutPassDelete(id).subscribe(data=>{
          this.dialogRef.close()

        })
          //  let response=this.api.delevacca(this.details.id)
          
          break;
      

      ///////  delete vacate

      
        case 'Delete-roomVacate':
          console.log('h');
          
        this.api.confirmVacateDelete(id).subscribe(data=>{
          this.dialogRef.close()

        })
          //  let response=this.api.delevacca(this.details.id)
          
          break;

          //////// delete Add Room

          case 'Delete-AddRoom':
            console.log('h');
            
          this.api.confirmAddRoomDelete(id).subscribe(data=>{
            this.dialogRef.close()
  
          })
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
