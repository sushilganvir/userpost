import { Component, OnInit, Output , EventEmitter  } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  title:string = '';
  body:string = '';



  constructor(public userData:UserServiceService) { }

  ngOnInit(): void {
  }

  onUserAdded(){}

  addUser(user:any){
    this.userData.addUser(user.value).subscribe(newUser => {
      console.log(newUser)

    })
  }


}
