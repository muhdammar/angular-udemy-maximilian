import {
  Component,
  Output,
  EventEmitter,
  signal,
  inject,
  Input,
} from '@angular/core';
//form module is collection for directive and features
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //another way of dependency injection
  private tasksService = inject(TasksService);
  //if want to use signal
  // enteredTitle=signal('')
  // enteredSummary=signal('')
  // enteredDate=signal('')

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredTitle,
        date: this.enteredTitle,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
