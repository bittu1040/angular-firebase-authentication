import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  logoutButtonFlag= new Subject<boolean>();
  loginButtonFlag= new Subject<boolean>();
  constructor() { }
}
