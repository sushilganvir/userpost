import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() form: EventEmitter<any> = new EventEmitter();

  title: string = '';
  body: string = '';

  constructor(public userData: UserServiceService) {}

  ngOnInit(): void {}

  addUser(user: any) {
    this.userData.addUser(user).subscribe((newUser) => {
      this.form.emit(newUser);
      this.userData.showModel = false;
    });
  }
}
