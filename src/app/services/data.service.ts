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

  deleteEmp(username:string){
    return this.http.delete(this.url+"/"+ "users.json" + "/"+  username)
  }

  addEmpDetails(details: any){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post(this.url+ "/" + "users.json", details, options)
  }

  editUserDetails(id: any, user: any){
    return this.http.put("bbbbbbbbbbbbb"+ "/" + "users.json" + id, user)
  }
}
