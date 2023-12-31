import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private shared: SharedService){

  }

  currentTime="";
  private timer: any;

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);


    // this.clockHandle = setInterval(()=>{
    //   this.clock = new Date().toLocaleString();
    // },1000);


  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateTime(): void {
    this.currentTime = new Date().toLocaleString();
  }
}
