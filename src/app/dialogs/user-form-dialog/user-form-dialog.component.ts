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
  userId=0;

  constructor(private fb: FormBuilder, private dataService: DataService,
    private dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string, editDialog: boolean,userId: number }
  ) {
    this.message = data ? data.message : '';
    this.editDialog= data.editDialog;
    this.userId= data.userId

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
    this.dataService.getUsersData().subscribe((allUserData:any)=>{
      console.log("id: ", this.userId)
      allUserData.filter((data:any)=>{
        if(data.id===this.userId){
            this.editUserForm.patchValue(data);
        }
    })
    })
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
