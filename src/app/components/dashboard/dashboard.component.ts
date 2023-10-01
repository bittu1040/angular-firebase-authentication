import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { UserFormDialogComponent } from 'src/app/dialogs/user-form-dialog/user-form-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'city', 'age', 'edit', 'delete'];

  constructor(private data: DataService, private shared: SharedService, public dialog: MatDialog, public loaderService: LoaderService) {

  }



  ngOnInit() {
    this.getUsers();
    this.shared.logoutButtonFlag.next(true);
    this.shared.loginButtonFlag.next(false)
  }

  getUsers() {
    this.data.getUsersData().subscribe((data: any) => {
      const dddd = Object.entries(data);
      const modifiedData: any[] = [];
      dddd.forEach((element:any) => {
        element[1].username=element[0]
        modifiedData.push(element[1])
      });
      console.log("data from firebase",modifiedData)
      this.dataSource = new MatTableDataSource<any>(modifiedData)

    })
  }


  redirectToAdd(){
    console.log("add user dialog opened");
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '350px',
      height: '400px',
      data: {
        editDialog: false
      }
    });
    
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data)
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
        console.log("input form data", data.userData.value)
        this.data.addEmpDetails(data.userData.value).subscribe((data)=>{
          console.log("user added successfully")
          this.getUsers();
        })
      }
    });
  }

  redirectToEdit(inp:any){
    console.log(inp)
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '350px',
      height: '400px',
      data: {
        editDialog: true,
        username: inp
      }
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data)
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
        console.log("input form data", data.userData.value)
        this.data.editUserDetails(inp, data.userData.value).subscribe((data)=>{
          console.log("user updated successfully")
          // this.getUsers();
        })
      }
    });
  }

  redirectToDelete(inp:any){
    console.log('selected id', inp);
    const ref: MatDialogRef<DeleteDialogComponent> = this.dialog.open(
      DeleteDialogComponent,
      {
        width: '400px',
        height: '210px',
        data: {
          message: 'Are you sure you want to delete user?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );

    ref.afterClosed().subscribe((data) => {
      console.log(data);
      if(data.clicked==="submit"){
        this.data.deleteUser(inp)
        .subscribe((data)=>{
          console.log("delete sucess");
        this.getUsers();
        })
      }

    });

  }

}
