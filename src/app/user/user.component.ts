import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //we can add private selected to make it private 
  //so it not available in the template but not in this case
  selectedUser = DUMMY_USERS[randomIndex];

  //computed
  get imagePath(){
    return 'assets/users/'+ this.selectedUser.avatar
  }

  //events
  onSelectUser(){
    const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
