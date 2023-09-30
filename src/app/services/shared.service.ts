import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  logoutButtonFlag= new Subject<boolean>();
  loginButtonFlag= new  BehaviorSubject<boolean>(true);
  constructor() { }
}
