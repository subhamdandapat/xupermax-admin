import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const APIURL = "http://52.90.246.238:5000/apis/users/"
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http:HttpClient) { }

  //get all requesta...
  getusers(){
    return this.http.get(APIURL + 'requests')
  }
  //accept users requests...
  acceptrequest(id){
    console.log(id)
    return this.http.post(APIURL + 'accept?_id=' + id,{}) 
  }

   //reject users requests...
   rejectrequest(id){
     console.log(id)
    return this.http.post(APIURL + 'reject?_id='+id,{}) 
  }
}
