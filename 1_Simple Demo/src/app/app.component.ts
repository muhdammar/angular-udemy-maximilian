import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgIf, NgFor } from '@angular/common'; //need to import ngfor and ngif if want to use that features (legacy)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent, TasksComponent], //need to import NgIf and NgFor here if want to use that features (legacy)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  //its okay if it not set (we tell typescript lol)
  selectedUserId? :string;
  get selectedUser(){
    //! put this to avoid "Possibile undefined" error
    // return this.users.find((user) => user.id == this.selectedUserId)!

    //we can remove the ! and put in html page selectedUser?.name to handle the run time error
    //becoz of accessing the undefined
    return this.users.find((user) => user.id == this.selectedUserId)
  }
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
