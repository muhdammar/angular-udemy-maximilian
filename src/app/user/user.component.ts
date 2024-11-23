import { Component, Input, input, computed, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //this is @Input decorator
  //"avatar!" <--- this symbol was typescript features to allow the value is set outside this file
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  //@Output properties, old approach, most project use this
  @Output() select = new EventEmitter();

  //another new sytax for output properties,
  // it same like above but more shortcut
  // select = output<string>();


  /**
   * COMMENT THIS SINCE NO LONGER NEED to use signal, use old approach
   */
  //this input() is from signal features
  //benefit using this we no need to use exclamation mark to tell
  //typescript we had asign the value outside the component
  //avatar = input(''); //empty string
  //avatar = input(); //undefined
  //avatar = input<string>(); //generic type from angular features (string)
  //avatar = input.required(); //input is required
  //avatar = input.required<string>(); //input is required with generic type

  //these are READ ONLY signal
  //we cant change the avatar from signal function
  //like this.avatar.set("new image");
  // avatar = input<string>();
  // name = input<string>();

  //=======================================================

  //we can add "private selectedUser" to make it private
  //so it not available in the template but not in this case
  // selectedUser = DUMMY_USERS[randomIndex];

  //computed
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  //another way computed for signal
  // imagePathComputed = computed(() => 'assets/users/' + this.avatar())

  //events
  onSelectUser() {
    /**
     * COMMENT THIS SINCE NO LONGER NEED FOR TUTORIAL 30 ONWARDS
     */
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.id);
  }
}
