import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url= "https://angular-authentication-cefa5-default-rtdb.firebaseio.com"

  getUsersData(){
    return this.http.get(this.url+"/"+ "users.json")
  }

  deleteUser(username:string){
    // const url = `${this.url}/users/${username}.json`;
    // return this.http.delete(url);
    return this.http.delete(this.url+ "/" + "users" + "/" + username + ".json")
  }

  addEmpDetails(details: any){
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post(this.url+ "/" + "users.json", details, options)
  }

/**
 * Edit user details by sending a PUT request to the API.
 * @param {any} id - The ID of the user to be edited.
 * @param {any} user - The updated user details.
 * @returns {Observable} - An Observable that emits the response from the API.
 */
editUserDetails(id:any, user:any): Observable<any> {
  const apiUrl = `${this.url}/users.json/${id}`;
  return this.http.put(apiUrl, user);
}
}
