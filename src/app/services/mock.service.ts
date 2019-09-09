import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  lastContacts:[]
  lastError:string

  //ajax - https://domain/api/
  //getContacts, getMyDetails...


  login():Observable<any>{
    //this.http.get
    return of(true).pipe(delay(312))
  }

  getMyDetails():Observable<any>{
    //this.http.get
    return of({
      name:'ariel', 
      phone:1235,
      age:35
      
    }).pipe(delay(312))
  }

  getContacts(name:string):Observable<any>{
    //this.http.get
    return of({
      contacts:[
        { name:'ariel', phone:123 },
        { name:'ariel2', phone:1234 },
        { name:'ariel3', phone:1235 },
      ]
    }).pipe(
      delay(312),
      tap(data => this.lastContacts = data)
    )
  }
  

}
