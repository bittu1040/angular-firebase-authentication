import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


  progressValue: number = 0; // Default value of 0 for the progress bar

  updateProgressBar(value: number): void {
    this.progressValue = value;
  }
}
