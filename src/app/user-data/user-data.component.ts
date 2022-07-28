import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  userList:any;
  newUser:any;
  error: string = ''
  

  constructor(public user:UserServiceService) { }

  ngOnInit(): void {
    this.user.getUser().subscribe(data => {
      this.userList = data

    }, (error ) => {
      if(error.status === 404)
     this.error = 'no data available'
    })


  }

  userparent(user:any){
      console.log(user)
  }

  
 

}
