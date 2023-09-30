import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url= "https://angular-authentication-cefa5-default-rtdb.firebaseio.com"

  getUsersData(){
    return this.http.get(this.url+"/"+ "users.json")
  }

  deleteEmp(id:number){
    return this.http.delete('http://localhost:3000/empDetails' + "/"+  id)
  }

  addEmpDetails(details: any){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post('http://localhost:3000/empDetails', details, options)
  }

  editUserDetails(id: any, user: any){
    return this.http.put('http://localhost:3000/empDetails' + "/" + id, user)
  }
}
