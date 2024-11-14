import { Component, Input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // "avatar!" <--- this symbol was typescript features to allow the value is set outside this file
  @Input({required: true}) avatar!: String;
  @Input({required: true}) name!: String;
  /**
   * COMMENT THIS SINCE NO LONGER NEED FOR TUTORIAL 30 ONWARDS
   */
  //we can add private selected to make it private
  //so it not available in the template but not in this case

  // selectedUser = DUMMY_USERS[randomIndex];

  //computed
  // get imagePath(){
  //   return 'assets/users/'+ this.selectedUser.avatar
  // }
  //another way computed
  imagePathComputed = computed(() => 'assets/users/' +this.avatar)

  //events
  onSelectUser() {
    /**
     * COMMENT THIS SINCE NO LONGER NEED FOR TUTORIAL 30 ONWARDS
     */
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
