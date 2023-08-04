import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['username','name', 'city', 'age'];

  constructor(private data: DataService) {

  }



  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.data.getUsersData().subscribe((data: any) => {
      const dddd = Object.entries(data);
      const modifiedData: any[] = [];
      dddd.forEach((element:any) => {
        element[1].username=element[0]
        modifiedData.push(element[1])
      });
      this.dataSource = new MatTableDataSource<any>(modifiedData)

    })
  }
}
