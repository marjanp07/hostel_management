import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomSnack, SnackBarType } from '@components/custom-snack';
import { AqarApiService } from '../../aqar.api.service';
import { QuestionCognitiveLevel } from '../../aqar.interface';
import { AddDifficultyLevelComponent } from '../../difficulty-level/add-difficulty-level/add-difficulty-level.component';

@Component({
  selector: 'app-add-cognitive-level',
  templateUrl: './add-cognitive-level.component.html',
  styleUrls: ['./add-cognitive-level.component.scss'],
})
export class AddCognitiveLevelComponent implements OnInit {
  AddCognitiveLevelFG: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDifficultyLevelComponent>,
    private _snackBar: CustomSnack,
    private Api: AqarApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      val?: QuestionCognitiveLevel;
    }
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.AddCognitiveLevelFG = this.fb.group({
      CognitiveLevelID: [this.data.val?.CognitiveLevelID ?? 0],
      CognitiveLevelName: [
        this.data.val?.CognitiveLevelName ?? '',
        Validators.required,
      ],
      ShortName: [this.data.val?.ShortName ?? '', Validators.required],
      Weightage: [this.data.val?.Weightage ?? 0, Validators.required],
      SortOrder: [1],
    });
  }

  async onSubmit() {
    this.AddCognitiveLevelFG.markAllAsTouched();

    if (this.AddCognitiveLevelFG.valid) {
      try {
        let response = await this.Api.CreateQuestionCognitiveLevel({
          Weightage: this.AddCognitiveLevelFG.get('Weightage')?.value,
          CognitiveLevelName:
            this.AddCognitiveLevelFG.get('CognitiveLevelName')?.value,
          ShortName: this.AddCognitiveLevelFG.get('ShortName')?.value,
          CognitiveLevelID:
            this.AddCognitiveLevelFG.get('CognitiveLevelID')?.value,
          SortOrder: this.AddCognitiveLevelFG.get('SortOrder')?.value ?? 1,
        });
        if (response > 0) {
          this._snackBar.showNotification(
            SnackBarType.SUCCESS,
            `Cognitive ${this.data.val ? 'Updated' : 'Created'} Successfully`
          );
          this.dialogRef.close();
        } else {
          this._snackBar.showNotification(
            SnackBarType.ERROR,
            `Error while ${
              this.data.val ? 'Updating' : 'Creating'
            } Cognitive Level`
          );
        }
      } catch (e) {
        this._snackBar.showNotification(
          SnackBarType.ERROR,
          'Something went wrong. Please try again later.'
        );
      }
    } else
      this._snackBar.showNotification(
        SnackBarType.ERROR,
        'Please Complete Fields!..'
      );
  }
}