import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-authentication';
  currentLoggedInUserEmail: any;
  logoutButtonFlag: any;
  loginButtonFlag: any;
  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog, private shared: SharedService, private cdRef: ChangeDetectorRef) {

  }
  ngOnInit() {

    this.authService.getCurrentUser().subscribe((data) => {
      const email = data?.email;
      this.currentLoggedInUserEmail = email;
    });

    this.shared.logoutButtonFlag.subscribe((data) => {
      this.logoutButtonFlag = data;
    })

    this.shared.loginButtonFlag.subscribe((data) => {
      this.loginButtonFlag = data;
      })



  }


  confirmLogoutDialog() {
    const ref: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      {
        width: '400px',
        height: '190px',
        data: {
          message: 'Are you sure to logout?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'submit') {
        this.authService.signOut().then(() => {
          this.router.navigate(['login']);
          localStorage.removeItem('isLoggedIn');
          this.shared.loginButtonFlag.next(true)
        })
          .catch((error) => {
            window.alert(error.message)
          })
      }
    });
  }
}
