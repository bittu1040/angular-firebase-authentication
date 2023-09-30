import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {

  addUserForm: FormGroup;
  editUserForm: FormGroup;
  message = '';
  editDialog= false;
  username="";

  constructor(private fb: FormBuilder, private dataService: DataService,
    private dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string, editDialog: boolean,username: string }
  ) {
    this.message = data ? data.message : '';
    this.editDialog= data.editDialog;
    this.username= data.username

    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
    });

    this.editUserForm= this.fb.group({
      name: [''],
      city:[''],
      age: ['']
    })

    this.getUserDataForEdit();
    

  }

  getUserDataForEdit(){
    this.dataService.getUsersData().subscribe((allUserData: any) => {
      console.log("username: ", this.username);
      const userData = allUserData[this.username];
      console.log(userData)

      if (userData) {
        this.editUserForm.patchValue(userData);
      }
    });
  }

  submit(form: FormGroup) {
    if(form.valid){
    this.dialogRef.close({
      clicked: 'submit',
      userData: form
    });
  }
  }

  cancel() {
    this.dialogRef.close({
      clicked: 'cancel',
    });
  }
}
