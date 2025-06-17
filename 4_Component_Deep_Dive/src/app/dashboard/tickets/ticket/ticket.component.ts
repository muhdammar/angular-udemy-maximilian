import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //alias is used to rename the input property <component-name [data]="data">
  //not recommended to use alias in input property, as it can cause confusion
  // data = input.required<Ticket>({alias:"data"});

  data = input.required<Ticket>(); 
  close = output();
  detailsVisible = signal(false);
  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    // this.detailsVisible.update((wasVisible) => !wasVisible); //another way to toggle the signal value
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
