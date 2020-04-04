import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userrequests:any;

  constructor(public userlistProvider:UserlistService) { }

  ngOnInit(): void {
    this.getuserlist();
  }

  //get list of requests
  getuserlist(){
    this.userlistProvider.getusers().subscribe(result=>{
      let userlist:any = result;
      this.userrequests = userlist.data;
      console.log(userlist)
    })
  }

  //accept request...
  accept(id){
    console.log(id);
    this.userlistProvider.acceptrequest(id).subscribe(result=>{
      let accres:any = result;
      console.log(accres);
      this.getuserlist();
      alert("Request has been accepted")
    })
  }
  //reject request...
  reject(id){
    console.log(id);
    this.userlistProvider.rejectrequest(id).subscribe(result=>{
      let rejres:any = result;
      console.log(rejres);
      this.getuserlist();
    })
  }
}
