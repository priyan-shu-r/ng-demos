import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetdataService {
 

  constructor(private http:HttpClient) { }

  // getUsers():Observable<user> {}

  getUsers(){
  //  set headers using get method
    const headers2= new HttpHeaders({
      'content-type': 'application/json',
      'authentication':'12345'
    });
  // use params for pagination, page size
  //   const params2= new HttpParams(){
  //    .set('pageNumber','10'),
  //    .set('pageSize','100');
  // }

    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: headers2 });
  }
}
