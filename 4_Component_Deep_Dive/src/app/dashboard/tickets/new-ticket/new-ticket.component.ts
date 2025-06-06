import { Component,ElementRef,ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  //@ViewChild decorator
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  // @ViewChild(ButtonComponent) btn: ButtonComponent; // This is an alternative way to access the button component if needed
  onSubmit(titleElement: HTMLInputElement) {
    console.log('Title:', titleElement.value);
    // Handle form submission logic here
    console.log('New ticket submitted');
    this.form?.nativeElement.reset();
  }
}
