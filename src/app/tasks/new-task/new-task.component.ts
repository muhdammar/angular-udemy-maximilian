import { Component, Output, EventEmitter, signal } from '@angular/core';
//form module is collection for directive and features
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle=''
  enteredSummary=''
  enteredDate=''

  //if want to use signal
  // enteredTitle=signal('')
  // enteredSummary=signal('')
  // enteredDate=signal('')

  onCancel() {
    this.cancel.emit();
  }
}
