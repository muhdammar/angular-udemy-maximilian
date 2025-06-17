import { AfterViewInit, Component,ElementRef,EventEmitter,OnInit,output,Output,viewChild,ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  enteredTitle =""
  enteredText =""

  //@ViewChild decorator
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  //@ViewChild(ButtonComponent) btn: ButtonComponent; // This is an alternative way to access the button component if needed

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // angular 17+ syntax for required view child (signal way)
  @Output() add = new EventEmitter<{title: string; text: string}>();
  
  // add = output<{title: string; text: string}>(); //This is the new way to access the form element using signals in Angular 17+
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText
    })
    this.enteredTitle = '';
    this.enteredText = '';
    // Handle form submission logic here
    console.log('New ticket submitted');
    //this.form?.nativeElement.reset();

    //signal way to access the form element
    //this.form().nativeElement.reset();
  }

  //when we use ViewChild decorator, we can't access the form element in ngOnInit 
  //but can access it in ngAfterViewInit lifecycle hooks
  //when we use signal way to access the form element, we can access it in ngOnInit and ngAfterViewInit lifecycle hooks
  ngOnInit() {
    console.log("On Init");
    // console.log(this.form?.nativeElement); //View Child decorator is undefined
    console.log(this.form().nativeElement); //different output
  }

   ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    // console.log(this.form?.nativeElement);  //access this from ViewChild decorator

    //signal way to access the form element
    console.log(this.form().nativeElement);
  }
}
