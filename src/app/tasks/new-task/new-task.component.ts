import { Component, Output, EventEmitter, signal } from '@angular/core';
//form module is collection for directive and features
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
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
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredTitle,
      date : this.enteredTitle
    })
  }
}
