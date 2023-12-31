import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  selectedCategory: string = 'All'; 

  boxes = [
    { category: 'js', visible: false },
    { category: 'js', visible: false },
    { category: 'js', visible: false },
    { category: 'js', visible: false },
    { category: 'angular', visible: false },
    { category: 'angular', visible: false },
    { category: 'angular', visible: false },
    { category: 'angular', visible: false },
    { category: 'css', visible: false },
    { category: 'css', visible: false },
    { category: 'css', visible: false },
    { category: 'css', visible: false },
  ];

  pages: number[] = [1,2,3];
  
  ngOnInit(): void {
    this.showAll()
  }

  showAll() {
    this.selectedCategory = 'All';
    this.boxes.forEach(box => (box.visible = true));
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    this.boxes.forEach(box => {
      box.visible = box.category === category;
    });
  }

  previousPage() {
    // Handle logic to go to the previous page
  }
  
  nextPage() {
    // Handle logic to go to the next page
  }
  
  goToPage(page: number) {
    // Handle logic to go to a specific page
  }
}


// selected button highligt 
// add pagination in case of more than 10 blogs
// create different ts file for all data
// pass data through routig
// Add tabs in place of skills button
// implement search feature in nav bar

