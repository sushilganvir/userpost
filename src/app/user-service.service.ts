import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //components
  showModel = false;

  constructor( private http: HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


  addUser(userData:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', userData)
  }

}
